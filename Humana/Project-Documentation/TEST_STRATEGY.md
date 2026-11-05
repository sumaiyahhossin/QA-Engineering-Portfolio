# Test Strategy

**Project:** Healthcare plan browsing and member workflows  
**Role:** Junior QA Analyst

## Testing Goals

The testing approach represented in this portfolio focuses on plan search, plan information, member-facing workflows, form behavior, and regression coverage.

## Testing Approach

### Manual Testing
- Read the requirements and map out the main user flows.
- Write positive, negative, and boundary test cases.
- Run the tests and compare actual behavior with the expected result.
- Record failures and retest after fixes.

### Automation
- Use Java and Selenium WebDriver for repeatable browser checks.
- Use TestNG annotations and assertions.
- Use explicit waits when an element needs time to appear.
- Run the suite through Maven and review the test report.

The test classes in this repository keep their own locators and browser steps. There isn't a separate Page Object Model layer.

### SQL Checks
- Query test records when database access is available.
- Check member and coverage status and date fields.
- Look for duplicate records and missing values.
- Use joins to check related records.

## Test Levels

| Level | What I Checked |
| --- | --- |
| Functional | Individual features and user actions |
| Integration | Related parts of a workflow |
| System | Complete flows within the test scope |
| Regression | Existing features after a change |
| Smoke | Key features after a build or update |

## Defect Tracking

When a test fails, I record the steps, expected result, actual result, and any useful evidence. I check whether the issue is caused by the application, test data, environment, or automation before deciding how to report it.

## Test Data

The public examples use synthetic test values. These public examples use synthetic values. In an actual work environment, use only test accounts and data approved for that environment.
