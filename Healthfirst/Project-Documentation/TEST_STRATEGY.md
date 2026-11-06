# Test Strategy

**Project:** Member portal and healthcare workflows  
**Role:** Quality Assurance

## Testing Goals

Focus on member navigation, eligibility, plan information, selection workflows, validation messages, and regression coverage.

## Testing Approach

### Manual Testing
- Review requirements and identify main user flows.
- Write positive, negative, and boundary test cases.
- Record actual results and defects.
- Retest fixes and related workflows.

### UI Automation
- Use Playwright and Cypress for repeatable browser checks.
- Focus on visible behavior and stable locators.
- Keep tests independent and review failures and reports.

### API Testing
- Use Postman to check methods, status codes, response fields, and error handling.
- Validate responses against documented expectations.

### Data Checks
- Compare displayed and returned values with expected test data.
- Use generic SQL examples without private schemas or member records.

## Test Levels

| Level | What I Checked |
| --- | --- |
| Functional | Individual features and user actions |
| Integration | Connected steps in a workflow |
| System | Complete flows within the test scope |
| Smoke | Core workflows after updates |
| Regression | Existing behavior after changes |

## Defect Tracking

Record steps to reproduce, expected and actual behavior, severity, priority, and relevant evidence. Check application, data, environment, and automation causes before logging an issue. Retest fixes and perform related regression checks.

## Test Data and Portfolio Scope

Public examples use synthetic data and local demo systems. They do not contain real member information, employer credentials, private URLs, or internal Healthfirst source code.
