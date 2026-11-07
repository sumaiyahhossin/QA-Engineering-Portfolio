# Manual Test Execution Results

## Recorded execution summary

The [Excel workbook](Humana_Manual_Test_Cases.xlsx) records 50 QA entries from October 14, 2023 to March 25, 2025, including manual tests and Agile QA activities.

| Recorded status | Count |
|:--|--:|
| Passed | 47 |
| Failed | 3 |
| Blocked / Skipped / Not Run | 0 |
| **Total** | **50** |

## Failed cases recorded in the workbook

| Test case | Recorded observation | Defect reference |
|:--|:--|:--|
| TC-BROWSE-004 | No-results state message failed to render on invalid search string. | JIRA-HUM-7102 |
| TC-COV-014 | Coverage page exposed raw Java stack trace error text instead of a graceful message. | JIRA-HUM-7441 |
| TC-ENROLL-024 | Phone format validation failed to restrict unaccepted characters. | JIRA-HUM-7890 |

[View the full case catalog](TEST_CASES.md).

## Status definitions

| Status | Meaning |
|:--|:--|
| Passed | The recorded actual result met the expected result. |
| Failed | The recorded actual result differed from the expected result. |
| Blocked | Execution could not proceed due to a blocker. |
| Skipped | Execution was intentionally bypassed. |
| Not Run | No execution result was recorded. |

