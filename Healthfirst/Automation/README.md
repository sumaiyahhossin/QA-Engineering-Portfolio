Automation Testing

This section documents the automation approach for member-facing healthcare workflows.

Tools
- Playwright
- Cypress
- JavaScript
- TypeScript

Automation Focus
- Stable member workflow navigation
- Eligibility form validation
- Health plan browsing and selection
- Error message handling
- Regression coverage for repeatable workflows

Automation Practices
- Use explicit waits and stable, accessible locators.
- Keep test data separate from test code.
- Store credentials in environment variables or approved secret storage.
- Avoid hardcoded personal or member information.
- Use assertions that verify user-visible outcomes.
- Keep tests independent where possible.
- Review screenshots, traces, and logs for sensitive information before sharing.

This folder currently contains the approach documentation. Add only scripts you have actually developed and can explain. Do not copy internal employer code or expose private application selectors.
