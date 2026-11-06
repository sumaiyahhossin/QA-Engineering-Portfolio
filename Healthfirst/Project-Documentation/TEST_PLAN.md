# Test Plan

**Project:** Member portal and healthcare workflows  
**Role:** Quality Assurance  
**Methodology:** Agile / Scrum

## 1. Purpose

This plan summarizes the QA approach represented in the portfolio examples, including member eligibility, coverage information, plan browsing, form validation, API responses, and regression testing.

## 2. What Was Tested

- Member portal navigation and key user flows.
- Eligibility status and coverage information.
- Plan search, listings, details, and selection.
- Required fields, invalid values, and error messages.
- API response codes, fields, and error handling.
- Data consistency and regression scenarios.

## 3. Testing Types

| Type | What I Checked |
| --- | --- |
| Functional | Expected behavior of individual features |
| Smoke | Key workflows after an update |
| Regression | Existing behavior after changes |
| Integration | Connected steps in member and plan workflows |
| Negative | Missing, invalid, or unsupported inputs |
| Boundary | Values at documented field limits |
| UI | Navigation, forms, content, and messages |
| API | Response codes, structure, and error handling |
| Data | Values compared with expected test records |

## 4. Tools

Playwright, Cypress, JavaScript, TypeScript, Postman, REST APIs, JSON, SQL, Excel, Jira, Zephyr, and GitHub Actions for public portfolio CI.

## 5. Test Process

1. Review the requirement and expected behavior.
2. Identify test scenarios and prepare synthetic test data.
3. Run manual tests and record actual results.
4. Automate repeatable UI and API checks where appropriate.
5. Document defects with steps and expected versus actual behavior.
6. Retest fixes and run related regression checks.
7. Review the execution results.

## 6. Entry and Exit Criteria

**Entry:** Requirements, environment access, and suitable test data are available; the application version is ready for testing.

**Exit:** Planned cases have recorded statuses, failures have documented follow-up, relevant fixes have been retested, and regression results are recorded.

## 7. Deliverables

Manual test cases and execution records, defect reports, Playwright and Cypress examples, Postman API tests, and SQL validation examples.

## 8. Test Data and Scope

The public portfolio uses synthetic values and local demo services. It does not connect to Healthfirst internal systems or perform real eligibility decisions or enrollment transactions.
