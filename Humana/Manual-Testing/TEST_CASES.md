# Humana — Manual Test Cases

**Project Name:** Healthcare Plan Browsing and Member Access  
**50 QA records · 47 passed · 3 failed**

The catalog covers manual test scenarios and Agile QA activities. Dates, environments, statuses, and defect IDs match the [Excel workbook](Humana_Manual_Test_Cases.xlsx). Test data is synthetic.

## Jump to a section

| Testing area | Test cases |
|:--|--:|
| [Plan Browsing](#plan-browsing) | 10 |
| [Member Coverage](#member-coverage) | 10 |
| [Enrollment](#enrollment) | 10 |
| [Navigation & Security](#navigation--security) | 10 |
| [Agile & Jira QA](#agile--jira-qa) | 10 |

---

## Plan Browsing

### TC-BROWSE-001 — Verify health-plan listing loads correctly by entering zip code

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-01 · High priority · Plan Browsing |
| **Preconditions** | User on member portal landing page. |
| **Test data** | Synthetic Zip Code |
| **Test steps** | Enter valid service area zip code.<br>Submit search query.<br>Verify available insurance plans render. |
| **Expected result** | Insurance plan records render with accurate monthly premiums and coverage levels. |
| **Status** | Passed |
| **Execution date** | 2024-04-28 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-BROWSE-002 — Verify side-by-side comparison of two health plans

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-02 · High priority · Plan Comparison |
| **Preconditions** | At least two plans selected in comparison tray. |
| **Test data** | Synthetic Plan Records |
| **Test steps** | Select Plan A and Plan B.<br>Open comparison view.<br>Compare deductibles and copays. |
| **Expected result** | Side-by-side comparison matrix clearly highlights cost-sharing differences. |
| **Status** | Passed |
| **Execution date** | 2024-10-17 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-BROWSE-003 — Validate search filter by plan category (HMO vs PPO)

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-03 · Medium priority · Plan Browsing |
| **Preconditions** | Plan listing page loaded. |
| **Test data** | Filter: HMO |
| **Test steps** | Select HMO filter.<br>Review returned search results. |
| **Expected result** | All displayed plan cards match the selected HMO category. |
| **Status** | Passed |
| **Execution date** | 2023-11-11 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-BROWSE-004 — Verify empty state message on invalid plan search

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-04 · Low priority · Plan Browsing |
| **Preconditions** | Plan search bar active. |
| **Test data** | Invalid Search Term |
| **Test steps** | Enter invalid search text.<br>Submit search. |
| **Expected result** | Clear no-results state message is displayed without crashing the page. |
| **Actual result / evidence** | No-results state message failed to render on invalid search string. |
| **Status** | Failed |
| **Execution date** | 2024-09-05 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |
| **Defect ID** | JIRA-HUM-7102 |

### TC-BROWSE-005 — Verify plan detail page navigation from listing

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-05 · High priority · Plan Details |
| **Preconditions** | Plan search results displayed. |
| **Test data** | Synthetic Plan Record |
| **Test steps** | Click on a specific plan title.<br>Review loaded detail page. |
| **Expected result** | Detail page opens and displays comprehensive benefit details for the selected plan. |
| **Status** | Passed |
| **Execution date** | 2024-10-30 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-BROWSE-006 — Verify Summary of Benefits PDF download link

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-06 · Medium priority · Plan Details |
| **Preconditions** | Plan detail page open. |
| **Test data** | Synthetic Plan ID |
| **Test steps** | Click 'Download Summary of Benefits'.<br>Check browser response. |
| **Expected result** | Valid PDF document downloads successfully containing plan terms. |
| **Status** | Passed |
| **Execution date** | 2024-05-04 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-BROWSE-007 — Verify pagination controls on large plan search result sets

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-07 · Medium priority · Plan Browsing |
| **Preconditions** | Search results exceed single-page view limit. |
| **Test data** | Multi-page dataset |
| **Test steps** | Click 'Next' page button.<br>Review records on page 2. |
| **Expected result** | Next result set displays accurately and previous button reactivates. |
| **Status** | Passed |
| **Execution date** | 2025-03-12 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-BROWSE-008 — Verify browser back navigation restores previous search state

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-08 · Low priority · Plan Navigation |
| **Preconditions** | User navigated from search list to plan details. |
| **Test data** | Browser navigation state |
| **Test steps** | Click browser 'Back' button. |
| **Expected result** | Previous search results and scroll position are restored correctly. |
| **Status** | Passed |
| **Execution date** | 2024-10-24 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-BROWSE-009 — Validate search input field clears when 'Reset Filters' is clicked

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-09 · Low priority · Plan Browsing |
| **Preconditions** | Active search filters applied. |
| **Test data** | Active filter state |
| **Test steps** | Click 'Reset Filters' button. |
| **Expected result** | Search input clears and default plan catalog is restored. |
| **Status** | Passed |
| **Execution date** | 2024-07-19 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-BROWSE-010 — Verify responsive layout on mobile viewport simulation

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-PLAN-10 · Medium priority · UI / Responsive |
| **Preconditions** | Mobile emulation tool active. |
| **Test data** | Viewport: Mobile emulation |
| **Test steps** | Resize browser viewport to mobile dimensions.<br>Inspect plan listing. |
| **Expected result** | UI elements stack vertically without overlapping text or broken buttons. |
| **Status** | Passed |
| **Execution date** | 2024-02-22 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

---

## Member Coverage

### TC-COV-011 — Verify active coverage status display for synthetic member

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-01 · High priority · Member Coverage |
| **Preconditions** | Member logged into secure portal. |
| **Test data** | Synthetic Member ID |
| **Test steps** | Navigate to Coverage section.<br>Review status indicator. |
| **Expected result** | Coverage status displays 'Active' with correct effective date. |
| **Status** | Passed |
| **Execution date** | 2024-08-21 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-COV-012 — Validate coverage effective and termination date formatting

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-02 · High priority · Member Coverage |
| **Preconditions** | Member coverage details open. |
| **Test data** | Synthetic Coverage Record |
| **Test steps** | Inspect coverage period dates. |
| **Expected result** | Dates render in standard format matching backend database records. |
| **Status** | Passed |
| **Execution date** | 2023-10-31 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-COV-013 — Verify member-to-plan association accuracy

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-03 · High priority · Member Coverage |
| **Preconditions** | Member profile loaded. |
| **Test data** | Synthetic Member & Plan |
| **Test steps** | Check assigned plan ID on coverage summary. |
| **Expected result** | Assigned plan ID matches active policy enrollment record. |
| **Status** | Passed |
| **Execution date** | 2024-03-23 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-COV-014 — Verify error state handling for member without active coverage record

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-04 · Medium priority · Error Handling |
| **Preconditions** | Synthetic test member with no coverage assigned. |
| **Test data** | Unassigned Member Record |
| **Test steps** | Navigate to coverage page. |
| **Expected result** | System displays graceful no-coverage message without exposing stack trace. |
| **Actual result / evidence** | Coverage page exposed raw Java stack trace error text instead of graceful message. |
| **Status** | Failed |
| **Execution date** | 2024-04-22 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |
| **Defect ID** | JIRA-HUM-7441 |

### TC-COV-015 — Cross-check UI coverage details against backend database via SQL

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-05 · High priority · Backend / SQL |
| **Preconditions** | SQL tool connected to test database. |
| **Test data** | Test Database Schema |
| **Test steps** | Run query to retrieve member policy details.<br>Compare UI fields with SQL output. |
| **Expected result** | UI display fields match backend database records 100%. |
| **Status** | Passed |
| **Execution date** | 2024-08-28 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-COV-016 — Verify dependent coverage visibility under primary subscriber policy

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-06 · Medium priority · Member Coverage |
| **Preconditions** | Family policy member record. |
| **Test data** | Synthetic Family Record |
| **Test steps** | Access coverage page.<br>Review dependent list. |
| **Expected result** | All active dependents listed with correct relationship attributes. |
| **Status** | Passed |
| **Execution date** | 2024-02-20 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-COV-017 — Validate inactive coverage status display on expired policy

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-07 · High priority · Member Coverage |
| **Preconditions** | Synthetic expired policy member. |
| **Test data** | Synthetic Expired Record |
| **Test steps** | View coverage details. |
| **Expected result** | Status clearly shows 'Terminated' with historical end date. |
| **Status** | Passed |
| **Execution date** | 2024-07-15 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-COV-018 — Verify primary care physician (PCP) assignment display

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-08 · Medium priority · Member Coverage |
| **Preconditions** | HMO member profile. |
| **Test data** | Synthetic HMO Member |
| **Test steps** | Inspect PCP card details. |
| **Expected result** | Assigned doctor name, clinic address, and phone number display correctly. |
| **Status** | Passed |
| **Execution date** | 2024-03-07 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-COV-019 — Verify coverage page load performance under standard network latency

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-09 · Low priority · Performance Smoke |
| **Preconditions** | Staging environment active. |
| **Test data** | Staging Environment |
| **Test steps** | Refresh coverage page and observe load response. |
| **Expected result** | Page loads fully within acceptable user expectation threshold. |
| **Status** | Passed |
| **Execution date** | 2024-08-07 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-COV-020 — Verify post-deployment sanity check on member coverage portal

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-COV-10 · High priority · Sanity / Smoke |
| **Preconditions** | Production staging release deployed. |
| **Test data** | Sanity Release Build |
| **Test steps** | Execute smoke test checklist covering login and coverage view. |
| **Expected result** | Core elements load successfully with zero critical defects. |
| **Status** | Passed |
| **Execution date** | 2023-12-27 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

---

## Enrollment

### TC-ENROLL-021 — Submit insurance enrollment form with valid required fields

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-01 · High priority · Enrollment Forms |
| **Preconditions** | Enrollment form open. |
| **Test data** | Synthetic Applicant Data |
| **Test steps** | Complete all required fields with synthetic test data.<br>Click Submit. |
| **Expected result** | Form accepts submission and displays confirmation screen with reference ID. |
| **Status** | Passed |
| **Execution date** | 2025-02-02 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-ENROLL-022 — Validate required field validation message on blank form submission

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-02 · High priority · Form Validation |
| **Preconditions** | Enrollment form open. |
| **Test data** | Blank Name Field |
| **Test steps** | Leave required name field blank.<br>Click Submit. |
| **Expected result** | Inline validation error message prompts user to complete required field. |
| **Status** | Passed |
| **Execution date** | 2024-07-09 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-ENROLL-023 — Validate email format validation check on enrollment form

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-03 · Medium priority · Form Validation |
| **Preconditions** | Enrollment form open. |
| **Test data** | Invalid Email String |
| **Test steps** | Enter invalid email format.<br>Submit form. |
| **Expected result** | System displays invalid email format error message and blocks submission. |
| **Status** | Passed |
| **Execution date** | 2025-01-31 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-ENROLL-024 — Validate phone number format restriction on contact field

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-04 · Medium priority · Form Validation |
| **Preconditions** | Enrollment form open. |
| **Test data** | Invalid Phone Input |
| **Test steps** | Enter unaccepted characters in phone field. |
| **Expected result** | Field restricts input or flags validation error. |
| **Actual result / evidence** | Phone format validation failed to restrict unaccepted characters. |
| **Status** | Failed |
| **Execution date** | 2024-12-17 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |
| **Defect ID** | JIRA-HUM-7890 |

### TC-ENROLL-025 — Verify enrollment review step accurately reflects entered data

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-05 · High priority · Enrollment Review |
| **Preconditions** | Form completed up to review step. |
| **Test data** | Synthetic Form Data |
| **Test steps** | Navigate to review screen.<br>Compare input values with displayed summary. |
| **Expected result** | All entered demographic and plan choices display accurately before final confirmation. |
| **Status** | Passed |
| **Execution date** | 2023-10-14 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-ENROLL-026 — Verify cancel action discards unsaved enrollment draft

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-06 · Low priority · Enrollment Navigation |
| **Preconditions** | Enrollment form partially filled. |
| **Test data** | Partially Filled Form |
| **Test steps** | Click Cancel button.<br>Confirm prompt. |
| **Expected result** | Form data resets and browser redirects without saving partial draft. |
| **Status** | Passed |
| **Execution date** | 2025-03-24 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-ENROLL-027 — Prevent duplicate enrollment submission on rapid double-click

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-07 · High priority · Enrollment Security |
| **Preconditions** | Valid enrollment form ready. |
| **Test data** | Double-click Event |
| **Test steps** | Rapidly double-click submit button. |
| **Expected result** | System disables button after first click, preventing duplicate transaction records. |
| **Status** | Passed |
| **Execution date** | 2024-06-07 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-ENROLL-028 — Verify database records match submitted enrollment form data via SQL

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-08 · High priority · Backend / SQL |
| **Preconditions** | SQL query tool open. |
| **Test data** | Test Database Table |
| **Test steps** | Query submission table for latest record.<br>Verify columns. |
| **Expected result** | Database row stores exact values submitted through web form. |
| **Status** | Passed |
| **Execution date** | 2024-02-04 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-ENROLL-029 — Verify accessibility tab-index ordering across enrollment form fields

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-09 · Low priority · Accessibility |
| **Preconditions** | Enrollment form loaded. |
| **Test data** | Keyboard Navigation |
| **Test steps** | Press Tab key sequentially through form inputs. |
| **Expected result** | Focus moves logically from top to bottom through all input fields. |
| **Status** | Passed |
| **Execution date** | 2024-06-06 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-ENROLL-030 — Verify post-deployment smoke test passes on enrollment submission form

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-ENR-10 · High priority · Sanity / Smoke |
| **Preconditions** | Staging environment post-deployment. |
| **Test data** | Smoke Checklist |
| **Test steps** | Run manual smoke checklist verifying form submission response. |
| **Expected result** | System returns 200 OK status on test payload submission. |
| **Status** | Passed |
| **Execution date** | 2025-01-09 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

---

## Navigation & Security

### TC-NAV-031 — Verify user login with valid credentials

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-01 · High priority · Authentication |
| **Preconditions** | Login page open. |
| **Test data** | Valid Test Credentials |
| **Test steps** | Enter valid test username and password.<br>Click Login. |
| **Expected result** | User authenticates successfully and lands on member dashboard. |
| **Status** | Passed |
| **Execution date** | 2023-12-04 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-NAV-032 — Verify login failure with incorrect password

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-02 · High priority · Authentication |
| **Preconditions** | Login page open. |
| **Test data** | Incorrect Password |
| **Test steps** | Enter valid username and incorrect password.<br>Click Login. |
| **Expected result** | System displays invalid credentials error message and denies access. |
| **Status** | Passed |
| **Execution date** | 2025-03-25 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-NAV-033 — Verify logout session termination and redirection

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-03 · High priority · Session Management |
| **Preconditions** | User logged into portal. |
| **Test data** | Active User Session |
| **Test steps** | Click Logout button.<br>Attempt to use browser Back button. |
| **Expected result** | Session terminates securely and user cannot access protected pages without re-authenticating. |
| **Status** | Passed |
| **Execution date** | 2024-08-31 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-NAV-034 — Verify session timeout behavior after period of inactivity

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-04 · High priority · Session Management |
| **Preconditions** | User logged in. |
| **Test data** | Timed-out Session |
| **Test steps** | Trigger simulated session timeout or inactivity threshold. |
| **Expected result** | User redirected to login screen with session expired notification. |
| **Status** | Passed |
| **Execution date** | 2024-03-17 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-NAV-035 — Verify unauthorized access restriction to protected member routes

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-05 · High priority · Security / Authorization |
| **Preconditions** | Logged out state. |
| **Test data** | Protected URL Route |
| **Test steps** | Enter direct URL for secure dashboard route. |
| **Expected result** | System redirects unauthenticated user to login portal. |
| **Status** | Passed |
| **Execution date** | 2024-05-31 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-NAV-036 — Verify primary navigation menu links route correctly

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-06 · Medium priority · UI Navigation |
| **Preconditions** | User logged in on dashboard. |
| **Test data** | Navigation Menu |
| **Test steps** | Click each header navigation link. |
| **Expected result** | Each link opens its designated target page successfully. |
| **Status** | Passed |
| **Execution date** | 2024-12-18 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-NAV-037 — Verify browser refresh maintains active authenticated session state

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-07 · Medium priority · Session Management |
| **Preconditions** | User viewing secure policy page. |
| **Test data** | Active Authenticated Session |
| **Test steps** | Refresh browser window. |
| **Expected result** | Page reloads and user remains logged in without session loss. |
| **Status** | Passed |
| **Execution date** | 2024-09-22 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-NAV-038 — Verify password complexity rule validation on account registration

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-08 · Medium priority · Form Validation |
| **Preconditions** | Registration page open. |
| **Test data** | Simple Password Input |
| **Test steps** | Enter simple password. |
| **Expected result** | System displays error requiring minimum length and character mix. |
| **Status** | Passed |
| **Execution date** | 2024-03-21 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-NAV-039 — Verify SQL Injection prevention on login username input field

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-09 · High priority · Security Testing |
| **Preconditions** | Login page open. |
| **Test data** | SQL Injection Payload |
| **Test steps** | Input SQL injection string. |
| **Expected result** | Input sanitized; login rejected safely without exposing database errors. |
| **Status** | Passed |
| **Execution date** | 2024-10-24 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-NAV-040 — Verify manual test case documentation and status update in test management tool

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-NAV-10 · High priority · Reporting |
| **Preconditions** | Test management tool open. |
| **Test data** | Test Repository |
| **Test steps** | Update test run status and add execution notes. |
| **Expected result** | Execution records save accurately with timestamp and tester attribution. |
| **Status** | Passed |
| **Execution date** | 2024-02-20 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

---

## Agile & Jira QA

### TC-JIRA-041 — Verify user story acceptance criteria review during sprint grooming

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-01 · High priority · Agile / Grooming |
| **Preconditions** | Backlog refinement meeting active. |
| **Test data** | User Story Item |
| **Test steps** | Review user story acceptance criteria for testability.<br>Confirm edge cases with product owner. |
| **Expected result** | Acceptance criteria validated and marked ready for sprint estimation. |
| **Status** | Passed |
| **Execution date** | 2024-04-02 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-JIRA-042 — Verify defect logging in tracking tool with reproduction steps and severity

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-02 · High priority · Defect Management |
| **Preconditions** | Bug identified during exploratory test session. |
| **Test data** | Defect Ticket |
| **Test steps** | Create bug ticket.<br>Populate Summary, Steps, Expected vs Actual, and Severity. |
| **Expected result** | Defect logged successfully in tracking backlog with correct priority label. |
| **Status** | Passed |
| **Execution date** | 2024-02-07 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-JIRA-043 — Verify defect status update and retesting workflow

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-03 · High priority · Defect Management |
| **Preconditions** | Developer marked bug as 'Fixed'. |
| **Test data** | Bug Workflow |
| **Test steps** | Pull fix in staging environment.<br>Retest scenario.<br>Update ticket status to 'Closed' or 'Reopened'. |
| **Expected result** | Bug lifecycle tracked accurately through workflow columns. |
| **Status** | Passed |
| **Execution date** | 2025-02-18 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-JIRA-044 — Verify daily QA progress reporting during Agile standup

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-04 · Medium priority · Agile Communication |
| **Preconditions** | Daily standup meeting. |
| **Test data** | Daily Standup Notes |
| **Test steps** | Report completed test execution count, active blockers, and daily metrics to team. |
| **Expected result** | Team aligned on sprint testing velocity and open release risks. |
| **Status** | Passed |
| **Execution date** | 2023-12-10 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-JIRA-045 — Verify regression test execution following bug fix patch deployment

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-05 · High priority · Regression Testing |
| **Preconditions** | Patch deployed to staging. |
| **Test data** | Patch Release Build |
| **Test steps** | Execute targeted manual regression test cases around fixed module. |
| **Expected result** | Targeted tests pass, confirming fix did not introduce regression issues. |
| **Status** | Passed |
| **Execution date** | 2024-05-04 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-JIRA-046 — Verify test repository organization and module structuring

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-06 · Medium priority · Test Management |
| **Preconditions** | Test management plugin open. |
| **Test data** | Test Repository |
| **Test steps** | Create and organize test cases under structured folders by module. |
| **Expected result** | Test cases structured cleanly for audit and execution tracking. |
| **Status** | Passed |
| **Execution date** | 2024-09-06 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-JIRA-047 — Verify database query execution during data investigation

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-07 · High priority · Backend Verification |
| **Preconditions** | SQL query tool open. |
| **Test data** | Database Schema |
| **Test steps** | Investigate discrepancy between UI and DB by running backend select queries. |
| **Expected result** | Root cause identified via data comparison. |
| **Status** | Passed |
| **Execution date** | 2024-11-26 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |

### TC-JIRA-048 — Verify version control commit workflow and code review collaboration

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-08 · High priority · Version Control |
| **Preconditions** | Version control active. |
| **Test data** | Version Control |
| **Test steps** | Review code updates and manage local branch commits. |
| **Expected result** | Version control history maintained cleanly. |
| **Status** | Passed |
| **Execution date** | 2024-10-18 |
| **Environment** | Staging-02 |
| **Tester role** | Junior QA Analyst |

### TC-JIRA-049 — Verify participation in sprint retrospective meeting

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-09 · Low priority · Agile / Retro |
| **Preconditions** | Sprint end review. |
| **Test data** | Sprint Retro Notes |
| **Test steps** | Discuss what went well, what could improve, and action items for next sprint. |
| **Expected result** | Retrospective feedback logged and process improvements adopted. |
| **Status** | Passed |
| **Execution date** | 2025-01-18 |
| **Environment** | UAT-Staging |
| **Tester role** | Junior QA Analyst |

### TC-JIRA-050 — Verify production sanity test execution and sign-off post-release

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-JIRA-10 · High priority · Production Sanity |
| **Preconditions** | Production release deployment completed. |
| **Test data** | Production Release Build |
| **Test steps** | Run approved sanity checklist verifying core plan browsing and coverage features. |
| **Expected result** | Sign-off provided to engineering leads confirming production stability. |
| **Status** | Passed |
| **Execution date** | 2024-07-02 |
| **Environment** | QA-Regression |
| **Tester role** | Junior QA Analyst |
