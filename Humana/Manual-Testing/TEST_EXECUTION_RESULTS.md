# Manual Test Execution

**Workbook:** [Humana_Manual_Test_Cases.xlsx](Humana_Manual_Test_Cases.xlsx)  
**Execution Worksheet:** `Test_Execution`

The workbook tracks manual test results. This document defines the status values used across test cycles.

| Status | Meaning |
| --- | --- |
| **Passed** | The actual result matched the expected result. |
| **Failed** | The actual result did not match the expected result. |
| **Blocked** | Execution could not proceed due to an environment, access, or dependency blocker. |
| **Skipped** | The test case was intentionally bypassed for the test run. |
| **Not Run** | No execution result has been recorded for the test case during the current cycle. |

## Execution Logging Standards

For every test run, record the test case ID, date, actual outcome, final status, and linked defect reference (if applicable). Environment and build details should also be included when relevant to the run.

Execution metrics should reflect actual test runs recorded in the workbook, keeping documented test cases separate from verified test execution.
