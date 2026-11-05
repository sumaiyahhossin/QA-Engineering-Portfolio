# Test Strategy

**Project area:** Member-facing healthcare workflows

## Functional Testing

Cover the main member workflows, eligibility-related steps, plan browsing, plan selection, required fields, and error messages.

## Positive and Negative Testing

Check normal user flows as well as missing information, invalid formats, unsupported values, and unsuccessful service responses.

## Boundary Testing

Check values around documented limits, including date ranges and minimum or maximum field lengths.

## UI Automation

Use Playwright and Cypress for repeatable browser checks. Keep tests focused on user-visible behavior, use stable locators, and avoid depending on test execution order.

## API Testing

Use Postman to check request methods, status codes, response structure, required fields, error responses, and values against the API requirements.

## Data Validation

Compare application or API values with expected test data. SQL examples in this portfolio use generic table and column names.

## Regression Testing

After a change or defect fix, retest the affected workflow and check related areas that could be impacted.

## Defect Reporting

Include clear steps to reproduce, expected behavior, actual behavior, severity, priority, and relevant evidence. Retest the fix and run the related regression checks.

## Test Data

Use synthetic values in public examples. Do not include member information, credentials, private URLs, internal schemas, or confidential employer material.

This strategy describes the approach used in the portfolio examples; it is not an internal Healthfirst document.