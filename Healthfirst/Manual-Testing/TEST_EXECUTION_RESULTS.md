# Healthfirst — Test Execution Results

The records span **May 26, 2025 through October 27, 2026**. This is the earliest-to-latest date range, not a continuous daily testing period. The two failed cases below were recorded on **February 9, 2026** and **May 1, 2026**; both fall within that range. The [test-case catalog](TEST_CASES.md) groups cases by testing area, while the [Excel workbook](Healthfirst_Manual_Test_Cases.xlsx) contains individual execution dates.

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

The [defect log](Defect-Reports/README.md) lists the observed behavior for each failure. See the [test case catalog](TEST_CASES.md) for individual records and the [Excel workbook](Healthfirst_Manual_Test_Cases.xlsx) for traceability.

The totals include 10 Agile QA records covering process and regression activities. Two entries, TC-HF-UAT-030 and TC-HF-AGI-050, describe similar staging sanity checks.
