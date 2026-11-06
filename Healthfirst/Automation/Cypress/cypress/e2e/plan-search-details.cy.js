describe("Health Plan Search", () => {
  beforeEach(() => {
    cy.visitPortal();
    cy.get('[data-cy="nav-plans"]').click();
  });

  it("SEARCH-01 searches successfully with a valid ZIP code", () => {
    cy.intercept("GET", "/api/plans?zip=10001").as("planSearch");
    cy.searchPlans("10001");
    cy.wait("@planSearch").its("response.statusCode").should("equal", 200);
    cy.get('[data-cy="plan-card"]').should("have.length", 3);
  });

  it("SEARCH-02 displays available plan names and monthly prices", () => {
    cy.searchPlans("10001");
    cy.get('[data-cy="plan-name"]').should("have.length", 3);
    cy.contains('[data-cy="plan-card"]', "Essential Silver").should("contain", "$245");
    cy.contains('[data-cy="plan-card"]', "Choice Gold").should("contain", "$389");
  });

  it("SEARCH-03 returns plans for a second valid ZIP code", () => {
    cy.searchPlans("10002");
    cy.get('[data-cy="plan-results"]').should("contain", "2 plans for 10002");
    cy.get('[data-cy="plan-card"]').should("have.length", 2);
  });

  it("SEARCH-04 shows validation for an invalid ZIP code", () => {
    cy.get('[data-cy="plan-zip"]').type("12A");
    cy.get('[data-cy="plan-search-submit"]').click();
    cy.get('[data-cy="plan-search-error"]').should("be.visible").and("contain", "five-digit ZIP");
    cy.get('[data-cy="plan-card"]').should("not.exist");
  });

  it("SEARCH-05 explains when a ZIP is outside the service area", () => {
    cy.searchPlans("90210");
    cy.get('[data-cy="plan-search-error"]').should("be.visible").and("contain", "outside the service area");
  });

  it("SEARCH-06 requires a ZIP code before searching", () => {
    cy.get('[data-cy="plan-search-submit"]').click();
    cy.get('[data-cy="plan-search-error"]').should("be.visible").and("contain", "Enter a ZIP code");
  });

  it("SEARCH-07 updates the displayed results when the ZIP changes", () => {
    cy.searchPlans("10001");
    cy.get('[data-cy="plan-card"]').should("have.length", 3);
    cy.searchPlans("10002");
    cy.get('[data-cy="plan-card"]').should("have.length", 2);
    cy.get('[data-cy="plan-results"]').should("contain", "2 plans for 10002");
  });

  it("SEARCH-08 shows an empty state when no plans are available", () => {
    cy.searchPlans("10003");
    cy.get('[data-cy="plan-results"]').should("contain", "No plans found")
      .and("contain", "There are no plans available for ZIP code 10003.");
  });
});

describe("Plan Details and Comparison", () => {
  beforeEach(() => {
    cy.visitPortal();
    cy.get('[data-cy="nav-plans"]').click();
    cy.searchPlans("10001");
  });

  it("PLAN-01 opens plan details from a search result", () => {
    cy.contains('[data-cy="plan-card"]', "Essential Silver").contains("View details").click();
    cy.get('[data-cy="plan-details"]').should("be.visible").and("contain", "Annual deductible");
  });

  it("PLAN-02 shows plan names in search results and details", () => {
    cy.get('[data-cy="plan-name"]').first().should("have.text", "Essential Silver");
    cy.contains('[data-cy="plan-card"]', "Choice Gold").contains("View details").click();
    cy.get('[data-cy="plan-details"] h2').should("have.text", "Choice Gold");
  });

  it("PLAN-03 displays the plan's monthly premium", () => {
    cy.contains('[data-cy="plan-card"]', "Choice Gold").contains("View details").click();
    cy.get('[data-cy="detail-premium"]').should("have.text", "$389");
  });

  it("PLAN-04 displays key coverage information", () => {
    cy.contains('[data-cy="plan-card"]', "Essential Silver").contains("View details").click();
    cy.get('[data-cy="plan-details"]').should("contain", "$1500")
      .and("contain", "$6500").and("contain", "Tiered prescription coverage");
  });

  it("PLAN-05 compares two available plans", () => {
    cy.contains('[data-cy="plan-card"]', "Essential Silver").contains("Compare").click();
    cy.contains('[data-cy="plan-card"]', "Choice Gold").contains("Compare").click();
    cy.get('[data-cy="comparison"]').should("be.visible")
      .and("contain", "Essential Silver").and("contain", "Choice Gold")
      .and("contain", "$245").and("contain", "$389");

    cy.searchPlans("10003");
    cy.get('[data-cy="plan-results"]').should("contain", "No plans found");
    cy.get('[data-cy="comparison"]').should("not.be.visible");
  });

  it("PLAN-06 displays a useful message when plan details are unavailable", () => {
    cy.intercept("GET", "/api/plans/essential-silver", {
      statusCode: 404,
      body: { error: "Plan was not found." },
    });
    cy.contains('[data-cy="plan-card"]', "Essential Silver").contains("View details").click();
    cy.get('[data-cy="plan-results"]').should("contain", "Plan details unavailable")
      .and("contain", "Plan was not found.");
  });
});
