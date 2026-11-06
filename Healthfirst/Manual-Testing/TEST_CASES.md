# Healthfirst — Manual Test Cases

**50 test cases · 48 Passed · 2 Failed**

These manual test cases use generalized test data. Statuses reflect recorded execution results, not independent verification against a live employer system. Where detailed observations were not documented, no additional behavior has been assumed.

## Jump to a section

| Testing area | Test cases |
|:--|--:|
| [Plan Selection](#plan-selection) | 10 |
| [API Testing](#api-testing) | 10 |
| [UAT & Exploratory](#uat--exploratory) | 10 |
| [SQL Validation](#sql-validation) | 10 |
| [Agile QA](#agile-qa) | 10 |

---

## Plan Selection

### TC-HF-SEL-001 — Verify active member coverage status via eligibility lookup portal

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-01 · High priority · Plan Selection |
| **Preconditions** | Member test record active in staging environment. |
| **Test data** | MEM-SYN-1001 |
| **Test steps** | 1. Enter valid synthetic member ID.<br>2. Trigger eligibility lookup query.<br>3. Verify response rendering. |
| **Expected result** | Portal correctly displays active policy status and assigned plan details. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-09-21 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SEL-002 — Validate dynamic plan catalog filtering by service area zip code

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-02 · High priority · Plan Selection |
| **Preconditions** | Plan finder search page loaded. |
| **Test data** | ZIP: 10001 |
| **Test steps** | 1. Input valid supported service-area zip code.<br>2. Apply filter criteria.<br>3. Review returned plan cards. |
| **Expected result** | Catalog dynamically displays eligible plan options matching the zip code. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-12-09 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SEL-003 — Verify side-by-side comparison matrix for selected health plans

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-03 · Medium priority · Plan Selection |
| **Preconditions** | Multiple plan items added to comparison tray. |
| **Test data** | Synthetic Plan IDs |
| **Test steps** | 1. Select two plan options.<br>2. Open comparison view.<br>3. Inspect cost-sharing attributes. |
| **Expected result** | Side-by-side view clearly presents deductibles, copays, and network coverage terms. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-01-11 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SEL-004 — Test formulary drug lookup integration during plan browsing

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-04 · High priority · Plan Selection |
| **Preconditions** | Plan detail view open. |
| **Test data** | Sample NDC Data |
| **Test steps** | 1. Search for sample medication.<br>2. Review tier status results. |
| **Expected result** | System displays correct tier placement and coverage rules for the drug. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-09-08 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SEL-005 — Verify error handling on invalid or out-of-area zip code search

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-05 · Medium priority · Plan Selection |
| **Preconditions** | Plan finder search page open. |
| **Test data** | ZIP: 99999 |
| **Test steps** | 1. Enter invalid out-of-state zip code.<br>2. Submit search query. |
| **Expected result** | Portal displays a graceful validation warning message without breaking UI layout. |
| **Actual result** | Failed as recorded; see linked defect for details. |
| **Status** | Failed |
| **Execution date** | 2026-05-01 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | DEF-01 |
| **Evidence reference** | Evidence not included |

### TC-HF-SEL-006 — Validate multi-language toggle (English / Spanish) on portal UI

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-06 · Low priority · Plan Selection |
| **Preconditions** | Member portal landing page loaded. |
| **Test data** | Localization Bundle |
| **Test steps** | 1. Click Spanish language selector.<br>2. Navigate through navigation links. |
| **Expected result** | UI text strings update accurately to Spanish translation equivalents. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-07-23 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SEL-007 — Verify Summary of Benefits PDF document download link

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-07 · Medium priority · Plan Selection |
| **Preconditions** | Plan details page active. |
| **Test data** | Plan Document ID |
| **Test steps** | 1. Click 'Download Summary of Benefits'.<br>2. Verify file retrieval. |
| **Expected result** | Valid PDF asset downloads successfully with correct document headers. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-07-19 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SEL-008 — Validate session persistence when switching between plan comparison and profile

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-08 · Low priority · Plan Selection |
| **Preconditions** | Active member session established. |
| **Test data** | Session Token ID |
| **Test steps** | 1. Select plans for comparison.<br>2. Switch to profile tab.<br>3. Return to comparison view. |
| **Expected result** | Selected comparison items persist across tab navigation without state loss. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-02-23 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SEL-009 — Verify responsive layout scaling on mobile device viewports

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-09 · Medium priority · Plan Selection |
| **Preconditions** | Mobile emulation device view active. |
| **Test data** | Viewport: Mobile |
| **Test steps** | 1. Resize viewport to standard mobile width.<br>2. Inspect plan listing elements. |
| **Expected result** | UI components stack vertically with proper spacing and legible typography. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-05-26 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SEL-010 — Verify end-to-end user navigation flow across plan discovery and selection wizard

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-10 · High priority · Plan Selection |
| **Preconditions** | Member landing page active. |
| **Test data** | E2E Test Flow |
| **Test steps** | 1. Execute full path from zip search to plan selection confirmation. |
| **Expected result** | Wizard steps complete seamlessly with zero broken links or rendering failures. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-10-11 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

## API Testing

### TC-HF-API-011 — Verify GET /api/eligibility returns 200 OK with valid JSON structure

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-11 · High priority · API Testing |
| **Preconditions** | Postman connected to staging endpoint. |
| **Test data** | MEM-SYN-2001 |
| **Test steps** | 1. Send GET request with authorized token and synthetic member ID. |
| **Expected result** | Returns 200 OK with JSON body containing policy status and member attributes. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-12-27 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-API-012 — Validate POST /api/enrollment payload persistence and response code

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-12 · High priority · API Testing |
| **Preconditions** | Postman collection active. |
| **Test data** | Enrollment JSON |
| **Test steps** | 1. Send POST request with complete enrollment JSON payload. |
| **Expected result** | Returns 201 Created with unique reference ID confirming transaction. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-08-24 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-API-013 — Test negative validation for missing required field in enrollment payload

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-13 · High priority · API Testing |
| **Preconditions** | Postman collection open. |
| **Test data** | Malformed Payload |
| **Test steps** | 1. Omit mandatory email attribute from request body.<br>2. Submit POST request. |
| **Expected result** | Returns 422 Unprocessable Entity with structured validation error messaging. |
| **Actual result** | Failed as recorded; see linked defect for details. |
| **Status** | Failed |
| **Execution date** | 2026-02-09 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | DEF-02 |
| **Evidence reference** | Evidence not included |

### TC-HF-API-014 — Verify unauthorized access restriction on protected profile endpoint

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-14 · High priority · API Testing |
| **Preconditions** | Postman security suite active. |
| **Test data** | Expired Auth Token |
| **Test steps** | 1. Send request without Bearer token or with expired token string. |
| **Expected result** | Returns 401 Unauthorized and strips sensitive user data from response payload. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-10-19 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-API-015 — Validate SQL injection prevention on query parameter input strings

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-15 · High priority · API Testing |
| **Preconditions** | Postman security test collection open. |
| **Test data** | SQLi Payload String |
| **Test steps** | 1. Inject SQL payload (`?memberId=1' OR '1'='1`) into query parameter. |
| **Expected result** | Input is sanitized safely; returns 400 Bad Request or 404 without database leaks. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-07-23 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-API-016 — Verify duplicate submission handling on repeated POST enrollment requests

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-16 · High priority · API Testing |
| **Preconditions** | Postman runner configured. |
| **Test data** | Duplicate Payload |
| **Test steps** | 1. Send identical enrollment payload twice in rapid succession. |
| **Expected result** | Second request is intercepted or handled per business logic contract. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-12-09 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-API-017 — Verify GET /api/plans/search filters results correctly by region parameter

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-17 · Medium priority · API Testing |
| **Preconditions** | Postman endpoint active. |
| **Test data** | Region Parameter |
| **Test steps** | 1. Query endpoint with service region parameter.<br>2. Inspect JSON array. |
| **Expected result** | Returned array contains only plans authorized for the requested region. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-07-11 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-API-018 — Validate PUT /api/member/profile update on valid contact attributes

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-18 · High priority · API Testing |
| **Preconditions** | Postman update collection open. |
| **Test data** | Updated Contact JSON |
| **Test steps** | 1. Send PUT request updating phone number attribute. |
| **Expected result** | Returns 200 OK and subsequent GET request reflects updated phone value. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-12-31 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-API-019 — Verify GET /api/documents/summary returns valid temporary download URL

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-19 · Medium priority · API Testing |
| **Preconditions** | Postman document suite active. |
| **Test data** | Document ID Token |
| **Test steps** | 1. Request document link for valid plan ID. |
| **Expected result** | Returns 200 OK with valid URL and correct MIME type headers (`application/pdf`). |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-01-08 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-API-020 — Validate API response error payload structure during simulated timeout

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-20 · High priority · API Testing |
| **Preconditions** | Postman environment active. |
| **Test data** | Timeout Mock |
| **Test steps** | 1. Simulate backend timeout response.<br>2. Review error structure. |
| **Expected result** | API returns structured error object with standard error code and message. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-07-03 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

## UAT & Exploratory

### TC-HF-UAT-021 — Execute exploratory testing session on member onboarding portal workflow

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-21 · High priority · UAT &amp; Exploratory |
| **Preconditions** | Staging build active. |
| **Test data** | Exploratory Session |
| **Test steps** | 1. Conduct unscripted exploratory testing across member registration wizard. |
| **Expected result** | Identified UI alignment edge case during rapid input progression. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-05-16 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-UAT-022 — Validate form input validation rules with boundary character limits

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-22 · Medium priority · UAT &amp; Exploratory |
| **Preconditions** | Enrollment form open. |
| **Test data** | Boundary Test String |
| **Test steps** | 1. Enter maximum and minimum allowed character counts in text fields. |
| **Expected result** | Fields correctly restrict input to designated boundary limits. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-07-12 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-UAT-023 — Verify accessibility tab-index ordering across portal input forms

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-23 · Low priority · UAT &amp; Exploratory |
| **Preconditions** | Portal form loaded. |
| **Test data** | Keyboard Navigation |
| **Test steps** | 1. Press Tab key sequentially through all interactive form elements. |
| **Expected result** | Focus moves logically from top to bottom without trapping focus. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-02-10 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-UAT-024 — Coordinate User Acceptance Testing (UAT) session with business stakeholders

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-24 · High priority · UAT &amp; Exploratory |
| **Preconditions** | Staging environment active. |
| **Test data** | UAT Checklist |
| **Test steps** | 1. Walk stakeholders through new plan comparison features and record feedback. |
| **Expected result** | Stakeholder sign-off achieved with minor UI feedback logged in Jira. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-11-12 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-UAT-025 — Verify post-deployment smoke test suite on staging release build

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-25 · High priority · UAT &amp; Exploratory |
| **Preconditions** | Staging release deployed. |
| **Test data** | Smoke Checklist |
| **Test steps** | 1. Execute manual smoke test checklist covering login, search, and coverage. |
| **Expected result** | Core application modules load successfully with zero critical errors. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-01-24 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-UAT-026 — Validate cross-browser manual verification on Safari and Firefox

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-26 · Medium priority · UAT &amp; Exploratory |
| **Preconditions** | Cross-browser environment active. |
| **Test data** | Cross-Browser Testing |
| **Test steps** | 1. Perform key user journeys on Safari and Firefox browsers. |
| **Expected result** | Pages render correctly and functional workflows operate without anomalies. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-07-02 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-UAT-027 — Verify password complexity rule validation on account registration form

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-27 · Medium priority · UAT &amp; Exploratory |
| **Preconditions** | Registration page open. |
| **Test data** | Weak Password Input |
| **Test steps** | 1. Enter weak password without special characters. |
| **Expected result** | System displays inline error requiring minimum length and character mix. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-11-11 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-UAT-028 — Verify logout session termination and browser back-button restriction

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-28 · High priority · UAT &amp; Exploratory |
| **Preconditions** | User logged into portal. |
| **Test data** | Active Session |
| **Test steps** | 1. Click Logout.<br>2. Attempt to use browser Back button. |
| **Expected result** | Session terminates securely and user cannot access protected pages. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-01-16 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-UAT-029 — Verify email format validation check on member profile update form

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-29 · Medium priority · UAT &amp; Exploratory |
| **Preconditions** | Profile page open. |
| **Test data** | Invalid Email |
| **Test steps** | 1. Enter invalid email string without '@' symbol.<br>2. Submit. |
| **Expected result** | System flags invalid email format error and blocks update. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-05-01 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-UAT-030 — Execute formal staging sanity check post-release deployment build

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-30 · High priority · UAT &amp; Exploratory |
| **Preconditions** | Staging release live. |
| **Test data** | Release Sanity |
| **Test steps** | 1. Run approved post-release verification checklist across core user flows. |
| **Expected result** | Sanity check completes successfully; formal verification recorded. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-10-23 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

## SQL Validation

### TC-HF-SQL-031 — Verify backend database record creation following frontend enrollment

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-31 · High priority · SQL Validation |
| **Preconditions** | SQL query tool connected. |
| **Test data** | SQL Select Script |
| **Test steps** | 1. Submit valid enrollment form on UI.<br>2. Execute SQL select query on applicant table. |
| **Expected result** | Database row stores exact demographic values submitted through web form. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-10-16 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SQL-032 — Verify member policy status attribute matches between UI and database

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-32 · High priority · SQL Validation |
| **Preconditions** | SQL query tool connected. |
| **Test data** | Policy Status Query |
| **Test steps** | 1. Query member table for active policy status flag.<br>2. Compare with portal UI display. |
| **Expected result** | UI display field matches backend database record 100%. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-05-07 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SQL-033 — Validate plan catalog pricing attributes against backend pricing table

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-33 · Medium priority · SQL Validation |
| **Preconditions** | SQL query tool connected. |
| **Test data** | Pricing Table Query |
| **Test steps** | 1. Query plan pricing table for sample plan ID.<br>2. Verify premium values match UI catalog. |
| **Expected result** | Pricing figures match database records exactly. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-05-30 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SQL-034 — Verify dependent record association mapping under primary subscriber ID

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-34 · High priority · SQL Validation |
| **Preconditions** | SQL query tool connected. |
| **Test data** | Family SQL Join |
| **Test steps** | 1. Run SQL join query retrieving primary subscriber and dependent records. |
| **Expected result** | Dependent foreign key associations link correctly to primary record. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-08-13 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SQL-035 — Test database query performance on plan catalog search index

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-35 · Medium priority · SQL Validation |
| **Preconditions** | SQL query tool connected. |
| **Test data** | Indexed Query Test |
| **Test steps** | 1. Execute indexed query searching plans by zip code.<br>2. Review execution time. |
| **Expected result** | Query returns results within acceptable indexing threshold (&lt; 100ms). |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-11-26 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SQL-036 — Verify audit log table records user login timestamp upon portal authentication

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-36 · Medium priority · SQL Validation |
| **Preconditions** | SQL query tool connected. |
| **Test data** | Audit Log Query |
| **Test steps** | 1. Log into member portal.<br>2. Query audit log table for user session entry. |
| **Expected result** | Audit table logs correct timestamp and user identifier. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-09-24 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SQL-037 — Validate data type constraints on member profile update table columns

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-37 · High priority · SQL Validation |
| **Preconditions** | SQL query tool connected. |
| **Test data** | Constraint Test |
| **Test steps** | 1. Attempt update violating column data type rules. |
| **Expected result** | Database constraint rejects invalid update, preventing data corruption. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-09-03 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SQL-038 — Verify soft-delete flag behavior on canceled enrollment drafts

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-38 · Medium priority · SQL Validation |
| **Preconditions** | SQL query tool connected. |
| **Test data** | Soft-Delete Query |
| **Test steps** | 1. Cancel enrollment draft on UI.<br>2. Query draft table for status flag. |
| **Expected result** | Draft record updates status flag to inactive rather than hard-deleting row. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-09-30 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SQL-039 — Cross-check API payload response fields against direct SQL table columns

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-39 · High priority · SQL Validation |
| **Preconditions** | SQL tool &amp; Postman active. |
| **Test data** | Schema Mapping Check |
| **Test steps** | 1. Compare JSON response keys from API GET request with SQL table column headers. |
| **Expected result** | API keys map accurately to database schema column definitions. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-01-23 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-SQL-040 — Verify database rollback behavior on failed multi-table transaction

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-40 · High priority · SQL Validation |
| **Preconditions** | SQL test transaction active. |
| **Test data** | Transaction Rollback |
| **Test steps** | 1. Simulate transaction failure mid-way through multi-table insert. |
| **Expected result** | Database rolls back all changes, preventing partial record creation. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-09-24 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

## Agile QA

### TC-HF-AGI-041 — Verify user story acceptance criteria review during sprint grooming session

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-41 · High priority · Agile QA |
| **Preconditions** | Jira backlog grooming active. |
| **Test data** | Jira User Story |
| **Test steps** | 1. Review sprint user story criteria for testability and clarity. |
| **Expected result** | Acceptance criteria validated and marked ready for sprint estimation. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-10-19 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-AGI-042 — Verify defect logging in Jira with reproduction steps, expected vs actual results

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-42 · High priority · Agile QA |
| **Preconditions** | Bug identified during test execution. |
| **Test data** | Jira Bug Ticket |
| **Test steps** | 1. Create Jira bug ticket.<br>2. Populate Summary, Steps, Environment, and Severity. |
| **Expected result** | Defect logged successfully in tracking backlog with correct priority label. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-03-04 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-AGI-043 — Verify defect retesting and workflow transition upon developer fix patch

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-43 · High priority · Agile QA |
| **Preconditions** | Staging patch build deployed. |
| **Test data** | Bug Workflow Fix |
| **Test steps** | 1. Pull fix in staging environment.<br>2. Retest scenario.<br>3. Update Jira ticket status. |
| **Expected result** | Bug verified resolved; ticket transitioned through workflow to Closed status. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-07-11 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-AGI-044 — Participate in daily Agile standup to report QA metrics and blockers

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-44 · Medium priority · Agile QA |
| **Preconditions** | Daily standup meeting active. |
| **Test data** | Standup Notes |
| **Test steps** | 1. Report test pass rates, open defects, and testing velocity. |
| **Expected result** | Cross-functional team aligned on sprint testing progress and release blockers. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-05-02 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-AGI-045 — Execute targeted manual regression check following bug fix deployment

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-45 · High priority · Agile QA |
| **Preconditions** | Patch release build deployed. |
| **Test data** | Patch Release Build |
| **Test steps** | 1. Execute targeted test cases around fixed module. |
| **Expected result** | Targeted tests pass, confirming fix did not introduce regression issues. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-10-27 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-AGI-046 — Organize test repository structure by functional module in test management tool

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-46 · Medium priority · Agile QA |
| **Preconditions** | Test management tool open. |
| **Test data** | Test Repository |
| **Test steps** | 1. Create and organize test cases under structured folders by module. |
| **Expected result** | Test cases structured cleanly for audit and execution tracking. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-12-05 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-AGI-047 — Collaborate with Product Owner to clarify edge case requirements

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-47 · Medium priority · Agile QA |
| **Preconditions** | Backlog refinement meeting. |
| **Test data** | Requirement Notes |
| **Test steps** | 1. Review edge case concerning dependent age limits with Product Owner. |
| **Expected result** | Requirements clarified and documented for development and testing teams. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-07-17 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-AGI-048 — Conduct exploratory testing session on newly released feature module

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-48 · High priority · Agile QA |
| **Preconditions** | Staging exploratory build open. |
| **Test data** | Exploratory Charter |
| **Test steps** | 1. Conduct unscripted exploratory testing focusing on boundary inputs. |
| **Expected result** | Identified subtle UI alignment bug; logged corresponding defect ticket. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2025-11-16 |
| **Environment** | QA |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-AGI-049 — Participate in sprint retrospective meeting to propose QA process improvements

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-49 · Low priority · Agile QA |
| **Preconditions** | Sprint retrospective active. |
| **Test data** | Retro Meeting Notes |
| **Test steps** | 1. Discuss bottlenecks in test data provisioning and propose improvements. |
| **Expected result** | Action item logged to improve test data management. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-02-11 |
| **Environment** | Staging |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |

### TC-HF-AGI-050 — Execute formal staging sanity check post-release deployment build

| Field | Details |
|:--|:--|
| **Requirement / Priority / Area** | REQ-HF-50 · High priority · Agile QA |
| **Preconditions** | Staging release build live. |
| **Test data** | Release Build Sanity |
| **Test steps** | 1. Run approved post-release verification checklist across core user flows. |
| **Expected result** | Sanity check completes successfully; formal verification recorded. |
| **Actual result** | Passed as recorded; detailed observations were not documented. |
| **Status** | Passed |
| **Execution date** | 2026-05-25 |
| **Environment** | UAT |
| **Tester role** | Software Test Analyst |
| **Defect ID** | — |
| **Evidence reference** | Evidence not included |
