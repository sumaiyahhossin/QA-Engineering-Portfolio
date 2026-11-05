# UI Automation

The automation work described in my experience includes browser testing with Playwright and Cypress. This section outlines the types of repeatable checks covered by the portfolio.

## Tools

- Playwright
- Cypress
- JavaScript
- TypeScript

## Workflows to Automate

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
- Review logs and screenshots before sharing them.

This folder currently documents the automation approach. It does not contain copied employer scripts or connect to Healthfirst systems. Only add runnable examples that have been built and verified for this public portfolio.