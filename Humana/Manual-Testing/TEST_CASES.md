# Manual Test Cases: Healthcare Plan Browsing & Member Access

**Project Name:** Healthcare Plan Browsing and Member Access  
**Total:** 50 test cases | **Execution Type:** Manual  
The test cases are organized to correspond to the `Test_Cases` worksheet in `Humana_Manual_Test_Cases.xlsx`.

---

## Plan Browsing

### TC-BROWSE-001: Verify health-plan listing loads correctly by entering zip code
**REQ-PLAN-01 · High priority · Plan Browsing**
- **Setup:** User on member portal landing page. | **Data:** Synthetic Zip Code
- **Steps:** Enter valid service area zip code.; Submit search query.; Verify available insurance plans render.
- **Expected:** Plan results are displayed for the submitted ZIP code, with the plan names and information visible on each result.

### TC-BROWSE-002: Verify side-by-side comparison of two health plans
**REQ-PLAN-02 · High priority · Plan Comparison**
- **Setup:** At least two plans selected in comparison tray. | **Data:** Synthetic Plan Records
- **Steps:** Select Plan A and Plan B.; Open comparison view.; Compare deductibles and copays.
- **Expected:** Side-by-side comparison matrix clearly highlights cost-sharing differences.

### TC-BROWSE-003: Validate search filter by plan category (HMO vs PPO)
**REQ-PLAN-03 · Medium priority · Plan Browsing**
- **Setup:** Plan listing page loaded. | **Data:** Filter: HMO
- **Steps:** Select HMO filter.; Review returned search results.
- **Expected:** All displayed plan cards match the selected HMO category.

### TC-BROWSE-004: Verify empty state message on invalid plan search
**REQ-PLAN-04 · Low priority · Plan Browsing**
- **Setup:** Plan search bar active. | **Data:** Invalid Search Term
- **Steps:** Enter invalid search text.; Submit search.
- **Expected:** Clear no-results state message is displayed without crashing the page.

### TC-BROWSE-005: Verify plan detail page navigation from listing
**REQ-PLAN-05 · High priority · Plan Details**
- **Setup:** Plan search results displayed. | **Data:** Synthetic Plan Record
- **Steps:** Click on a specific plan title.; Review loaded detail page.
- **Expected:** Detail page opens and displays comprehensive benefit details for the selected plan.

### TC-BROWSE-006: Verify Summary of Benefits PDF download link
**REQ-PLAN-06 · Medium priority · Plan Details**
- **Setup:** Plan detail page open. | **Data:** Synthetic Plan ID
- **Steps:** Click 'Download Summary of Benefits'.; Check browser response.
- **Expected:** Valid PDF document downloads successfully containing plan terms.

### TC-BROWSE-007: Verify pagination controls on large plan search result sets
**REQ-PLAN-07 · Medium priority · Plan Browsing**
- **Setup:** Search results exceed single-page view limit. | **Data:** Multi-page dataset
- **Steps:** Click 'Next' page button.; Review records on page 2.
- **Expected:** Next result set displays accurately and previous button reactivates.

### TC-BROWSE-008: Verify browser back navigation restores previous search state
**REQ-PLAN-08 · Low priority · Plan Navigation**
- **Setup:** User navigated from search list to plan details. | **Data:** Browser navigation state
- **Steps:** Click browser 'Back' button.
- **Expected:** Previous search results and scroll position are restored correctly.

### TC-BROWSE-009: Validate search input field clears when 'Reset Filters' is clicked
**REQ-PLAN-09 · Low priority · Plan Browsing**
- **Setup:** Active search filters applied. | **Data:** Active filter state
- **Steps:** Click 'Reset Filters' button.
- **Expected:** Search input clears and default plan catalog is restored.

### TC-BROWSE-010: Verify responsive layout on mobile viewport simulation
**REQ-PLAN-10 · Medium priority · UI / Responsive**
- **Setup:** Mobile emulation tool active. | **Data:** Viewport: Mobile emulation
- **Steps:** Resize browser viewport to mobile dimensions.; Inspect plan listing.
- **Expected:** UI elements stack vertically without overlapping text or broken buttons.

---

## Member Coverage

### TC-COV-011: Verify active coverage status display for synthetic member
**REQ-COV-01 · High priority · Member Coverage**
- **Setup:** Member logged into secure portal. | **Data:** Synthetic Member ID
- **Steps:** Navigate to Coverage section.; Review status indicator.
- **Expected:** Coverage status displays 'Active' with correct effective date.

