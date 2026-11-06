const views = [...document.querySelectorAll("[data-view]")];
const navigationLinks = [...document.querySelectorAll(".main-nav a")];
const planResults = document.querySelector('[data-cy="plan-results"]');
const eligibilityResults = document.querySelector('[data-cy="eligibility-results"]');
const planChoice = document.querySelector('[data-cy="enrollment-plan"]');
let availablePlans = [];
let enrollmentPlansLoaded = false;
let enrollmentPlansLoading = false;

async function loadEnrollmentPlans() {
  if (enrollmentPlansLoaded || enrollmentPlansLoading) return;
  enrollmentPlansLoading = true;
  try {
    const response = await fetch("/api/plans?zip=10001");
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "Plans are temporarily unavailable.");
    if (!body || !Array.isArray(body.plans)) throw new Error("Plan options could not be loaded.");
    body.plans.forEach((plan) => {
      const option = document.createElement("option");
      option.value = plan.id;
      option.textContent = plan.name;
      planChoice.append(option);
    });
    enrollmentPlansLoaded = true;
  } catch (error) {
    showError(document.querySelector('[data-cy="enrollment-error"]'), error.message);
  } finally {
    enrollmentPlansLoading = false;
  }
}

function showView(name) {
  const current = views.some((view) => view.dataset.view === name) ? name : "not-found";
  views.forEach((view) => {
    view.hidden = view.dataset.view !== current;
  });
  navigationLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${current}`;
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (current === "enrollment") loadEnrollmentPlans();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function showError(element, message) {
  element.textContent = message;
  element.hidden = false;
}

function requestErrorMessage(error, fallback) {
  return error instanceof TypeError ? fallback : error.message || fallback;
}

function clearError(element) {
  element.textContent = "";
  element.hidden = true;
}

function showEmpty(element, heading, message) {
  element.innerHTML = `<div class="empty-state"><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(message)}</p></div>`;
}

function renderPlans(plans, zip) {
  availablePlans = plans;
  planChoice.innerHTML = '<option value="">Select a plan</option>';
  plans.forEach((plan) => {
    const option = document.createElement("option");
    option.value = plan.id;
    option.textContent = plan.name;
    planChoice.append(option);
  });
  if (!plans.length) {
    showEmpty(planResults, "No plans found", `There are no plans available for ZIP code ${zip}.`);
    return;
  }
  planResults.innerHTML = `<p class="eyebrow">${plans.length} plans for ${escapeHtml(zip)}</p><div class="plan-grid">${plans.map((plan) => `
    <article class="plan-card" data-cy="plan-card" data-plan-id="${escapeHtml(plan.id)}">
      <p class="eyebrow">${escapeHtml(plan.type)} plan</p>
      <h2 data-cy="plan-name">${escapeHtml(plan.name)}</h2>
      <p class="plan-type">${escapeHtml(plan.summary)}</p>
      <p class="premium">$${escapeHtml(plan.monthlyPremium)} <small>/ month</small></p>
      <div class="plan-actions">
        <button class="button button-primary" data-action="details" data-plan-id="${escapeHtml(plan.id)}">View details</button>
        <button class="button button-secondary" data-action="compare" data-plan-id="${escapeHtml(plan.id)}">Compare</button>
      </div>
    </article>`).join("")}</div>`;
}

document.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const plan = availablePlans.find((item) => item.id === button.dataset.planId);
  if (button.dataset.action === "details") {
    planResults.querySelector(".detail-card")?.remove();
    try {
      const response = await fetch(`/api/plans/${encodeURIComponent(button.dataset.planId)}`);
      const detail = await response.json();
      if (!response.ok) throw new Error(detail.error || "Plan details could not be loaded.");
      const detailCard = document.createElement("article");
      detailCard.className = "detail-card";
      detailCard.dataset.cy = "plan-details";
      detailCard.innerHTML = `<p class="eyebrow">Plan details</p><h2>${escapeHtml(detail.name)}</h2><p>${escapeHtml(detail.summary)}</p>
        <div class="detail-grid">
          <div class="detail-item"><span>Monthly premium</span><strong data-cy="detail-premium">$${escapeHtml(detail.monthlyPremium)}</strong></div>
          <div class="detail-item"><span>Plan type</span><strong>${escapeHtml(detail.type)}</strong></div>
          <div class="detail-item"><span>Annual deductible</span><strong>$${escapeHtml(detail.deductible)}</strong></div>
          <div class="detail-item"><span>Out-of-pocket maximum</span><strong>$${escapeHtml(detail.outOfPocketMaximum)}</strong></div>
          <div class="detail-item"><span>Primary care visit</span><strong>$${escapeHtml(detail.primaryCare)}</strong></div>
          <div class="detail-item"><span>Specialist visit</span><strong>$${escapeHtml(detail.specialist)}</strong></div>
        </div><p>${escapeHtml(detail.prescription)}</p>`;
      planResults.append(detailCard);
    } catch (error) {
      showEmpty(planResults, "Plan details unavailable", error.message);
    }
  }
  if (button.dataset.action === "compare" && plan) {
    const selected = new Set(JSON.parse(button.closest(".plan-card").dataset.selected || "[]"));
    selected.add(plan.id);
    button.closest(".plan-card").dataset.selected = JSON.stringify([...selected]);
    const allSelected = new Set([...document.querySelectorAll(".plan-card")].flatMap((card) => JSON.parse(card.dataset.selected || "[]")));
    const comparison = document.querySelector('[data-cy="comparison"]');
    const chosen = availablePlans.filter((item) => allSelected.has(item.id));
    if (chosen.length < 2) {
      comparison.hidden = false;
      document.querySelector('[data-cy="comparison-table"]').innerHTML = "<p>Select one more plan to compare coverage and costs.</p>";
      return;
    }
    comparison.hidden = false;
    document.querySelector('[data-cy="comparison-table"]').innerHTML = `<table><thead><tr><th>Plan</th>${chosen.map((item) => `<th>${escapeHtml(item.name)}</th>`).join("")}</tr></thead><tbody>
      <tr><th>Monthly premium</th>${chosen.map((item) => `<td>$${item.monthlyPremium}</td>`).join("")}</tr>
      <tr><th>Deductible</th>${chosen.map((item) => `<td>$${item.deductible}</td>`).join("")}</tr>
      <tr><th>Out-of-pocket maximum</th>${chosen.map((item) => `<td>$${item.outOfPocketMaximum}</td>`).join("")}</tr>
      </tbody></table>`;
  }
});

document.querySelector('[data-cy="plan-search-form"]').addEventListener("submit", async (event) => {
  event.preventDefault();
  const zip = document.querySelector('[data-cy="plan-zip"]').value.trim();
  const error = document.querySelector('[data-cy="plan-search-error"]');
  clearError(error);
  planResults.replaceChildren();
  document.querySelector('[data-cy="comparison"]').hidden = true;
  if (!zip) return showError(error, "Enter a ZIP code to search.");
  if (!/^\d{5}$/.test(zip)) return showError(error, "Enter a valid five-digit ZIP code.");
  try {
    const response = await fetch(`/api/plans?zip=${encodeURIComponent(zip)}`);
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "Plan search is unavailable. Try again.");
    if (!body || !Array.isArray(body.plans)) throw new Error("We couldn't read the plan results. Try again.");
    renderPlans(body.plans, body.zip);
  } catch (requestError) {
    showError(error, requestErrorMessage(requestError, "Plan search is unavailable. Try again."));
  }
});

document.querySelector('[data-cy="eligibility-form"]').addEventListener("submit", async (event) => {
  event.preventDefault();
  const memberId = document.querySelector('[data-cy="member-id"]').value.trim().toUpperCase();
  const error = document.querySelector('[data-cy="eligibility-error"]');
  clearError(error);
  eligibilityResults.replaceChildren();
  if (!memberId) return showError(error, "Enter a member ID to check eligibility.");
  try {
    const response = await fetch(`/api/eligibility?memberId=${encodeURIComponent(memberId)}`);
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "Eligibility could not be checked. Try again.");
    eligibilityResults.innerHTML = `<article class="status-card">
      <span class="status-pill ${body.status === "inactive" ? "inactive" : ""}" data-cy="coverage-status">${escapeHtml(body.status)}</span>
      <h2>${escapeHtml(body.firstName)} ${escapeHtml(body.lastName)}</h2>
      <p>Member ID: <strong data-cy="eligibility-member-id">${escapeHtml(body.memberId)}</strong></p>
      <p>Plan: <strong>${escapeHtml(body.planName)}</strong></p>
      <p>Coverage dates: <strong data-cy="eligibility-dates">${escapeHtml(body.coverageStart)} to ${escapeHtml(body.coverageEnd)}</strong></p>
    </article>`;
  } catch (requestError) {
    showError(error, requestErrorMessage(requestError, "Eligibility could not be checked. Try again."));
  }
});

document.querySelector('[data-cy="enrollment-form"]').addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const error = document.querySelector('[data-cy="enrollment-error"]');
  const confirmation = document.querySelector('[data-cy="enrollment-confirmation"]');
  clearError(error);
  confirmation.replaceChildren();
  const enrollment = {
    fullName: document.querySelector('[data-cy="enrollment-name"]').value.trim(),
    email: document.querySelector('[data-cy="enrollment-email"]').value.trim(),
    zip: document.querySelector('[data-cy="enrollment-zip"]').value.trim(),
    planId: planChoice.value,
  };
  if (Object.values(enrollment).some((value) => !value)) return showError(error, "Complete all required fields.");
  if (!document.querySelector('[data-cy="enrollment-consent"]').checked) {
    return showError(error, "Confirm the demonstration request before submitting.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enrollment.email)) {
    return showError(error, "Enter a valid email address.");
  }
  if (!/^\d{5}$/.test(enrollment.zip)) return showError(error, "Enter a valid five-digit ZIP code.");
  try {
    const response = await fetch("/api/enrollments", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(enrollment),
    });
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "Your request could not be submitted. Try again.");
    confirmation.innerHTML = `<div class="confirmation-card" data-cy="submission-confirmation"><h2>Request received</h2>
      <p>${escapeHtml(body.message)}</p><p>Confirmation number: <strong data-cy="confirmation-number">${escapeHtml(body.confirmationNumber)}</strong></p></div>`;
    form.reset();
  } catch (requestError) {
    showError(error, requestErrorMessage(requestError, "Your request could not be submitted. Try again."));
  }
});

window.addEventListener("hashchange", () => showView(window.location.hash.slice(1) || "home"));
showView(window.location.hash.slice(1) || "home");
