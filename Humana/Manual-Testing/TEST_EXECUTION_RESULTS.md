# Manual Test Execution Results

## Recorded execution summary

The separately supplied completed Humana Excel workbook, `Humana_Manual_Test_Cases(1).xlsx`, has 50 entries on its `Test_Execution` worksheet. These are **historical entries from the workbook**, not newly run tests or independently verified production results.

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

## Source and evidence notes

- The results above come from the separately uploaded completed workbook. **Do not assume the workbook currently linked in this GitHub repository is the same version.** Its contents need comparison or replacement before the repository can be called fully synchronized.
- Most Passed rows in the source use the same generic actual-result sentence rather than a case-specific observed outcome or attached evidence. The recorded statuses are preserved, but these descriptions should not be presented as independently corroborated test evidence.
- Some dates and build labels warrant review against original release or execution records. They have **not** been silently altered.
- The defect references are transcribed from the workbook and are not links to publicly verifiable Jira issues.
- [View all test cases and recorded outcomes](TEST_CASES.md).

## Status definitions

| Status | Meaning |
|:--|:--|
| Passed | The recorded actual result met the expected result. |
| Failed | The recorded actual result differed from the expected result. |
| Blocked | Execution could not proceed due to a blocker. |
| Skipped | Execution was intentionally bypassed. |
| Not Run | No execution result was recorded. |

For future execution cycles, capture the observed result for each test, test date, environment, build, and supporting defect or evidence reference. Keep historical workbook records distinct from newly verified executions.
