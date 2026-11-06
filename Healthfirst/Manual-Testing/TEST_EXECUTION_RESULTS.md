# Healthfirst — Test Execution Results

## Execution summary

| Metric | Recorded result |
|:--|--:|
| Total test cases | 50 |
| Passed | 48 |
| Failed | 2 |
| Not Run | 0 |

These are recorded manual test execution results, not an independent rerun against a live Healthfirst system. Where detailed observations were not documented, no additional behavior has been assumed.

## Recorded results

| Test Case ID | Scenario | Status | Actual Result | Execution Date | Environment | Defect ID |
|:--|:--|:--|:--|:--|:--|:--|
| TC-HF-SEL-001 | Verify active member coverage status via eligibility lookup portal | Passed | Passed as recorded; detailed observations were not documented. | 2025-09-21 | Staging | — |
| TC-HF-SEL-002 | Validate dynamic plan catalog filtering by service area zip code | Passed | Passed as recorded; detailed observations were not documented. | 2025-12-09 | UAT | — |
| TC-HF-SEL-003 | Verify side-by-side comparison matrix for selected health plans | Passed | Passed as recorded; detailed observations were not documented. | 2026-01-11 | QA | — |
| TC-HF-SEL-004 | Test formulary drug lookup integration during plan browsing | Passed | Passed as recorded; detailed observations were not documented. | 2025-09-08 | Staging | — |
| TC-HF-SEL-005 | Verify error handling on invalid or out-of-area zip code search | Failed | Failed as recorded; see linked defect for details. | 2026-05-01 | UAT | DEF-01 |
| TC-HF-SEL-006 | Validate multi-language toggle (English / Spanish) on portal UI | Passed | Passed as recorded; detailed observations were not documented. | 2025-07-23 | QA | — |
| TC-HF-SEL-007 | Verify Summary of Benefits PDF document download link | Passed | Passed as recorded; detailed observations were not documented. | 2025-07-19 | Staging | — |
| TC-HF-SEL-008 | Validate session persistence when switching between plan comparison and profile | Passed | Passed as recorded; detailed observations were not documented. | 2026-02-23 | UAT | — |
| TC-HF-SEL-009 | Verify responsive layout scaling on mobile device viewports | Passed | Passed as recorded; detailed observations were not documented. | 2025-05-26 | QA | — |
| TC-HF-SEL-010 | Verify end-to-end user navigation flow across plan discovery and selection wizard | Passed | Passed as recorded; detailed observations were not documented. | 2026-10-11 | Staging | — |
| TC-HF-API-011 | Verify GET /api/eligibility returns 200 OK with valid JSON structure | Passed | Passed as recorded; detailed observations were not documented. | 2025-12-27 | UAT | — |
| TC-HF-API-012 | Validate POST /api/enrollment payload persistence and response code | Passed | Passed as recorded; detailed observations were not documented. | 2026-08-24 | QA | — |
| TC-HF-API-013 | Test negative validation for missing required field in enrollment payload | Failed | Failed as recorded; see linked defect for details. | 2026-02-09 | Staging | DEF-02 |
| TC-HF-API-014 | Verify unauthorized access restriction on protected profile endpoint | Passed | Passed as recorded; detailed observations were not documented. | 2026-10-19 | UAT | — |
| TC-HF-API-015 | Validate SQL injection prevention on query parameter input strings | Passed | Passed as recorded; detailed observations were not documented. | 2025-07-23 | QA | — |
| TC-HF-API-016 | Verify duplicate submission handling on repeated POST enrollment requests | Passed | Passed as recorded; detailed observations were not documented. | 2025-12-09 | Staging | — |
| TC-HF-API-017 | Verify GET /api/plans/search filters results correctly by region parameter | Passed | Passed as recorded; detailed observations were not documented. | 2025-07-11 | UAT | — |
| TC-HF-API-018 | Validate PUT /api/member/profile update on valid contact attributes | Passed | Passed as recorded; detailed observations were not documented. | 2025-12-31 | QA | — |
| TC-HF-API-019 | Verify GET /api/documents/summary returns valid temporary download URL | Passed | Passed as recorded; detailed observations were not documented. | 2026-01-08 | Staging | — |
| TC-HF-API-020 | Validate API response error payload structure during simulated timeout | Passed | Passed as recorded; detailed observations were not documented. | 2026-07-03 | UAT | — |
| TC-HF-UAT-021 | Execute exploratory testing session on member onboarding portal workflow | Passed | Passed as recorded; detailed observations were not documented. | 2026-05-16 | QA | — |
| TC-HF-UAT-022 | Validate form input validation rules with boundary character limits | Passed | Passed as recorded; detailed observations were not documented. | 2026-07-12 | Staging | — |
| TC-HF-UAT-023 | Verify accessibility tab-index ordering across portal input forms | Passed | Passed as recorded; detailed observations were not documented. | 2026-02-10 | UAT | — |
| TC-HF-UAT-024 | Coordinate User Acceptance Testing (UAT) session with business stakeholders | Passed | Passed as recorded; detailed observations were not documented. | 2025-11-12 | QA | — |
| TC-HF-UAT-025 | Verify post-deployment smoke test suite on staging release build | Passed | Passed as recorded; detailed observations were not documented. | 2026-01-24 | Staging | — |
| TC-HF-UAT-026 | Validate cross-browser manual verification on Safari and Firefox | Passed | Passed as recorded; detailed observations were not documented. | 2026-07-02 | UAT | — |
| TC-HF-UAT-027 | Verify password complexity rule validation on account registration form | Passed | Passed as recorded; detailed observations were not documented. | 2025-11-11 | QA | — |
| TC-HF-UAT-028 | Verify logout session termination and browser back-button restriction | Passed | Passed as recorded; detailed observations were not documented. | 2026-01-16 | Staging | — |
| TC-HF-UAT-029 | Verify email format validation check on member profile update form | Passed | Passed as recorded; detailed observations were not documented. | 2026-05-01 | UAT | — |
| TC-HF-UAT-030 | Execute formal staging sanity check post-release deployment build | Passed | Passed as recorded; detailed observations were not documented. | 2025-10-23 | QA | — |
| TC-HF-SQL-031 | Verify backend database record creation following frontend enrollment | Passed | Passed as recorded; detailed observations were not documented. | 2025-10-16 | Staging | — |
| TC-HF-SQL-032 | Verify member policy status attribute matches between UI and database | Passed | Passed as recorded; detailed observations were not documented. | 2026-05-07 | UAT | — |
| TC-HF-SQL-033 | Validate plan catalog pricing attributes against backend pricing table | Passed | Passed as recorded; detailed observations were not documented. | 2025-05-30 | QA | — |
| TC-HF-SQL-034 | Verify dependent record association mapping under primary subscriber ID | Passed | Passed as recorded; detailed observations were not documented. | 2026-08-13 | Staging | — |
| TC-HF-SQL-035 | Test database query performance on plan catalog search index | Passed | Passed as recorded; detailed observations were not documented. | 2025-11-26 | UAT | — |
| TC-HF-SQL-036 | Verify audit log table records user login timestamp upon portal authentication | Passed | Passed as recorded; detailed observations were not documented. | 2026-09-24 | QA | — |
| TC-HF-SQL-037 | Validate data type constraints on member profile update table columns | Passed | Passed as recorded; detailed observations were not documented. | 2026-09-03 | Staging | — |
| TC-HF-SQL-038 | Verify soft-delete flag behavior on canceled enrollment drafts | Passed | Passed as recorded; detailed observations were not documented. | 2025-09-30 | UAT | — |
| TC-HF-SQL-039 | Cross-check API payload response fields against direct SQL table columns | Passed | Passed as recorded; detailed observations were not documented. | 2026-01-23 | QA | — |
| TC-HF-SQL-040 | Verify database rollback behavior on failed multi-table transaction | Passed | Passed as recorded; detailed observations were not documented. | 2026-09-24 | Staging | — |
| TC-HF-AGI-041 | Verify user story acceptance criteria review during sprint grooming session | Passed | Passed as recorded; detailed observations were not documented. | 2025-10-19 | UAT | — |
| TC-HF-AGI-042 | Verify defect logging in Jira with reproduction steps, expected vs actual results | Passed | Passed as recorded; detailed observations were not documented. | 2026-03-04 | QA | — |
| TC-HF-AGI-043 | Verify defect retesting and workflow transition upon developer fix patch | Passed | Passed as recorded; detailed observations were not documented. | 2025-07-11 | Staging | — |
| TC-HF-AGI-044 | Participate in daily Agile standup to report QA metrics and blockers | Passed | Passed as recorded; detailed observations were not documented. | 2026-05-02 | UAT | — |
| TC-HF-AGI-045 | Execute targeted manual regression check following bug fix deployment | Passed | Passed as recorded; detailed observations were not documented. | 2026-10-27 | QA | — |
| TC-HF-AGI-046 | Organize test repository structure by functional module in test management tool | Passed | Passed as recorded; detailed observations were not documented. | 2025-12-05 | Staging | — |
| TC-HF-AGI-047 | Collaborate with Product Owner to clarify edge case requirements | Passed | Passed as recorded; detailed observations were not documented. | 2026-07-17 | UAT | — |
| TC-HF-AGI-048 | Conduct exploratory testing session on newly released feature module | Passed | Passed as recorded; detailed observations were not documented. | 2025-11-16 | QA | — |
| TC-HF-AGI-049 | Participate in sprint retrospective meeting to propose QA process improvements | Passed | Passed as recorded; detailed observations were not documented. | 2026-02-11 | Staging | — |
| TC-HF-AGI-050 | Execute formal staging sanity check post-release deployment build | Passed | Passed as recorded; detailed observations were not documented. | 2026-05-25 | UAT | — |

## Failed cases

The two failed cases retain their recorded actual results and defect references. See [Manual Test Cases](TEST_CASES.md) for full steps, expected results, test data, and additional execution details.

## Status definitions

- **Passed:** The recorded execution status indicates the expected result was met.
- **Failed:** The recorded execution status indicates a discrepancy; review the linked defect reference.
- **Blocked:** Execution could not continue because of an issue.
- **Not Run:** Execution has not been performed.

The Build/Release field is intentionally omitted. No recorded status, date, environment, or defect reference was changed in preparing this summary.
