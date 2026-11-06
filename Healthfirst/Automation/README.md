# UI Automation

This folder contains two independent healthcare QA automation projects using Cypress and Playwright. Both use fictional applications and synthetic test data to demonstrate UI testing techniques relevant to my Healthfirst QA experience. Neither project connects to Healthfirst systems or contains employer source code.

## Cypress

- [Cypress project and setup instructions](Cypress/README.md)
- [Cypress test plan](Cypress/TEST_PLAN.md)

The Cypress project includes a local healthcare member portal demo, test fixtures, UI and API coverage, and a GitHub Actions workflow. Scenarios include member navigation, plan search, eligibility, form validation, and error handling. See the Cypress README for setup and execution details.

## Playwright

- [Playwright project and setup instructions](Playwright/README.md)
- [Playwright test plan](Playwright/TEST_PLAN.md)
- [Verified execution results](Playwright/TEST_EXECUTION_RESULTS.md)
- [Playwright UI test code](Playwright/tests/member-workflows.spec.js)

The Playwright project uses JavaScript and a local HTML demo to test eligibility lookup, required-field validation, unknown member handling, plan filtering, and plan selection. All five tests passed in the [verified GitHub Actions run](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/runs/42142787083) on November 5, 2026 (Eastern).

Each project has its own setup instructions and test coverage. The examples demonstrate automation practices without exposing confidential company data.
