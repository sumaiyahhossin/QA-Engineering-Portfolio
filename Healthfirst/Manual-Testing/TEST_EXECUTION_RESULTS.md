# Healthfirst — Test Execution Results

Recorded execution dates: **May 26, 2025 – October 27, 2026**, matching the updated manual testing spreadsheet. Entries are presented by functional area in the test-case catalog and by execution date in the spreadsheet.

## Execution summary

| Metric | Recorded result |
|:--|--:|
| Total QA records | 50 |
| Passed | 48 |
| Failed | 2 |
| Blocked | 0 |
| Not Run | 0 |
| Pass rate | 96% |

## Results by testing area

| Testing area | Test case IDs | Total | Passed | Failed |
|:--|:--|--:|--:|--:|
| Member eligibility, plan search, and portal workflows | TC-HF-SEL-001–010 | 10 | 9 | 1 |
| API and integration testing | TC-HF-API-011–020 | 10 | 9 | 1 |
| UAT and functional testing | TC-HF-UAT-021–030 | 10 | 10 | 0 |
| SQL and data validation | TC-HF-SQL-031–040 | 10 | 10 | 0 |
| Agile QA and regression activities | TC-HF-AGI-041–050 | 10 | 10 | 0 |
| **Total** | | **50** | **48** | **2** |

## Failed test cases

| Test case ID | Scenario | Recorded date | Environment | Status | Defect |
|:--|:--|:--|:--|:--|:--|
| TC-HF-SEL-005 | Invalid or out-of-area ZIP code search error handling | 2026-05-01 | UAT | Failed | DEF-01 |
| TC-HF-API-013 | Required-field validation for enrollment API payload | 2026-02-09 | Staging | Failed | DEF-02 |

Both failures are retained as recorded. The defect references identify the associated issues; the available execution entries do not provide detailed observed behavior or independent evidence of retesting.

## Scope of recorded cases

The Agile QA category includes process activities as well as regression-related checks; these are not all independent functional test executions. Two entries describe similar staging sanity-check activities (TC-HF-UAT-030 and TC-HF-AGI-050). Both original records are retained, but they should not be treated as proof of two distinct test executions without supporting run details.

## Execution record

The 50 recorded outcomes span QA, Staging, and UAT environments. Detailed test steps, expected results, recorded outcome descriptions, individual execution dates, and test data are maintained in [Manual Test Cases](TEST_CASES.md). The associated workbook also contains the defect log and traceability records. This page is the high-level execution report rather than a duplicate of the test-case catalog.

These are recorded manual testing outcomes, not an independently rerun test suite or a claim of access to a live Healthfirst system.