### TC-COV-012: Validate coverage effective and termination date formatting
**REQ-COV-02 · High priority · Member Coverage**
- **Setup:** Member coverage details open. | **Data:** Synthetic Coverage Record
- **Steps:** Inspect coverage period dates.
- **Expected:** Dates render in standard format matching backend database records.

### TC-COV-013: Verify member-to-plan association accuracy
**REQ-COV-03 · High priority · Member Coverage**
- **Setup:** Member profile loaded. | **Data:** Synthetic Member & Plan
- **Steps:** Check assigned plan ID on coverage summary.
- **Expected:** Assigned plan ID matches active policy enrollment record.

### TC-COV-014: Verify error state handling for member without active coverage record
**REQ-COV-04 · Medium priority · Error Handling**
- **Setup:** Synthetic test member with no coverage assigned. | **Data:** Unassigned Member Record
- **Steps:** Navigate to coverage page.
- **Expected:** System displays graceful no-coverage message without exposing stack trace.

### TC-COV-015: Cross-check UI coverage details against backend database via SQL
**REQ-COV-05 · High priority · Backend / SQL**
- **Setup:** SQL tool connected to test database. | **Data:** Test Database Schema
- **Steps:** Run query to retrieve member policy details.; Compare UI fields with SQL output.
- **Expected:** The selected UI fields match the corresponding values in the test database record.

### TC-COV-016: Verify dependent coverage visibility under primary subscriber policy
**REQ-COV-06 · Medium priority · Member Coverage**
- **Setup:** Family policy member record. | **Data:** Synthetic Family Record
- **Steps:** Access coverage page.; Review dependent list.
- **Expected:** All active dependents listed with correct relationship attributes.

### TC-COV-017: Validate inactive coverage status display on expired policy
**REQ-COV-07 · High priority · Member Coverage**
- **Setup:** Synthetic expired policy member. | **Data:** Synthetic Expired Record
- **Steps:** View coverage details.
- **Expected:** Status clearly shows 'Terminated' with historical end date.

### TC-COV-018: Verify primary care physician (PCP) assignment display
**REQ-COV-08 · Medium priority · Member Coverage**
- **Setup:** HMO member profile. | **Data:** Synthetic HMO Member
- **Steps:** Inspect PCP card details.
- **Expected:** Assigned doctor name, clinic address, and phone number display correctly.

### TC-COV-019: Verify coverage page load performance under standard network latency
**REQ-COV-09 · Low priority · Performance Smoke**
- **Setup:** Staging environment active. | **Data:** Staging Environment
- **Steps:** Refresh coverage page and observe load response.
- **Expected:** Page loads fully within acceptable user expectation threshold.

### TC-COV-020: Verify post-deployment sanity check on member coverage portal
**REQ-COV-10 · High priority · Sanity / Smoke**
- **Setup:** Production staging release deployed. | **Data:** Sanity Release Build
- **Steps:** Execute smoke test checklist covering login and coverage view.
- **Expected:** The planned smoke checks complete, and any failures are recorded for follow-up.

---

## Enrollment

### TC-ENROLL-021: Submit insurance enrollment form with valid required fields
**REQ-ENR-01 · High priority · Enrollment Forms**
- **Setup:** Enrollment form open. | **Data:** Synthetic Applicant Data
- **Steps:** Complete all required fields with synthetic test data.; Click Submit.
- **Expected:** Form accepts submission and displays confirmation screen with reference ID.

### TC-ENROLL-022: Validate required field validation message on blank form submission
**REQ-ENR-02 · High priority · Form Validation**
- **Setup:** Enrollment form open. | **Data:** Blank Name Field
- **Steps:** Leave required name field blank.; Click Submit.
- **Expected:** Inline validation error message prompts user to complete required field.

### TC-ENROLL-023: Validate email format validation check on enrollment form
**REQ-ENR-03 · Medium priority · Form Validation**
- **Setup:** Enrollment form open. | **Data:** Invalid Email String
- **Steps:** Enter invalid email format.; Submit form.
- **Expected:** System displays invalid email format error message and blocks submission.

### TC-ENROLL-024: Validate phone number format restriction on contact field
**REQ-ENR-04 · Medium priority · Form Validation**
- **Setup:** Enrollment form open. | **Data:** Invalid Phone Input
- **Steps:** Enter unaccepted characters in phone field.
- **Expected:** Field restricts input or flags validation error.

