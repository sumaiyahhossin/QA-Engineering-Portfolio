Test Strategy

Project Name: Healthcare Plan Browsing and Public Account Access
Company: Humana

1. Testing Objectives
- Verify public plan browsing and search workflows.
- Validate plan information visible on public pages.
- Check public account sign-in form behavior.
- Identify defects before changes are considered complete.
- Confirm that updates do not break existing public workflows.

2. Testing Levels

Functional Testing
Verify individual public page features and user workflows.

Integration Testing
Verify that visible public workflows move between the expected pages and services.

Regression Testing
Verify that website changes do not break existing public functionality.

Smoke Testing
Verify that the main public pages and search entry points load.

3. Testing Types
- Positive Testing
- Negative Testing
- Boundary Testing
- UI Testing
- Cross-Browser Testing

4. Manual Testing Strategy
- Review the intended user workflow.
- Identify test scenarios.
- Prepare non-sensitive test inputs.
- Execute test cases.
- Record actual results.
- Report and retest defects.

5. Automation Testing Strategy
Automation examples focus on repeatable public website workflows using Java, Selenium WebDriver, and TestNG.

Automated activities include:
- Browser initialization
- Public page navigation
- Search form input
- Form validation
- Visible result checks
- Automated execution and reporting

6. Defect Management
Document the summary, reproduction steps, expected result, actual result, severity, priority, and sanitized evidence.

7. Test Data Strategy
Use non-sensitive inputs and authorized test accounts only. Do not include member personal information or active credentials in public portfolio examples.

8. Tools and Technologies
- Java
- Selenium WebDriver
- TestNG
- Maven
- Jira
- Zephyr
- Oracle SQL Developer

9. Scope Limitation
Public plan browsing and account sign-in checks do not verify Medicare eligibility, enrollment, or private member coverage. This document is a sanitized portfolio strategy, not an internal Humana test strategy.