Test Plan

Project Name: Healthcare Plan Browsing and Public Account Access
Company: Humana

1. Objective
Verify the public healthcare plan browsing and account-access workflows represented in this portfolio. The test approach focuses on visible application behavior, input validation, navigation, and repeatable regression checks.

2. Scope
Included:
- Public healthcare plan browsing
- ZIP code search input
- Plan search submission
- Public plan result display
- Public plan details navigation
- Account sign-in page loading
- Login form validation
- Invalid login handling

Not included:
- Medicare eligibility determinations
- Enrollment or plan purchase
- Private member coverage verification
- Access to protected member records
- Changes to personal or account information

3. Testing Types
- Functional, smoke, regression, and UI testing
- Negative testing and input validation
- Cross-browser testing where supported

4. Test Environment
The automation examples use public Humana web pages and an account sign-in page. Public website behavior can change without notice. No production account changes or member-data access should be attempted.

Tools: Selenium WebDriver, Java, TestNG, Maven, Jira, Zephyr, GitHub Actions.

5. Test Execution Approach
- Review the intended user workflow.
- Identify positive and negative scenarios.
- Prepare non-sensitive test inputs.
- Execute manual or automated checks.
- Compare observed behavior with expected behavior.
- Record actual results and defects.
- Retest changes and run related regression checks.

6. Entry Criteria
- Public page is reachable.
- Test browser and dependencies are available.
- Test data is non-sensitive.
- The test does not require private member information.

7. Exit Criteria
- Tests are executed or marked Not Run / Blocked.
- Failures have supporting logs where safe.
- External website or environment issues are documented.
- Results are not reported as passing unless assertions completed successfully.

8. Defect Management
Record a concise summary, environment, preconditions, reproduction steps, expected result, actual result, severity, priority, and sanitized evidence.

9. Deliverables
Test scenarios, manual test cases, Selenium scripts, execution tracking, SQL validation examples, and defect report template.

Portfolio Note
This is a sanitized portfolio test plan. It is not an internal Humana test plan and does not claim testing of private Medicare or member coverage workflows.