### TC-ENROLL-025: Verify enrollment review step accurately reflects entered data
**REQ-ENR-05 · High priority · Enrollment Review**
- **Setup:** Form completed up to review step. | **Data:** Synthetic Form Data
- **Steps:** Navigate to review screen.; Compare input values with displayed summary.
- **Expected:** All entered demographic and plan choices display accurately before final confirmation.

### TC-ENROLL-026: Verify cancel action discards unsaved enrollment draft
**REQ-ENR-06 · Low priority · Enrollment Navigation**
- **Setup:** Enrollment form partially filled. | **Data:** Partially Filled Form
- **Steps:** Click Cancel button.; Confirm prompt.
- **Expected:** Form data resets and browser redirects without saving partial draft.

### TC-ENROLL-027: Prevent duplicate enrollment submission on rapid double-click
**REQ-ENR-07 · High priority · Enrollment Security**
- **Setup:** Valid enrollment form ready. | **Data:** Double-click Event
- **Steps:** Rapidly double-click submit button.
- **Expected:** System disables button after first click, preventing duplicate transaction records.

### TC-ENROLL-028: Verify database records match submitted enrollment form data via SQL
**REQ-ENR-08 · High priority · Backend / SQL**
- **Setup:** SQL query tool open. | **Data:** Test Database Table
- **Steps:** Query submission table for latest record.; Verify columns.
- **Expected:** Database row stores exact values submitted through web form.

### TC-ENROLL-029: Verify accessibility tab-index ordering across enrollment form fields
**REQ-ENR-09 · Low priority · Accessibility**
- **Setup:** Enrollment form loaded. | **Data:** Keyboard Navigation
- **Steps:** Press Tab key sequentially through form inputs.
- **Expected:** Focus moves logically from top to bottom through all input fields.

### TC-ENROLL-030: Verify post-deployment smoke test passes on enrollment submission form
**REQ-ENR-10 · High priority · Sanity / Smoke**
- **Setup:** Staging environment post-deployment. | **Data:** Smoke Checklist
- **Steps:** Run manual smoke checklist verifying form submission response.
- **Expected:** The form responds according to the documented submission behavior, and any returned confirmation or validation message is displayed.

---

## Navigation & Security

### TC-NAV-031: Verify user login with valid credentials
**REQ-NAV-01 · High priority · Authentication**
- **Setup:** Login page open. | **Data:** Valid Test Credentials
- **Steps:** Enter valid test username and password.; Click Login.
- **Expected:** User authenticates successfully and lands on member dashboard.

### TC-NAV-032: Verify login failure with incorrect password
**REQ-NAV-02 · High priority · Authentication**
- **Setup:** Login page open. | **Data:** Incorrect Password
- **Steps:** Enter valid username and incorrect password.; Click Login.
- **Expected:** System displays invalid credentials error message and denies access.

### TC-NAV-033: Verify logout session termination and redirection
**REQ-NAV-03 · High priority · Session Management**
- **Setup:** User logged into portal. | **Data:** Active User Session
- **Steps:** Click Logout button.; Attempt to use browser Back button.
- **Expected:** Session terminates securely and user cannot access protected pages without re-authenticating.

### TC-NAV-034: Verify session timeout behavior after period of inactivity
**REQ-NAV-04 · High priority · Session Management**
- **Setup:** User logged in. | **Data:** Timed-out Session
- **Steps:** Trigger simulated session timeout or inactivity threshold.
- **Expected:** User redirected to login screen with session expired notification.

### TC-NAV-035: Verify unauthorized access restriction to protected member routes
**REQ-NAV-05 · High priority · Security / Authorization**
- **Setup:** Logged out state. | **Data:** Protected URL Route
- **Steps:** Enter direct URL for secure dashboard route.
- **Expected:** System redirects unauthenticated user to login portal.

### TC-NAV-036: Verify primary navigation menu links route correctly
**REQ-NAV-06 · Medium priority · UI Navigation**
- **Setup:** User logged in on dashboard. | **Data:** Navigation Menu
- **Steps:** Click each header navigation link.
- **Expected:** Each link opens its designated target page successfully.

### TC-NAV-037: Verify browser refresh maintains active authenticated session state
**REQ-NAV-07 · Medium priority · Session Management**
- **Setup:** User viewing secure policy page. | **Data:** Active Authenticated Session
- **Steps:** Refresh browser window.
- **Expected:** Page reloads and user remains logged in without session loss.

