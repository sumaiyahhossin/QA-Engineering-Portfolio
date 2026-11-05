QA Study Notes

Quick refreshers for common QA topics and tools.

Manual Testing
- Test Scenario: high-level description of what needs to be tested.
- Test Case: preconditions, steps, test data, and expected results used to verify a requirement.
- Test Plan: scope, objectives, resources, schedule, environment, entry/exit criteria, and deliverables.
- Test Strategy: overall testing approach, levels, types, tools, and risk priorities.

Common Testing Types
- Smoke: checks whether critical functions are stable enough for further testing.
- Sanity: focused testing of a specific change or area.
- Functional: verifies behavior against requirements.
- Regression: checks that changes did not break existing functionality.
- Integration: checks interactions between connected components.
- UAT: checks whether the solution meets business or user needs.
- Negative: checks invalid, missing, or unexpected inputs.
- Boundary: checks values at and around defined limits.

Defect Life Cycle
A common flow is New, Assigned, In Progress, Fixed, Retest, Closed. If the issue remains, it may be Reopened. Exact statuses depend on the team's workflow.

Severity vs Priority
Severity describes the impact of a defect. Priority describes how urgently it should be addressed.

Automation
Selenium WebDriver automates browser interactions. TestNG provides annotations such as @BeforeMethod, @Test, and @AfterMethod, assertions, and suite configuration. Playwright and Cypress are browser automation tools with built-in waiting and assertion capabilities.

API Testing
Validate the HTTP method, endpoint, status code, response structure, field types, business rules, error handling, and authorization. Use Postman environments and variables; never export live tokens.

SQL Testing
Use SELECT, WHERE, JOIN, GROUP BY, HAVING, and COUNT to validate records, relationships, duplicates, and missing data. Prefer read-only access and parameterized queries.

Agile and Scrum
Common events include Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. QA participates throughout the sprint by reviewing acceptance criteria, preparing scenarios, testing stories, reporting defects, and retesting fixes.

QA Concepts
- Verification: checking whether work products meet specified requirements.
- Validation: checking whether the delivered product meets user needs.
- Retesting: checking whether a specific defect is fixed.
- Regression: checking whether a change affected existing functionality.
- Traceability: mapping requirements to scenarios, test cases, and results.
- Risk-based testing: prioritizing based on likelihood and impact of failure.

Use these notes as refreshers. Interview answers should reflect work you personally performed.
