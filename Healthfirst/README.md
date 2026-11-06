# Healthfirst QA Portfolio

This project covers quality assurance testing for a healthcare member portal, including member eligibility, health plan search, enrollment, API functionality, and data validation.

The portfolio includes manual testing documentation, automated test scripts, API testing, SQL examples, and project documentation.

## Project Overview

The application supports common healthcare workflows, allowing members to review coverage information, search available health plans, check eligibility, and complete enrollment-related actions.

Testing focuses on functionality, data accuracy, error handling, and consistent application behavior.

## Testing Areas

| Testing Area | Coverage | Results |
|---|---|---|
| Manual Testing | 50 test cases covering member workflows and application functionality | 48 Passed, 2 Failed |
| Cypress | 5 spec files covering UI, API workflows, eligibility, enrollment, and error handling | 50 Passed, 0 Failed |
| Playwright | Browser-based member portal workflows | 5 Passed, 0 Failed |
| Postman | 7 API requests covering member, plan, eligibility, and selection workflows | 17 Assertions Passed, 0 Failed |
| SQL Testing | 11 SQL examples covering member records, eligibility, and data validation | Documented examples |

## Project Documentation

- [Project Overview](Project-Documentation/PROJECT_OVERVIEW.md)
- [Test Plan](Project-Documentation/TEST_PLAN.md)
- [Test Strategy](Project-Documentation/TEST_STRATEGY.md)
- [Test Scenarios](Project-Documentation/TEST_SCENARIOS.md)
- [Test Environment](Project-Documentation/TEST_ENVIRONMENT.md)

## Manual Testing

Manual testing covers functional workflows, eligibility validation, plan search, enrollment, and application behavior.

- [Manual Testing Overview](Manual-Testing/README.md)
- [Test Cases](Manual-Testing/TEST_CASES.md)
- [Test Execution Results](Manual-Testing/TEST_EXECUTION_RESULTS.md)
- [Defect Reports](Manual-Testing/Defect-Reports/README.md)
- [Defect Report Template](Manual-Testing/Defect-Reports/DEFECT-REPORT-TEMPLATE.md)

## Automation Testing

### Cypress

Cypress automation covers member portal navigation, eligibility, enrollment, health plan search, API workflows, and error handling.

- [Cypress Documentation](Automation/Cypress/README.md)
- [Cypress Test Plan](Automation/Cypress/TEST_PLAN.md)
- [Cypress Test Scripts](Automation/Cypress/cypress/e2e/)

### Playwright

Playwright automation covers browser-based workflows and validates the behavior of the member-facing application.

- [Playwright Documentation](Automation/Playwright/README.md)
- [Playwright Test Plan](Automation/Playwright/TEST_PLAN.md)
- [Playwright Execution Results](Automation/Playwright/TEST_EXECUTION_RESULTS.md)
- [Playwright Test Scripts](Automation/Playwright/tests/)

## API Testing

API testing uses Postman to validate member information, health plan details, eligibility responses, and plan selection workflows.

- [API Testing Overview](API-Testing/README.md)
- [API Test Cases](API-Testing/API-TEST-CASES.md)
- [Postman Documentation](API-Testing/Postman/README.md)
- [Postman Collection](API-Testing/Postman/Healthcare_API.postman_collection.json)

## SQL Testing

SQL examples demonstrate database validation techniques used in healthcare application testing.

Coverage includes:

- Member record validation
- Eligibility and coverage dates
- Plan information
- Duplicate record checks
- Missing data validation
- SQL joins
- Data integrity checks

- [SQL Testing Overview](SQL-Testing/README.md)
- [SQL Queries](SQL-Testing/SQL-QUERIES.md)

## Tools and Technologies

- **Automation:** Cypress, Playwright, JavaScript, Node.js
- **API Testing:** Postman, REST APIs, JSON
- **Database:** SQL, Oracle-compatible queries
- **CI/CD:** GitHub Actions
- **QA Management:** Jira, Zephyr
- **Version Control:** Git, GitHub

## Test Data and Privacy

All public portfolio examples use synthetic test data. No real member information, credentials, confidential employer documentation, or private system information is included.

Automation examples use a demo application and are intended to demonstrate QA testing approaches and technical skills.

