Test Strategy

Project Area: Member-Facing Healthcare Workflows

1. Functional Coverage
Focus on member-facing navigation, eligibility-based workflows, health plan selection, validation messages, and error handling.

2. Positive Testing
Verify expected behavior when approved valid test data is entered and supported workflows are completed.

3. Negative Testing
Check missing required fields, invalid formats, unsupported values, and unsuccessful service responses.

4. Boundary Testing
Check values at and around documented limits, such as minimum and maximum allowed input lengths or date boundaries.

5. API Testing
Use Postman to validate request methods, status codes, response structure, required fields, error responses, and data consistency against documented API requirements.

6. UI Automation
Use Playwright or Cypress for stable, repeatable browser workflows. Prefer accessible locators, explicit assertions, isolated test data, and cleanup where applicable.

7. Data Validation
Use approved SQL read queries or other authorized data checks to compare application results with expected test records.

8. Regression Testing
Retest impacted areas after code changes and defect fixes. Include related workflows that could be affected by the change.

9. Defect Management
Document clear reproduction steps, expected and actual behavior, severity, priority, and evidence. Retest fixes and run relevant regression cases.

10. Test Data and Privacy
Use only approved test data. Never publish member information, production credentials, internal URLs, or confidential application details.

This is a general portfolio strategy, not an internal Healthfirst document.