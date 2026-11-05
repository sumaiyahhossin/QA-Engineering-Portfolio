# Test Scenarios

**Project area:** Member-facing healthcare workflows

| ID | Scenario | Expected result |
|---|---|---|
| HF-001 | Navigate between member workflow sections | The requested section opens and the user can return without an unexpected error. |
| HF-002 | Submit eligibility information with valid test data | The workflow displays the expected result for the test record. |
| HF-003 | Submit the eligibility form with a required field missing | The missing field is identified and the appropriate validation message appears. |
| HF-004 | Enter eligibility information in an invalid format | The value is rejected or handled according to the documented validation rules. |
| HF-005 | Browse health plans using search criteria | The results reflect the selected criteria. |
| HF-006 | Open a health plan from the results | The selected plan's details are displayed. |
| HF-007 | Submit a valid API request | The response matches the documented status and response structure. |
| HF-008 | Submit an API request with missing or invalid information | The API returns the documented validation response. |
| HF-009 | Compare displayed information with expected test data | The values match the expected data for the test record. |
| HF-010 | Retest member and plan workflows after a change | The affected workflow and related regression checks continue to work. |

These are portfolio scenarios. Exact business rules and expected results should be confirmed against the requirements for the system being tested.