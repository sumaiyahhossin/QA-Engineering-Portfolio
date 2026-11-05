# QA Test Plan

**Project Focus:** Healthcare plan browsing and member-facing workflows  
**Role:** Junior QA Analyst  
**Methodology:** Agile / Scrum  
**Document Version:** 1.0

---

## 1. Objective & Scope

The purpose of this Test Plan is to define the testing approach, scope, objectives, and execution process for validating healthcare plan browsing and selected member-facing workflows.

The documented scope includes plan search, plan details, member coverage scenarios, form validation, navigation, and sign-in behavior. Testing activities include manual test case development, functional verification, regression testing, selected automated browser testing, defect documentation, and database validation where applicable.

The goal is to identify defects, verify expected application behavior, and support reliable application functionality.

---

## 2. In-Scope vs. Out-of-Scope Coverage

### In-Scope Functional Modules

- Healthcare plan browsing and search functionality.
- ZIP code input and validation.
- Plan search submission and results display.
- Healthcare plan listings and information.
- Plan details and coverage information.
- Member coverage display and related validation scenarios using synthetic test data.
- Enrollment form field validation and review scenarios using test data.
- Navigation between application pages.
- Sign-in functionality and form validation.
- Automated browser testing of selected workflows.

### Out-of-Scope Activities

- Actual Medicare eligibility determinations.
- Live enrollment transactions or submission of real applications.
- Insurance claim processing.
- Financial transactions and premium payments.
- Access to real member personal information or protected health information (PHI).
- Production database modifications.
- Live member account provisioning.

---

## 3. Testing Types & Methodologies

| Testing Type | Description | Execution Method |
| :--- | :--- | :--- |
| **Functional Testing** | Verify application features against expected behavior | Manual & Automated |
| **Smoke Testing** | Verify critical functionality after application updates | Manual |
| **Regression Testing** | Recheck existing functionality after changes | Manual & Automated |
| **Integration Testing** | Validate interactions between application components where applicable | Manual |
| **Negative Testing** | Verify behavior with invalid or unexpected inputs | Manual & Automated |
| **Boundary Testing** | Test input limits and validation conditions | Manual |
| **UI Testing** | Verify page layouts, elements, and navigation | Manual |
| **Database Testing** | Validate relevant data using SQL queries where authorized | SQL |

---

## 4. Test Environment & Tools

Testing activities are organized around authorized QA or staging environments used for application verification. Public portfolio examples use generalized environment descriptions and synthetic test data.

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
| **Git / GitHub** | Version control |
| **GitHub Actions** | Workflow execution |

---

## 5. Test Execution Strategy & Workflow

1. **Requirements Review:** Review requirements and understand expected functionality.
2. **Test Case Design:** Create manual scenarios with steps, expected results, and test data.
3. **Test Data Preparation:** Prepare appropriate test inputs for valid, invalid, and boundary scenarios.
4. **Manual Test Execution:** Execute test cases and document actual results.
5. **Automation Development:** Create Selenium WebDriver scripts using Java and TestNG for selected browser workflows.
6. **Defect Reporting:** Document identified issues with reproduction steps, expected results, actual results, and supporting evidence.
7. **Retesting:** Recheck application functionality after fixes are made available.
8. **Regression Testing:** Execute relevant scenarios to verify existing functionality after changes.

---

## 6. Entry Criteria

Testing can begin when:

- Application functionality is available in an authorized test environment.
- Requirements and expected behavior are understood.
- Manual test cases have been prepared.
- Required test data is available.
- Java and Maven configurations are set up.
- Selenium WebDriver and TestNG dependencies are configured.
- The test environment and browser are accessible.

---

## 7. Exit Criteria

Testing activities are considered complete for the planned scope when:

- Planned test cases have been executed.
- Actual results have been documented.
- Failed test cases have been investigated.
- Identified defects have been documented and tracked.
- Resolved defects have been retested where applicable.
- Relevant regression scenarios have been executed.
- Outstanding issues have been communicated to the appropriate team members.

---

## 8. Defect Management

Defects identified during testing are documented and tracked using the team's defect management process. Each report should include:

- Defect summary and description.
- Affected functionality.
- Testing environment.
- Preconditions and reproduction steps.
- Expected and actual results.
- Severity and priority.
- Supporting evidence where available.
- Current status and retest outcome.

---

## 9. QA Deliverables & Project Artifacts

| Deliverable | Description |
| :--- | :--- |
| **`PROJECT_OVERVIEW.md`** | Project background, objectives, and scope |
| **`TEST_PLAN.md`** | Testing scope, strategy, methodologies, and execution criteria |
| **`TEST_ENVIRONMENT.md`** | General test environment overview and tools |
| **`TEST_SCENARIOS.md`** | Functional test scenarios |
| **`TEST_CASES.md`** | Manual test case documentation |
| **`Humana_Manual_Test_Cases.xlsx`** | Manual test case tracking workbook |
| **Selenium Automation** | Java-based automated test scripts |
| **`pom.xml`** | Maven project configuration |
| **`testng.xml`** | TestNG suite configuration |

---

## 10. Quality Objectives

- Verify that planned application workflows behave as expected.
- Identify and document functional issues.
- Maintain organized and traceable test documentation.
- Support regression testing through repeatable automation.
- Verify application behavior across positive and negative scenarios.
- Communicate test results and outstanding issues clearly.
