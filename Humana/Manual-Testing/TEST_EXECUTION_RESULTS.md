# Manual Test Execution

**Workbook:** Humana_Manual_Test_Cases.xlsx  
**Execution worksheet:** Test_Execution

The workbook is where the manual test results are tracked. This page explains the status values; it isn't a separate record of test execution.

| Status | Meaning |
| --- | --- |
| Passed | The actual result matched the expected result. |
| Failed | The actual result did not match the expected result. |
| Blocked | The test couldn't continue because of an environment, access, or dependency issue. |
| Skipped | The test was intentionally not run. |
| Not Run | There is no execution result yet. |

For each run, record the test case ID, date, actual result, status, and defect reference if one was created. Add the environment or build details when they're useful and okay to share.

Only publish execution totals after checking the workbook. A written test case isn't proof that the test was run.
