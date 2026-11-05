describe("Error Handling and Additional Scenarios", () => {
  beforeEach(() => {
    cy.visitPortal();
    cy.get('[data-cy="nav-plans"]').click();
  });

  it("ERR-01 shows an error when the plan service returns a server error", () => {
    cy.intercept("GET", "/api/plans?zip=10001", {
      statusCode: 500,
      body: { error: "Plan service error." },
    });
    cy.searchPlans("10001");
    cy.get('[data-cy="plan-search-error"]').should("be.visible").and("contain", "Plan service error");
  });

  it("ERR-02 handles an unavailable eligibility API", () => {
    cy.get('[data-cy="nav-eligibility"]').click();
    cy.intercept("GET", "/api/eligibility?memberId=MBR100001", { forceNetworkError: true });
    cy.checkEligibility("MBR100001");
    cy.get('[data-cy="eligibility-error"]').should("be.visible")
      .and("contain", "Eligibility could not be checked");
  });

  it("ERR-03 rejects unexpected plan response data", () => {
    cy.intercept("GET", "/api/plans?zip=10001", {
      statusCode: 200,
      body: { zip: "10001", plans: "unexpected" },
    });
    cy.searchPlans("10001");
    cy.get('[data-cy="plan-search-error"]').should("be.visible").and("contain", "couldn't read the plan results");
  });

  it("ERR-04 shows a useful message for an API validation error", () => {
    cy.intercept("GET", "/api/plans?zip=90210", {
      statusCode: 422,
      body: { error: "This ZIP code is outside the service area." },
    });
    cy.searchPlans("90210");
    cy.get('[data-cy="plan-search-error"]').should("be.visible")
      .and("contain", "outside the service area");
  });

  it("ERR-05 displays the no-results empty state", () => {
    cy.searchPlans("10003");
    cy.get('[data-cy="plan-results"] .empty-state').should("be.visible").and("contain", "No plans found");
  });

  it("ERR-06 keeps enrollment usable after a failed submission", () => {
    cy.get('[data-cy="nav-enrollment"]').click();
    cy.fixture("enrollment").then((enrollment) => {
      cy.get('[data-cy="enrollment-name"]').type(enrollment.fullName);
      cy.get('[data-cy="enrollment-email"]').type(enrollment.email);
      cy.get('[data-cy="enrollment-zip"]').type(enrollment.zip);
      cy.get('[data-cy="enrollment-plan"]').select(enrollment.planId);
      cy.get('[data-cy="enrollment-consent"]').check();
      cy.intercept("POST", "/api/enrollments", {
        statusCode: 503,
        body: { error: "Enrollment is temporarily unavailable." },
      });
      cy.get('[data-cy="enrollment-submit"]').click();
      cy.get('[data-cy="enrollment-error"]').should("be.visible").and("contain", "temporarily unavailable");
      cy.get('[data-cy="enrollment-form"]').should("be.visible");
    });
  });
});
