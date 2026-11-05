
describe("Member Eligibility", () => {
  beforeEach(() => {
    cy.visitPortal();
    cy.get('[data-cy="nav-eligibility"]').click();
  });

  it("ELIG-01 verifies an active member", () => {
    cy.fixture("members").then(({ active }) => {
      cy.checkEligibility(active.memberId);

      cy.get('[data-cy="coverage-status"]')
        .should("have.text", "active");

      cy.get('[data-cy="eligibility-member-id"]')
        .should("have.text", active.memberId);
    });
  });

  it("ELIG-02 identifies an inactive member", () => {
    cy.fixture("members").then(({ inactive }) => {
      cy.checkEligibility(inactive.memberId);

      cy.get('[data-cy="coverage-status"]')
        .should("have.text", "inactive");
    });
  });

  it("ELIG-03 handles a member ID with no matching record", () => {
    cy.checkEligibility("MBR999999");

    cy.get('[data-cy="eligibility-error"]')
      .should("be.visible")
      .and("contain", "No member record");
  });

  it("ELIG-04 requires member information", () => {
    cy.get('[data-cy="eligibility-submit"]').click();

    cy.get('[data-cy="eligibility-error"]')
      .should("be.visible")
      .and("contain", "Enter a member ID");
  });

  it("ELIG-05 displays the member's coverage status", () => {
    cy.checkEligibility("MBR100001");

    cy.get('[data-cy="coverage-status"]')
      .should("be.visible")
      .and("have.text", "active");

    cy.get('[data-cy="eligibility-results"]')
      .should("contain", "Choice Gold");
  });

  it("ELIG-06 displays the coverage start and end dates", () => {
    cy.fixture("members").then(({ active }) => {
      cy.checkEligibility(active.memberId);

      cy.get('[data-cy="eligibility-dates"]')
        .should(
          "have.text",
          `${active.coverageStart} to ${active.coverageEnd}`
        );
    });
  });

  it("ELIG-07 reports an unsuccessful eligibility service response", () => {
    cy.intercept("GET", "/api/eligibility?memberId=MBR100001", {
      statusCode: 503,
      body: {
        error: "Eligibility service is temporarily unavailable.",
      },
    }).as("eligibilityRequest");

    cy.checkEligibility("MBR100001");

    cy.wait("@eligibilityRequest").then(({ response }) => {
      expect(response.statusCode).to.equal(503);
    });

    cy.get('[data-cy="eligibility-error"]')
      .should("be.visible")
      .and("contain", "temporarily unavailable");
  });

  it("ELIG-08 shows eligibility information through the portal", () => {
    cy.checkEligibility("MBR100001");

    cy.get('[data-cy="eligibility-results"]')
      .should("contain", "Jordan Rivera")
      .and("contain", "Choice Gold")
      .and("contain", "2026-01-01 to 2026-12-31");
  });
});

describe("Enrollment Form", () => {
  beforeEach(() => {
    cy.visitPortal();
    cy.get('[data-cy="nav-enrollment"]').click();

    cy.get('[data-cy="enrollment-plan"] option')
      .should("have.length", 4);
  });

  it("ENR-01 submits a completed form to the enrollment API", () => {
    cy.fixture("enrollment").then((enrollment) => {
      cy.intercept("POST", "/api/enrollments")
        .as("enrollmentRequest");

      cy.get('[data-cy="enrollment-name"]')
        .type(enrollment.fullName);

      cy.get('[data-cy="enrollment-email"]')
        .type(enrollment.email);

      cy.get('[data-cy="enrollment-zip"]')
        .type(enrollment.zip);

      cy.get('[data-cy="enrollment-plan"]')
        .select(enrollment.planId);

      cy.get('[data-cy="enrollment-consent"]')
        .check();

      cy.get('[data-cy="enrollment-submit"]')
        .click();

      cy.wait("@enrollmentRequest").then(({ request, response }) => {
        expect(request.body).to.deep.equal(enrollment);
        expect(response.statusCode).to.equal(201);
      });

      cy.get('[data-cy="submission-confirmation"]')
        .should("be.visible")
        .and("contain", "Request received");
    });
  });

  it("ENR-02 validates required form fields", () => {
    cy.get('[data-cy="enrollment-submit"]').click();

    cy.get('[data-cy="enrollment-error"]')
      .should("be.visible")
      .and("contain", "Complete all required fields");
  });

  it("ENR-03 rejects an invalid email address", () => {
    cy.get('[data-cy="enrollment-name"]')
      .type("Casey Example");

    cy.get('[data-cy="enrollment-email"]')
      .type("not-an-email");

    cy.get('[data-cy="enrollment-zip"]')
      .type("10001");

    cy.get('[data-cy="enrollment-plan"]')
      .select("choice-gold");

    cy.get('[data-cy="enrollment-consent"]')
      .check();

    cy.get('[data-cy="enrollment-submit"]').click();

    cy.get('[data-cy="enrollment-error"]')
      .should("be.visible")
      .and("contain", "valid email");
  });

  it("ENR-04 rejects an invalid ZIP code", () => {
    cy.get('[data-cy="enrollment-name"]')
      .type("Casey Example");

    cy.get('[data-cy="enrollment-email"]')
      .type("casey@example.test");

    cy.get('[data-cy="enrollment-zip"]')
      .type("12A");

    cy.get('[data-cy="enrollment-plan"]')
      .select("choice-gold");

    cy.get('[data-cy="enrollment-consent"]')
      .check();

    cy.get('[data-cy="enrollment-submit"]').click();

    cy.get('[data-cy="enrollment-error"]')
      .should("be.visible")
      .and("contain", "five-digit ZIP");
  });

  it("ENR-05 prevents submission when information is missing", () => {
    cy.intercept("POST", "/api/enrollments")
      .as("enrollmentRequest");

    cy.get('[data-cy="enrollment-name"]')
      .type("Casey Example");

    cy.get('[data-cy="enrollment-submit"]').click();

    cy.get('[data-cy="enrollment-error"]')
      .should("be.visible");

    cy.get("@enrollmentRequest.all")
      .should("have.length", 0);
  });

  it("ENR-06 displays the successful submission confirmation", () => {
    cy.fixture("enrollment").then((enrollment) => {
      cy.get('[data-cy="enrollment-name"]')
        .type(enrollment.fullName);

      cy.get('[data-cy="enrollment-email"]')
        .type(enrollment.email);

      cy.get('[data-cy="enrollment-zip"]')
        .type(enrollment.zip);

      cy.get('[data-cy="enrollment-plan"]')
        .select(enrollment.planId);

      cy.get('[data-cy="enrollment-consent"]')
        .check();

      cy.get('[data-cy="enrollment-submit"]')
        .click();

      cy.get('[data-cy="submission-confirmation"]')
        .should("be.visible")
        .and("contain", "Request received");

      cy.get('[data-cy="confirmation-number"]')
        .should(($number) => {
          expect($number.text()).to.match(/^ENR-[A-Z0-9]+$/);
        });
    });
  });
});
