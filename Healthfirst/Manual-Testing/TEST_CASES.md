# Manual Test Cases — Workbook-Aligned Index

This index matches the **50 test case IDs, functional areas, and scenario titles** in the public Healthfirst manual QA Excel workbook (`Test_Cases` worksheet). For complete preconditions, steps, expected results, test data, and execution details, refer to the workbook. This index does not create additional test executions or change their recorded outcomes.

| Test Case ID | Functional Area | Test Scenario |
| --- | --- | --- |
| TC-HF-SEL-001 | Plan Selection | Verify active member coverage status via eligibility lookup portal |
| TC-HF-SEL-002 | Plan Selection | Validate dynamic plan catalog filtering by service area zip code |
| TC-HF-SEL-003 | Plan Selection | Verify side-by-side comparison matrix for selected health plans |
| TC-HF-SEL-004 | Plan Selection | Test formulary drug lookup integration during plan browsing |
| TC-HF-SEL-005 | Plan Selection | Verify error handling on invalid or out-of-area zip code search |
| TC-HF-SEL-006 | Plan Selection | Validate multi-language toggle (English / Spanish) on portal UI |
| TC-HF-SEL-007 | Plan Selection | Verify Summary of Benefits PDF document download link |
| TC-HF-SEL-008 | Plan Selection | Validate session persistence when switching between plan comparison and profile |
| TC-HF-SEL-009 | Plan Selection | Verify responsive layout scaling on mobile device viewports |
| TC-HF-SEL-010 | Plan Selection | Verify end-to-end user navigation flow across plan discovery and selection wizard |
| TC-HF-API-011 | API Testing | Verify GET /api/eligibility returns 200 OK with valid JSON structure |
| TC-HF-API-012 | API Testing | Validate POST /api/enrollment payload persistence and response code |
| TC-HF-API-013 | API Testing | Test negative validation for missing required field in enrollment payload |
| TC-HF-API-014 | API Testing | Verify unauthorized access restriction on protected profile endpoint |
| TC-HF-API-015 | API Testing | Validate SQL injection prevention on query parameter input strings |
| TC-HF-API-016 | API Testing | Verify duplicate submission handling on repeated POST enrollment requests |
| TC-HF-API-017 | API Testing | Verify GET /api/plans/search filters results correctly by region parameter |
| TC-HF-API-018 | API Testing | Validate PUT /api/member/profile update on valid contact attributes |
| TC-HF-API-019 | API Testing | Verify GET /api/documents/summary returns valid temporary download URL |
| TC-HF-API-020 | API Testing | Validate API response error payload structure during simulated timeout |
| TC-HF-UAT-021 | UAT & Exploratory | Execute exploratory testing session on member onboarding portal workflow |
| TC-HF-UAT-022 | UAT & Exploratory | Validate form input validation rules with boundary character limits |
| TC-HF-UAT-023 | UAT & Exploratory | Verify accessibility tab-index ordering across portal input forms |
| TC-HF-UAT-024 | UAT & Exploratory | Coordinate User Acceptance Testing (UAT) session with business stakeholders |
| TC-HF-UAT-025 | UAT & Exploratory | Verify post-deployment smoke test suite on staging release build |
| TC-HF-UAT-026 | UAT & Exploratory | Validate cross-browser manual verification on Safari and Firefox |
| TC-HF-UAT-027 | UAT & Exploratory | Verify password complexity rule validation on account registration form |
| TC-HF-UAT-028 | UAT & Exploratory | Verify logout session termination and browser back-button restriction |
| TC-HF-UAT-029 | UAT & Exploratory | Verify email format validation check on member profile update form |
| TC-HF-UAT-030 | UAT & Exploratory | Execute formal staging sanity check post-release deployment build |
| TC-HF-SQL-031 | SQL Validation | Verify backend database record creation following frontend enrollment |
| TC-HF-SQL-032 | SQL Validation | Verify member policy status attribute matches between UI and database |
| TC-HF-SQL-033 | SQL Validation | Validate plan catalog pricing attributes against backend pricing table |
| TC-HF-SQL-034 | SQL Validation | Verify dependent record association mapping under primary subscriber ID |
| TC-HF-SQL-035 | SQL Validation | Test database query performance on plan catalog search index |
| TC-HF-SQL-036 | SQL Validation | Verify audit log table records user login timestamp upon portal authentication |
| TC-HF-SQL-037 | SQL Validation | Validate data type constraints on member profile update table columns |
| TC-HF-SQL-038 | SQL Validation | Verify soft-delete flag behavior on canceled enrollment drafts |
| TC-HF-SQL-039 | SQL Validation | Cross-check API payload response fields against direct SQL table columns |
| TC-HF-SQL-040 | SQL Validation | Verify database rollback behavior on failed multi-table transaction |
| TC-HF-AGI-041 | Agile QA | Verify user story acceptance criteria review during sprint grooming session |
| TC-HF-AGI-042 | Agile QA | Verify defect logging in Jira with reproduction steps, expected vs actual results |
| TC-HF-AGI-043 | Agile QA | Verify defect retesting and workflow transition upon developer fix patch |
| TC-HF-AGI-044 | Agile QA | Participate in daily Agile standup to report QA metrics and blockers |
| TC-HF-AGI-045 | Agile QA | Execute targeted manual regression check following bug fix deployment |
| TC-HF-AGI-046 | Agile QA | Organize test repository structure by functional module in test management tool |
| TC-HF-AGI-047 | Agile QA | Collaborate with Product Owner to clarify edge case requirements |
| TC-HF-AGI-048 | Agile QA | Conduct exploratory testing session on newly released feature module |
| TC-HF-AGI-049 | Agile QA | Participate in sprint retrospective meeting to propose QA process improvements |
| TC-HF-AGI-050 | Agile QA | Execute formal staging sanity check post-release deployment build |

The public workbook contains 50 execution records (48 passed, 2 failed), separate from this scenario index. The source data is generalized for portfolio use; it is not an original internal employer export.
