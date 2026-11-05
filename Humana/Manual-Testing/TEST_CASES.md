# Manual Test Suite: Healthcare Plan Browsing & Member Access

**Project Name:** Healthcare Plan Browsing and Public Account Access

**Target System:** Humana Public Web Portal — Medicare Advantage plan browsing

---

## Test Case Index

| Test Case ID | Test Scenario | Module | Priority | Type |
| --- | --- | --- | --- | --- |
| **TC-HUM-001** | Medicare Advantage Plan Browsing by ZIP Code | Public Plan Search | P1 | Functional |
| **TC-HUM-002** | Plan Benefits and Cost-Sharing Details | Plan Details | P2 | Functional |
| **TC-HUM-003** | Required Field Validation on ZIP Code Finder | Form Validation | P1 | Negative |
| **TC-HUM-004** | Invalid ZIP Code Format Handling | Input Validation | P2 | Boundary |
| **TC-HUM-005** | Portal Navigation and Search State | Application Navigation | P3 | Usability |
| **TC-HUM-006** | Sign-In and Profile Setup Progression | Account Access | P1 | Functional |

---

## TC-HUM-001: Medicare Advantage Plan Browsing by ZIP Code

**Test Scenario:** Verify that a visitor can search for Medicare Advantage plans using a ZIP code and view the available regional plan results.

**Preconditions:**
- The public Medicare Advantage plan browsing page is accessible.
- A valid five-digit ZIP code is available for testing.

| Step # | Action | Test Data / UI Element | Expected Result |
| --- | --- | --- | --- |
| 1 | Open the Medicare Advantage plan browsing page. | Public plan browsing page | The page loads and the ZIP code search field is displayed. |
| 2 | Locate the ZIP code field. | ZIP code input | The field is visible and enabled. |
| 3 | Enter a ZIP code and submit the search. | ZIP code: `11417`; search button | The form accepts the five-digit ZIP code and starts the plan search. |
| 4 | Review the search results. | Plan search results area | Available regional Medicare Advantage plan results are displayed, including plan information provided by the page. |

---

## TC-HUM-002: Plan Benefits and Cost-Sharing Details

**Test Scenario:** Verify that a visitor can open a plan's details and review the benefit and cost-sharing information presented.

**Preconditions:**
- A plan search has been completed.
- At least one plan is available in the results.

| Step # | Action | Test Data / UI Element | Expected Result |
| --- | --- | --- | --- |
| 1 | Locate a plan in the search results. | Plan result card | The plan summary and available plan information are displayed. |
| 2 | Open the plan details. | View plan details link or button | The selected plan's details are displayed. |
| 3 | Locate the benefits and cost-sharing information. | Benefits section or tab, if available | The page displays the benefit and cost information available for the selected plan. |
| 4 | Review the displayed coverage categories and amounts. | Plan benefit details | The information is readable and associated with the selected plan. |

---

## TC-HUM-003: Required Field Validation on ZIP Code Finder

**Test Scenario:** Verify that the plan finder prevents a search when the ZIP code field is empty and provides validation feedback.

**Preconditions:**
- The public Medicare Advantage plan browsing page is open.
- The ZIP code field is empty.

| Step # | Action | Test Data / UI Element | Expected Result |
| --- | --- | --- | --- |
| 1 | Locate the ZIP code field and leave it empty. | ZIP code input | The field remains empty. |
| 2 | Submit the search without entering a ZIP code. | Search button | The form prevents an empty search and provides validation feedback. |
| 3 | Review the field's validation state. | ZIP code field and validation message | The validation message identifies the missing ZIP code and the field is indicated as invalid. |

---

## TC-HUM-004: Invalid ZIP Code Format Handling

**Test Scenario:** Verify that the plan finder handles incomplete and non-numeric ZIP code input.

**Preconditions:**
- The public plan finder is open and ready for input.

| Step # | Action | Test Data / UI Element | Expected Result |
| --- | --- | --- | --- |
| 1 | Enter an incomplete ZIP code and submit. | `114` | The form displays validation feedback requiring a valid five-digit ZIP code. |
| 2 | Attempt to enter alphabetic characters. | `ABCDE` | Non-numeric input is rejected or validation feedback is displayed. |
| 3 | Correct the field with a valid five-digit ZIP code and submit. | `11417` | The form accepts the valid format and proceeds with the plan search. |

---

## TC-HUM-005: Portal Navigation and Search State

**Test Scenario:** Verify navigation between public Medicare information pages and plan search results.

**Preconditions:**
- The visitor has opened the public plan browsing page.
- A plan search has been completed.

| Step # | Action | Test Data / UI Element | Expected Result |
| --- | --- | --- | --- |
| 1 | Navigate to another public Medicare information section using the site navigation. | Visible navigation link | The selected page loads successfully. |
| 2 | Use the browser Back button. | Browser navigation | The browser returns to the previous page. |
| 3 | Return to the plan search results. | Visible back or results navigation, if available | The plan results page loads. Previously entered search information is retained when supported by the application. |

---

## TC-HUM-006: Sign-In and Profile Setup Progression

**Test Scenario:** Verify that accepted test credentials advance the sign-in flow to the next account or profile setup step without accessing member coverage information.

**Preconditions:**
- The account sign-in page is accessible.
- Authorized test credentials are available and stored securely outside the repository.

| Step # | Action | Test Data / UI Element | Expected Result |
| --- | --- | --- | --- |
| 1 | Open the account sign-in page. | Sign-in page | The username and password fields are displayed. |
| 2 | Enter the authorized test username. | Securely supplied test username | The username field accepts the test value. |
| 3 | Enter the authorized test password. | Securely supplied test password | The password is masked in the field. |
| 4 | Submit the sign-in form. | Sign In button | The form submits over the secure sign-in connection. |
| 5 | Review the next page or prompt. | Account or profile setup step | If the credentials are accepted, the application advances to the next account or profile setup step. This test does not verify Medicare eligibility, enrollment, or member coverage. |
