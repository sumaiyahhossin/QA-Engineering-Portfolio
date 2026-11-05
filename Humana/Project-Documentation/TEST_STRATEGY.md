# Quality Assurance Test Strategy

**Company / Project:** Humana Health Insurance  
**Project Name:** Healthcare Plan Browsing and Member Coverage  
**Role:** Junior QA Analyst  
**Methodology:** Agile / Scrum  
**Document Version:** 1.0  

---

## 1. Testing Objectives

The primary objective of the testing strategy is to verify the functionality, reliability, and usability of the healthcare plan browsing and member access application.

Testing objectives include:

- Verify healthcare plan browsing and search functionality.
- Validate ZIP code input, search results, and plan information.
- Verify plan details and coverage information.
- Test member login functionality and form validation.
- Identify, document, and track application defects.
- Verify that application changes do not negatively affect existing functionality.
- Improve testing efficiency through automated regression testing.

---

## 2. Testing Levels

| Testing Level | Scope & Description |
| :--- | :--- |
| **Functional Testing** | Verify individual application features and workflows against expected behavior. |
| **Integration Testing** | Verify interactions between related application components and workflows. |
| **System Testing** | Validate complete user workflows across healthcare plan browsing and member access functionality. |
| **Regression Testing** | Verify that application changes do not break existing functionality. |
| **Smoke Testing** | Check critical application functionality following new builds or updates. |

---

## 3. Testing Types

| Testing Type | Description |
| :--- | :--- |
| **Positive Testing** | Verify standard application workflows using valid inputs. |
| **Negative Testing** | Verify application behavior when invalid or unexpected inputs are submitted. |
| **Boundary Testing** | Test input limits, field requirements, and edge cases. |
| **UI Testing** | Verify page layouts, form elements, navigation, and displayed information. |
| **Cross-Browser Testing** | Check application behavior across supported browsers where applicable. |
| **Functional Testing** | Verify that application features behave according to expected requirements. |

---

## 4. Manual Testing Strategy

Manual testing focuses on validating application functionality through structured test scenarios and test cases.

Activities include:

- Reviewing requirements and understanding application workflows.
- Identifying positive, negative, and boundary test scenarios.
- Developing and maintaining manual test cases.
- Preparing sample test data.
- Executing test cases and documenting actual results.
- Comparing actual results against expected results.
- Reporting defects and documenting supporting evidence.
- Retesting resolved defects and performing regression checks.

Manual test cases are maintained in the project documentation and Excel workbook (`Humana_Manual_Test_Cases.xlsx`).

---

## 5. Automation Testing Strategy

Automation testing focuses on repeatable application workflows using Java, Selenium WebDriver, and TestNG.

Automation activities include:

- Initializing browser sessions using Selenium WebDriver.
- Identifying and interacting with web elements.
- Organizing test scripts using the Page Object Model where implemented.
- Automating login and healthcare plan browsing scenarios.
- Validating application behavior using TestNG assertions.
- Handling browser synchronization and element waits.
- Organizing test execution through TestNG XML configuration.
- Managing dependencies using Maven.
- Running configured automated tests through GitHub Actions.

Automation is used to support regression testing and reduce repetitive manual execution.

---

## 6. Defect Management Strategy

Defects identified during testing are documented and tracked using Jira. Each defect report should include:

- Defect summary.
- Affected application functionality.
- Testing environment.
- Preconditions.
- Steps to reproduce.
- Expected result.
- Actual result.
- Severity and priority.
- Supporting screenshots or relevant execution evidence.

Defects are monitored throughout the testing process, with retesting performed after fixes are made available.

---

## 7. Test Data Strategy

Test data is prepared to validate different application scenarios while avoiding exposure of sensitive information.

The strategy includes:

- Using sample inputs for valid and invalid ZIP code testing.
- Preparing positive and negative test scenarios.
- Using authorized test accounts when authentication testing requires them.
- Avoiding real member personal information (PII) and protected health information (PHI) in project documentation.
- Excluding passwords, production credentials, and other sensitive information from the public repository.

---

## 8. Tools & Technologies

| Category | Tools & Technologies |
| :--- | :--- |
| **Programming Language** | Java 17 |
| **Browser Automation** | Selenium WebDriver 4.27.0 |
| **Test Framework** | TestNG 7.10.2 |
| **Build Management** | Apache Maven |
| **Development Environment** | IntelliJ IDEA |
| **Defect Tracking** | Jira Software |
| **Test Case Management** | Zephyr |
| **Database Verification** | Oracle SQL Developer |
| **Version Control** | Git, GitHub |
| **CI/CD** | GitHub Actions |

---

## 9. Quality Assurance Approach

The overall QA approach emphasizes organized test documentation, consistent execution, defect tracking, and repeatable automation.

The strategy supports:

- Early identification of functional issues.
- Consistent manual test execution.
- Reusable automated test scripts.
- Organized test case documentation.
- Traceability between testing scenarios and test cases.
- Regression verification following application changes.

The goal is to support reliable application functionality through structured manual and automated testing.
