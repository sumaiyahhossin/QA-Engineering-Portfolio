# QA Test Plan

**Company / Project:** Humana Health Insurance  
**Project Name:** Healthcare Plan Browsing and Member Coverage  
**Role:** Junior QA Analyst  
**Methodology:** Agile / Scrum  
**Document Version:** 1.0  

---

## 1. Objective & Scope

The purpose of this Test Plan is to define the testing approach, scope, objectives, and execution process for validating healthcare plan browsing and member access functionality.

The project focuses on verifying that users can search for available health plans, review plan information, navigate coverage details, and interact with member login functionality.

Testing activities include manual test case development, functional verification, regression testing, automated browser testing, defect documentation, and database validation where applicable.

The goal is to identify defects, verify expected application behavior, and support reliable application functionality.

---

## 2. In-Scope vs. Out-of-Scope Coverage

### In-Scope Functional Modules
- Healthcare plan browsing and search functionality.
- ZIP code input and validation.
- Plan search submission and results display.
- Healthcare plan listings and information.
- Plan details and coverage information.
- Navigation between application pages.
- Member login functionality.
- Login credential validation and error handling.
- Required field and form validation.
- Automated browser testing of selected workflows.

### Out-of-Scope Modules
- Actual Medicare eligibility determinations.
- Insurance claim processing.
- Financial transactions and premium payments.
- Actual health plan enrollment submissions.
- Access to private member health information (PHI).
- Production database modifications.
- Live member account provisioning.

---

## 3. Testing Types & Methodologies

| Testing Type | Description | Execution Method |
| :--- | :--- | :--- |
| **Functional Testing** | Verify application features against expected behavior | Manual & Automated |
| **Smoke Testing** | Verify critical functionality after application updates | Manual |
| **Regression Testing** | Recheck existing functionality after changes | Manual & Automated |
| **Integration Testing** | Validate interactions between application components | Manual |
| **Negative Testing** | Verify application behavior with invalid or unexpected inputs | Manual & Automated |
| **Boundary Testing** | Test input limits and validation conditions | Manual |
| **UI Testing** | Verify page layouts, elements, and navigation | Manual |
| **Database Testing** | Validate relevant data using SQL queries where applicable | SQL / Oracle SQL Developer |

---

## 4. Test Environment & Tools

Testing activities are organized around QA and staging environments used for application verification.

| Tool / Technology | Purpose |
| :--- | :--- |
| **Java 17** | Automation programming language |
| **Selenium WebDriver 4.27.0** | Browser automation |
| **TestNG 7.10.2** | Test execution and assertions |
| **Apache Maven** | Dependency and build management |
| **IntelliJ IDEA** | Automation development |
| **Oracle SQL Developer** | Database queries and validation |
| **Jira** | Defect tracking |
| **Zephyr** | Test case management |
| **Excel** | Manual test case documentation |
| **Git / GitHub** | Version control and project management |
| **GitHub Actions** | Automated workflow execution |

---

## 5. Test Execution Strategy & Workflow

Testing follows a structured process throughout the development cycle:

1. **Requirements Review:** Review application requirements and understand expected functionality.
2. **Test Case Design:** Create manual test scenarios with test steps, expected results, and test data.
3. **Test Data Preparation:** Prepare sample inputs for valid, invalid, and boundary testing scenarios.
4. **Manual Test Execution:** Execute test cases and document actual results.
5. **Automation Development:** Create Selenium WebDriver scripts using Java and TestNG for selected application workflows.
6. **Defect Reporting:** Document identified defects with reproduction steps, expected results, actual results, and supporting evidence.
7. **Retesting:** Recheck application functionality after defects are addressed.
8. **Regression Testing:** Execute relevant test scenarios to verify that existing functionality continues to work as expected.

---

## 6. Entry Criteria

Testing can begin when the following conditions are met:

- Application functionality is available for testing.
- Requirements and expected behavior are understood.
- Manual test cases have been prepared.
- Required test data is available.
- Java and Maven configurations are set up.
- Selenium WebDriver and TestNG dependencies are configured.
- The test environment and browser are accessible.

---

## 7. Exit Criteria

Testing activities are considered complete for the planned testing scope when:

- Planned test cases have been executed.
- Actual results have been documented.
- Failed test cases have been investigated.
- Identified defects have been documented and tracked.
- Resolved defects have been retested where applicable.
- Relevant regression scenarios have been executed.
- Outstanding issues have been communicated to the appropriate team members.

---

## 8. Defect Management

Defects identified during testing are documented and tracked using Jira. Each defect report should include:

- Defect summary and description.
- Application area or affected functionality.
- Preconditions.
- Steps to reproduce.
- Expected result.
- Actual result.
- Severity and priority.
- Screenshots or supporting evidence.
- Current defect status.

Defects are reviewed and monitored throughout the testing cycle until they are resolved, retested, or otherwise dispositioned.

---

## 9. QA Deliverables & Project Artifacts

| Deliverable | Description |
| :--- | :--- |
| **`PROJECT_OVERVIEW.md`** | Project background, objectives, and testing responsibilities |
| **`TEST_PLAN.md`** | Testing scope, strategy, methodologies, and execution criteria |
| **`TEST_ENVIRONMENT.md`** | Testing environment, infrastructure, and tools |
| **`TEST_CASES.md`** | Manual test case documentation |
| **`Humana_Manual_Test_Cases.xlsx`** | Manual test case tracking workbook |
| **Selenium Automation** | Java-based automated test scripts |
| **`pom.xml`** | Maven dependencies and project configuration |
| **`testng.xml`** | TestNG suite execution configuration |

---

## 10. Quality Objectives

The overall testing objectives are to:

- Verify that critical application workflows function as expected.
- Identify functional defects before release.
- Maintain organized and traceable test documentation.
- Improve regression testing through automation.
- Verify application behavior across positive and negative scenarios.
- Support consistent communication between QA, development, and product teams.
