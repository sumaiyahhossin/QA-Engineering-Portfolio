# Manual Test Cases

**Project area:** Member-facing healthcare workflows

## HF-TC-001: Verify member workflow navigation

**Preconditions:** Access to the test environment and an approved test account.

**Steps**
1. Sign in with the approved test account.
2. Open the member-facing application.
3. Navigate through the available workflow sections.
4. Return to the starting section.

**Expected result:** Each selected section opens and navigation completes without an unexpected error.

## HF-TC-002: Verify eligibility with valid test data

**Preconditions:** Valid, approved test data is available.

**Steps**
1. Open the eligibility workflow.
2. Enter the approved test information.
3. Submit the request.
4. Review the result.

**Expected result:** The workflow displays the expected eligibility result for the test record.

## HF-TC-003: Verify required field validation

**Steps**
1. Open the applicable form.
2. Leave a required field empty.
3. Submit the form.

**Expected result:** The missing field is identified and the expected validation message appears.

## HF-TC-004: Verify invalid input handling

**Steps**
1. Open the applicable form.
2. Enter a value in an invalid format.
3. Submit the form.

**Expected result:** The application handles the value according to the documented validation rules.

## HF-TC-005: Verify health plan search results

**Steps**
1. Open the plan browsing section.
2. Enter approved search criteria.
3. Submit the search.
4. Review the results.

**Expected result:** The displayed plans match the selected criteria and applicable rules.

## HF-TC-006: Verify health plan details

**Steps**
1. Select a plan from the results.
2. Open its details.
3. Review the displayed plan information.

**Expected result:** The selected plan is identified correctly and its details are displayed.

## HF-TC-007: Verify API error handling in the application

**Preconditions:** An approved test condition is available for a documented service error.

**Steps**
1. Open the workflow that uses the service.
2. Trigger the approved error condition.
3. Review the application response.

**Expected result:** The application displays an appropriate message and does not show misleading information.

## HF-TC-008: Verify displayed data

**Preconditions:** Expected values for an approved test record are available.

**Steps**
1. Open the relevant member workflow.
2. Find the test record.
3. Compare the displayed values with the expected values.

**Expected result:** The displayed information matches the expected test data.

## HF-TC-009: Verify behavior when no plans match the search

**Steps**
1. Open plan browsing.
2. Enter approved criteria that return no matching plans.
3. Submit the search.

**Expected result:** The application displays the appropriate no-results message and does not show unrelated plans.

## HF-TC-010: Verify regression after a change

**Steps**
1. Identify the workflow affected by the change.
2. Run the relevant test case.
3. Run related member and plan checks.
4. Review the results.

**Expected result:** The updated workflow works as expected and related functionality remains unaffected.

These are portfolio test cases, not copies of internal Healthfirst test cases. Confirm exact requirements and expected results before using them in an actual test environment.