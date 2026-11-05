Cypress.Commands.add("visitPortal", () => cy.visit("/"));

Cypress.Commands.add("searchPlans", (zip) => {
  cy.get('[data-cy="plan-zip"]').clear().type(zip);
  cy.get('[data-cy="plan-search-submit"]').click();
});

Cypress.Commands.add("checkEligibility", (memberId) => {
  cy.get('[data-cy="member-id"]').clear().type(memberId);
  cy.get('[data-cy="eligibility-submit"]').click();
});
