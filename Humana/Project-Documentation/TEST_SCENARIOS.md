# Functional Test Scenarios: Healthcare Plan Browsing & Member Access

**Company / Project:** Humana Health Insurance  
**Project Name:** Healthcare Plan Browsing and Member Coverage  
**Role:** Junior QA Analyst  
**Document Version:** 1.0  
**Testing Approach:** Manual & Automated  

---

## 1. Functional Scope & Scenario Matrix

| Scenario ID | Functional Area | Scenario Description | Execution Type |
| :--- | :--- | :--- | :---: |
| **TS-BROWSE-001** | Plan Search | Verify healthcare plan search page loads correctly | Manual |
| **TS-BROWSE-002** | Plan Search | Verify ZIP code entry and field validation | Manual / Automated |
| **TS-BROWSE-003** | Plan Search | Verify plan search submission workflow | Manual / Automated |
| **TS-BROWSE-004** | Plan Search | Verify plan search results display correctly | Manual |
| **TS-BROWSE-005** | Plan Details | Verify navigation to individual plan details | Manual |
| **TS-NAV-006** | Authentication | Verify login page loads correctly | Manual / Automated |
| **TS-NAV-007** | Authentication | Verify invalid login credential handling | Manual / Automated |
| **TS-NAV-008** | Authentication | Verify blank login submission validation | Manual / Automated |
| **TS-NAV-009** | Authentication | Verify login form behavior with valid input | Manual |
| **TS-SANITY-010** | Regression | Verify core application functionality after changes | Manual / Automated |

---

## 2. Detailed Test Scenarios

### Scenario 1: Verify Healthcare Plan Search Page Loads
* **Scenario ID:** `TS-BROWSE-001`
* **Functional Scope:** Healthcare Plan Search
* **Description:** Verify that the healthcare plan search page loads correctly and displays the necessary page elements, instructions, and ZIP code input field.
* **Preconditions:**
  - Application is available for testing.
  - User can access the healthcare plan search page.
* **Expected Result:**
  - The page loads successfully.
  - Search instructions and input fields are displayed.
  - The page layout is properly rendered.
  - No unexpected errors prevent user interaction.

### Scenario 2: Verify ZIP Code Input Functionality
* **Scenario ID:** `TS-BROWSE-002`
* **Functional Scope:** Plan Search Form Validation
* **Description:** Verify that the ZIP code input field accepts valid numeric entries and handles invalid or incomplete inputs appropriately.
* **Preconditions:**
  - User is on the healthcare plan search page.
* **Expected Result:**
  - Valid 5-digit ZIP code input is accepted.
  - Invalid and incomplete entries are handled appropriately.
  - Entered values display correctly.
  - Validation messages appear when applicable.

### Scenario 3: Verify Plan Search Submission
* **Scenario ID:** `TS-BROWSE-003`
* **Functional Scope:** Plan Search Execution
* **Description:** Verify that submitting a valid ZIP code initiates the healthcare plan search process.
* **Preconditions:**
  - User is on the plan search page.
  - A valid ZIP code has been entered.
* **Expected Result:**
  - The search action is triggered successfully.
  - The application processes the submitted search criteria.
  - The user is directed to the appropriate search results or receives an appropriate response.

### Scenario 4: Verify Healthcare Plan Search Results
* **Scenario ID:** `TS-BROWSE-004`
* **Functional Scope:** Plan Search Results
* **Description:** Verify that available healthcare plan search results are displayed correctly after a successful search.
* **Preconditions:**
  - A valid search has been submitted.
  - Search results are available for the selected location.
* **Expected Result:**
  - Relevant plan results are displayed.
  - Plan names and available information are visible.
  - Search results are presented in an organized layout.
  - Appropriate messaging appears when no results are available.

### Scenario 5: Verify Plan Details Navigation
* **Scenario ID:** `TS-BROWSE-005`
* **Functional Scope:** Plan Details & Coverage Information
* **Description:** Verify that users can navigate from the healthcare plan search results to individual plan information.
* **Preconditions:**
  - Search results are displayed.
  - At least one plan is available.
* **Expected Result:**
  - Selecting a plan details option opens the appropriate information.
  - Plan information and available coverage details are displayed.
  - Navigation works as expected.
  - No unexpected errors occur.

### Scenario 6: Verify Member Login Page Loads
* **Scenario ID:** `TS-NAV-006`
* **Functional Scope:** Member Authentication
* **Description:** Verify that the member login page loads correctly and displays the required username and password fields.
* **Preconditions:**
  - User can access the member login page.
* **Expected Result:**
  - Login page loads successfully.
  - Username and password fields are visible.
  - Login button and related navigation elements are displayed.
  - Page elements are available for interaction.

### Scenario 7: Verify Invalid Login Credentials
* **Scenario ID:** `TS-NAV-007`
* **Functional Scope:** Negative Authentication Testing
* **Description:** Verify application behavior when a user submits incorrect or unrecognized login credentials.
* **Preconditions:**
  - User is on the login page.
  - Invalid test inputs are available.
* **Expected Result:**
  - Invalid credentials are not accepted.
  - An appropriate error message is displayed.
  - The user remains on the login page.
  - No unauthorized access is granted.

### Scenario 8: Verify Blank Login Form Validation
* **Scenario ID:** `TS-NAV-008`
* **Functional Scope:** Login Form Validation
* **Description:** Verify that submitting the login form without entering required information triggers the appropriate validation behavior.
* **Preconditions:**
  - User is on the login page.
  - Username and password fields are empty.
* **Expected Result:**
  - Required fields are validated.
  - Appropriate validation messages are displayed.
  - The application does not proceed with an incomplete login attempt.

### Scenario 9: Verify Login Form Behavior with Valid Input
* **Scenario ID:** `TS-NAV-009`
* **Functional Scope:** Login Functionality
* **Description:** Verify the login form behavior when valid-format test inputs are entered.
* **Preconditions:**
  - User is on the login page.
  - Test inputs are available.
* **Expected Result:**
  - Input values are accepted in the appropriate fields.
  - The login action can be initiated.
  - The application responds according to the authentication process.

### Scenario 10: Verify Regression Stability Following Application Changes
* **Scenario ID:** `TS-SANITY-010`
* **Functional Scope:** Regression Testing
* **Description:** Verify that critical healthcare plan browsing and login functionality continues to operate as expected following application changes.
* **Preconditions:**
  - An updated application build is available for testing.
  - Relevant test cases are prepared.
* **Expected Result:**
  - Critical application workflows continue to function.
  - Previously working functionality is not negatively affected.
  - Identified failures are documented for investigation.

---

## 3. Test Execution & Documentation

Functional test scenarios are used as a high-level reference for organizing detailed manual and automated testing activities.

Detailed test steps, test data, expected results, and execution records are maintained in the project's manual test case documentation and Excel workbook (`Humana_Manual_Test_Cases.xlsx`).

Selected scenarios are also covered by Selenium WebDriver automation using Java and TestNG.
