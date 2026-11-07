# Healthfirst QA Portfolio

My QA work at Healthfirst focused on member-facing workflows such as eligibility, coverage information, plan search, and enrollment. This portfolio brings together public QA records and runnable demos built with synthetic data.

## Testing Areas

| Testing Area | Coverage | Results |
|---|---|---|
| Manual QA Records | 50 documented test cases and QA activities, including Agile process records | 48 recorded Passed, 2 Failed |
| Cypress | 5 spec files covering UI, API workflows, eligibility, enrollment, and error handling | [50 tests passed](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/workflows/healthfirst-cypress.yml) |
| Playwright | Browser-based member portal workflows | [5 tests passed](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/workflows/healthfirst-playwright.yml) |
| Postman | 8 API requests covering member, plan, eligibility, and selection workflows | [19 assertions passed](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/workflows/healthfirst-postman.yml) |
| SQL Testing | 11 SQL examples covering member records, eligibility, and data validation | Documented examples |

## Project Documentation

- [Project Overview](Project-Documentation/PROJECT_OVERVIEW.md)
- [Test Plan](Project-Documentation/TEST_PLAN.md)
- [Test Strategy](Project-Documentation/TEST_STRATEGY.md)
- [Test Scenarios](Project-Documentation/TEST_SCENARIOS.md)
- [Test Environment](Project-Documentation/TEST_ENVIRONMENT.md)

## Manual Testing

Manual testing covers functional workflows, eligibility validation, plan search, enrollment, and application behavior.

- [Excel Workbook](Manual-Testing/Healthfirst_Manual_Test_Cases.xlsx)
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
