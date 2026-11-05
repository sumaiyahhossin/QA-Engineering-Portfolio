
describe("API Testing", () => {
  it("API-01 returns a successful health check", () => {
    cy.request("/api/health").then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body).to.deep.equal({ status: "ok" });
    });
  });

  it("API-02 returns success status codes for known resources", () => {
    cy.request("/api/plans?zip=10001")
      .its("status")
      .should("equal", 200);

    cy.request("/api/eligibility?memberId=MBR100001")
      .its("status")
      .should("equal", 200);
  });

  it("API-03 returns the expected plan search response structure", () => {
    cy.request("/api/plans?zip=10001").then(({ body }) => {
      expect(body).to.have.keys("zip", "plans");
      expect(body.zip).to.equal("10001");
      expect(body.plans).to.be.an("array").and.not.be.empty;
    });
  });

  it("API-04 includes required properties in plan details", () => {
    cy.fixture("plans").then((plans) => {
      cy.request("/api/plans/essential-silver").then(({ status, body }) => {
        expect(status).to.equal(200);
        expect(body).to.include(plans[0]);
        expect(body).to.have.all.keys(
          "id",
          "name",
          "type",
          "monthlyPremium",
          "deductible",
          "outOfPocketMaximum",
          "primaryCare",
          "specialist",
          "prescription",
          "summary"
        );
      });
    });
  });

  it("API-05 returns active member eligibility and coverage dates", () => {
    cy.fixture("members").then(({ active }) => {
      cy.request("/api/eligibility?memberId=MBR100001").then(({ body }) => {
        expect(body).to.deep.equal(active);
      });
    });
  });

  it("API-06 updates plan search results for another valid ZIP code", () => {
    cy.request("/api/plans?zip=10002").then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body.zip).to.equal("10002");
      expect(body.plans.map((plan) => plan.id)).to.deep.equal([
        "essential-silver",
        "choice-gold",
      ]);
    });
  });

  it("API-07 returns not found for an unknown member ID", () => {
    cy.request({
      url: "/api/eligibility?memberId=MBR999999",
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(404);
      expect(body.error).to.equal("No member record was found.");
    });
  });

  it("API-08 rejects missing and invalid request parameters", () => {
    cy.request({
      url: "/api/plans",
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(400);
      expect(body.error).to.equal("ZIP code is required.");
    });

    cy.request({
      url: "/api/plans?zip=12A",
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(400);
      expect(body.error).to.equal("ZIP code must contain five digits.");
    });

    cy.request({
      url: "/api/eligibility",
      failOnStatusCode: false,
    })
      .its("status")
      .should("equal", 400);
  });

  it("API-09 returns a structured error for a ZIP outside the service area", () => {
    cy.request({
      url: "/api/plans?zip=90210",
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(422);
      expect(body).to.have.property(
        "error",
        "This ZIP code is outside the service area."
      );
    });
  });

  it("API-10 rejects incomplete enrollment requests and unknown endpoints", () => {
    cy.request({
      method: "POST",
      url: "/api/enrollments",
      body: { fullName: "Casey Example" },
      failOnStatusCode: false,
    }).then(({ status, body }) => {
      expect(status).to.equal(400);
      expect(body.error).to.equal("Complete all required fields.");
    });

    cy.request({
      url: "/api/not-a-resource",
      failOnStatusCode: false,
    })
      .its("status")
      .should("equal", 404);
  });
});
