# UI Automation

The automation work described in my experience includes browser testing with Playwright and Cypress. This section is organized by framework so the test code and supporting files can be kept separate.

## Frameworks

- [Playwright](./Playwright/README.md)
- [Cypress](./Cypress/README.md)

## Folder Structure

```text
Automation/
├── Playwright/
│   ├── tests/
│   ├── pages/
│   └── fixtures/
└── Cypress/
    ├── e2e/
    ├── support/
    └── fixtures/
```

## Workflows Covered

- Member workflow navigation
- Required field and format validation
- Eligibility form behavior
- Health plan browsing
- Health plan details
- Error and no-results messages
- Regression checks for stable workflows

## Test Design

- Keep each test focused on one behavior.
- Use stable locators and assert what the user can see.
- Keep test data separate from test logic.
- Avoid relying on the order in which tests run.
- Use environment variables for configuration and credentials.
- Capture screenshots or traces when they help investigate a failure.

The folders are set up for the public portfolio examples. They do not contain copied employer scripts or connect to Healthfirst systems. The framework folders currently contain organization notes, not runnable test specs; runnable examples still need to be added and verified.
