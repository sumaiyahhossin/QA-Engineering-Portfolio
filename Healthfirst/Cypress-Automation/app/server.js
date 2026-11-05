
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const plans = require("./data/plans.json");
const members = require("./data/members.json");

const port = Number(process.env.PORT || 4173);
const publicDirectory = path.join(__dirname, "public");

const serviceableZips = new Set(["10001", "10002"]);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

function sendJson(response, status, body) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
  });

  response.end(JSON.stringify(body));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    let tooLarge = false;

    request.setEncoding("utf8");

    request.on("data", (chunk) => {
      if (tooLarge) return;

      body += chunk;

      if (body.length > 10_000) {
        tooLarge = true;
        reject(new Error("Request body is too large."));
      }
    });

    request.on("end", () => {
      if (tooLarge) return;

      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Request body must be valid JSON."));
      }
    });

    request.on("error", (error) => {
      reject(error);
    });
  });
}

async function handleApi(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/health") {
    return sendJson(response, 200, { status: "ok" });
  }

  if (request.method === "GET" && url.pathname === "/api/plans") {
    const zip = url.searchParams.get("zip");

    if (!zip) {
      return sendJson(response, 400, {
        error: "ZIP code is required.",
      });
    }

    if (!/^\d{5}$/.test(zip)) {
      return sendJson(response, 400, {
        error: "ZIP code must contain five digits.",
      });
    }

    if (!serviceableZips.has(zip) && zip !== "10003") {
      return sendJson(response, 422, {
        error: "This ZIP code is outside the service area.",
      });
    }

    const availablePlans =
      zip === "10003"
        ? []
        : zip === "10002"
          ? plans.filter((plan) => plan.id !== "value-bronze")
          : plans;

    return sendJson(response, 200, {
      zip,
      plans: availablePlans,
    });
  }

  const planMatch = url.pathname.match(/^\/api\/plans\/([a-z0-9-]+)$/);

  if (request.method === "GET" && planMatch) {
    const plan = plans.find((item) => item.id === planMatch[1]);

    return plan
      ? sendJson(response, 200, plan)
      : sendJson(response, 404, {
          error: "Plan was not found.",
        });
  }

  if (request.method === "GET" && url.pathname === "/api/eligibility") {
    const memberId = url.searchParams.get("memberId");

    if (!memberId) {
      return sendJson(response, 400, {
        error: "Member ID is required.",
      });
    }

    if (!/^[A-Z0-9]{6,12}$/.test(memberId)) {
      return sendJson(response, 400, {
        error: "Member ID format is invalid.",
      });
    }

    const member = members.find((item) => item.memberId === memberId);

    if (!member) {
      return sendJson(response, 404, {
        error: "No member record was found.",
      });
    }

    const plan = plans.find((item) => item.id === member.planId);

    if (!plan) {
      return sendJson(response, 404, {
        error: "Member plan was not found.",
      });
    }

    return sendJson(response, 200, {
      ...member,
      planName: plan.name,
      eligible: member.status === "active",
    });
  }

  if (request.method === "POST" && url.pathname === "/api/enrollments") {
    let enrollment;

    try {
      enrollment = await readJson(request);
    } catch (error) {
      return sendJson(response, 400, {
        error: error.message,
      });
    }

    if (
      !enrollment ||
      typeof enrollment !== "object" ||
      Array.isArray(enrollment)
    ) {
      return sendJson(response, 400, {
        error: "Request body must contain an enrollment object.",
      });
    }

    const required = ["fullName", "email", "zip", "planId"];

    if (
      required.some(
        (field) =>
          typeof enrollment[field] !== "string" ||
          !enrollment[field].trim()
      )
    ) {
      return sendJson(response, 400, {
        error: "Complete all required fields.",
      });
    }

    const fullName = enrollment.fullName.trim();
    const email = enrollment.email.trim();
    const zip = enrollment.zip.trim();
    const planId = enrollment.planId.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return sendJson(response, 400, {
        error: "Enter a valid email address.",
      });
    }

    if (!/^\d{5}$/.test(zip)) {
      return sendJson(response, 400, {
        error: "ZIP code must contain five digits.",
      });
    }

    if (!serviceableZips.has(zip)) {
      return sendJson(response, 422, {
        error: "This ZIP code is outside the service area.",
      });
    }

    const availablePlans =
      zip === "10002"
        ? plans.filter((plan) => plan.id !== "value-bronze")
        : plans;

    if (!availablePlans.some((plan) => plan.id === planId)) {
      return sendJson(response, 400, {
        error: "Select an available plan.",
      });
    }

    return sendJson(response, 201, {
      confirmationNumber: `ENR-${Date.now().toString(36).toUpperCase()}`,
      message: "Your enrollment request has been received.",
    });
  }

  return sendJson(response, 404, {
    error: "API endpoint was not found.",
  });
}

const server = http.createServer(async (request, response) => {
  const url = new URL(
    request.url,
    `http://${request.headers.host || "localhost"}`
  );

  if (url.pathname.startsWith("/api/")) {
    return handleApi(request, response, url);
  }

  if (request.method !== "GET") {
    response.writeHead(405, {
      "content-type": "text/plain; charset=utf-8",
      allow: "GET",
    });

    return response.end("Method not allowed");
  }

  const requestedPath =
    url.pathname === "/" ? "index.html" : url.pathname.slice(1);

  const resolvedPath = path.resolve(publicDirectory, requestedPath);
  const relativePath = path.relative(publicDirectory, resolvedPath);

  if (
    relativePath.startsWith("..") ||
    path.isAbsolute(relativePath)
  ) {
    response.writeHead(403);
    return response.end("Forbidden");
  }

  fs.readFile(resolvedPath, (error, content) => {
    if (error) {
      response.writeHead(404, {
        "content-type": "text/plain; charset=utf-8",
      });

      return response.end("Not found");
    }

    response.writeHead(200, {
      "content-type":
        contentTypes[path.extname(resolvedPath)] ||
        "application/octet-stream",
    });

    response.end(content);
  });
});

server.listen(port, "127.0.0.1", () => {
  process.stdout.write(
    `Member portal listening on http://127.0.0.1:${port}\n`
  );
});
