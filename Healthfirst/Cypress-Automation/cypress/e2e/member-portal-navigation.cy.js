
describe("Member Portal Navigation", () => {
  beforeEach(() => {
    cy.visitPortal();
  });

  it("NAV-01 loads the application successfully", () => {
    cy.title().should("equal", "Harbor Health | Member Portal");
    cy.get('[data-cy="home-view"]').should("be.visible");
    cy.contains("Care that fits").should("be.visible");
  });

  it("NAV-02 displays the main navigation", () => {
    cy.get('[aria-label="Main navigation"] a')
      .should("have.length", 4)
      .and("be.visible");

    cy.get('[data-cy="nav-home"]').should("contain", "Home");
    cy.get('[data-cy="nav-plans"]').should("contain", "Find a plan");
    cy.get('[data-cy="nav-eligibility"]').should("contain", "Check eligibility");
    cy.get('[data-cy="nav-enrollment"]').should("contain", "Enrollment");
  });

  it("NAV-03 navigates between portal sections", () => {
    cy.get('[data-cy="nav-plans"]').click();
    cy.get('[data-cy="plans-view"]').should("be.visible");

    cy.get('[data-cy="nav-eligibility"]').click();
    cy.get('[data-cy="eligibility-view"]').should("be.visible");

    cy.get('[data-cy="nav-enrollment"]').click();
    cy.get('[data-cy="enrollment-view"]').should("be.visible");
  });

  it("NAV-04 shows the expected headings and section content", () => {
    cy.get('[data-cy="home-view"]')
      .should("contain", "Find coverage for your needs.");

    cy.get('[data-cy="nav-plans"]').click();
    cy.get('[data-cy="plans-view"] h1')
      .should("have.text", "Find a health plan");

    cy.get('[data-cy="nav-eligibility"]').click();
    cy.get('[data-cy="eligibility-view"]')
      .should("contain", "synthetic member ID");
  });

  it("NAV-05 handles an invalid section link", () => {
    cy.visit("/#not-a-section");

    cy.get('[data-cy="not-found-view"]')
      .should("be.visible")
      .and("contain", "Page not found");
  });

  it("NAV-06 keeps the brand and page links working", () => {
    cy.get('[data-cy="home-plan-link"]').click();

    cy.get('[data-cy="plans-view"]').should("be.visible");
    cy.location("hash").should("equal", "#plans");

    cy.get('[data-cy="brand-home"]').click();

    cy.get('[data-cy="home-view"]').should("be.visible");
    cy.location("hash").should("equal", "#home");

    cy.get('[data-cy="nav-enrollment"]').click();

    cy.get('[data-cy="enrollment-view"]').should("be.visible");
    cy.location("hash").should("equal", "#enrollment");
  });
});