### TC-NAV-038: Verify password complexity rule validation on account registration
**REQ-NAV-08 · Medium priority · Form Validation**
- **Setup:** Registration page open. | **Data:** Simple Password Input
- **Steps:** Enter simple password.
- **Expected:** System displays error requiring minimum length and character mix.

### TC-NAV-039: Verify SQL Injection prevention on login username input field
**REQ-NAV-09 · High priority · Security Testing**
- **Setup:** Login page open. | **Data:** SQL Injection Payload
- **Steps:** Input SQL injection string.
- **Expected:** Input sanitized; login rejected safely without exposing database errors.

### TC-NAV-040: Verify manual test case documentation and status update in test management tool
**REQ-NAV-10 · High priority · Reporting**
- **Setup:** Test management tool open. | **Data:** Test Repository
- **Steps:** Update test run status and add execution notes.
- **Expected:** Execution records save accurately with timestamp and tester attribution.

---

## Agile & Jira QA

### TC-JIRA-041: Verify user story acceptance criteria review during sprint grooming
**REQ-JIRA-01 · High priority · Agile / Grooming**
- **Setup:** Backlog refinement meeting active. | **Data:** User Story Item
- **Steps:** Review user story acceptance criteria for testability.; Confirm edge cases with product owner.
- **Expected:** Acceptance criteria validated and marked ready for sprint estimation.

### TC-JIRA-042: Verify defect logging in tracking tool with reproduction steps and severity
**REQ-JIRA-02 · High priority · Defect Management**
- **Setup:** Bug identified during exploratory test session. | **Data:** Defect Ticket
- **Steps:** Create bug ticket.; Populate Summary, Steps, Expected vs Actual, and Severity.
- **Expected:** Defect logged successfully in tracking backlog with correct priority label.

### TC-JIRA-043: Verify defect status update and retesting workflow
**REQ-JIRA-03 · High priority · Defect Management**
- **Setup:** Developer marked bug as 'Fixed'. | **Data:** Bug Workflow
- **Steps:** Pull fix in staging environment.; Retest scenario.; Update ticket status to 'Closed' or 'Reopened'.
- **Expected:** Bug lifecycle tracked accurately through workflow columns.

### TC-JIRA-044: Verify daily QA progress reporting during Agile standup
**REQ-JIRA-04 · Medium priority · Agile Communication**
- **Setup:** Daily standup meeting. | **Data:** Daily Standup Notes
- **Steps:** Report completed test execution count, active blockers, and daily metrics to team.
- **Expected:** Team aligned on sprint testing velocity and open release risks.

### TC-JIRA-045: Verify regression test execution following bug fix patch deployment
**REQ-JIRA-05 · High priority · Regression Testing**
- **Setup:** Patch deployed to staging. | **Data:** Patch Release Build
- **Steps:** Execute targeted manual regression test cases around fixed module.
- **Expected:** Targeted tests pass, confirming fix did not introduce regression issues.

### TC-JIRA-046: Verify test repository organization and module structuring
**REQ-JIRA-06 · Medium priority · Test Management**
- **Setup:** Test management plugin open. | **Data:** Test Repository
- **Steps:** Create and organize test cases under structured folders by module.
- **Expected:** Test cases structured cleanly for audit and execution tracking.

### TC-JIRA-047: Verify database query execution during data investigation
**REQ-JIRA-07 · High priority · Backend Verification**
- **Setup:** SQL query tool open. | **Data:** Database Schema
- **Steps:** Investigate discrepancy between UI and DB by running backend select queries.
- **Expected:** Root cause identified via data comparison.

### TC-JIRA-048: Verify version control commit workflow and code review collaboration
**REQ-JIRA-08 · High priority · Version Control**
- **Setup:** Version control active. | **Data:** Version Control
- **Steps:** Review code updates and manage local branch commits.
- **Expected:** Version control history maintained cleanly.

### TC-JIRA-049: Verify participation in sprint retrospective meeting
**REQ-JIRA-09 · Low priority · Agile / Retro**
- **Setup:** Sprint end review. | **Data:** Sprint Retro Notes
- **Steps:** Discuss what went well, what could improve, and action items for next sprint.
- **Expected:** Retrospective feedback logged and process improvements adopted.

### TC-JIRA-050: Verify production sanity test execution and sign-off post-release
**REQ-JIRA-10 · High priority · Production Sanity**
- **Setup:** Production release deployment completed. | **Data:** Production Release Build
- **Steps:** Run approved sanity checklist verifying core plan browsing and coverage features.
- **Expected:** Results are recorded and any release-blocking issues are raised through the team's agreed process.
