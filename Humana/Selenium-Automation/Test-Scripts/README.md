# Selenium Test Automation Suite

**Company:** Humana Health Insurance  
**Project Name:** Healthcare Plan Browsing and Member Coverage  
**Role:** Junior QA Analyst  
**Framework & Tech Stack:** Java 17, Selenium WebDriver 4.27.0, TestNG 7.10.2, Maven, IntelliJ IDEA  
**Target Environment:** QA / Staging Environment  
**Document Version:** 1.0

---

## 1. Automation Testing Overview & Objectives

This folder contains Java-based Selenium WebDriver automation tests developed to validate key functional workflows across healthcare plan browsing and member portal applications.

The automation suite uses TestNG for test execution and Maven for project and dependency management. The Page Object Model (POM) design pattern is used to organize page interactions and keep test logic separate from element locators.

### Core Automated Verification Focus

- **Member Authentication:** Validate login workflows, invalid credential handling, and login form validation.
- **Plan Search & Discovery:** Test ZIP code input, plan search submissions, and search results.
- **Plan Details & Benefits:** Validate navigation to plan details and the display of available coverage information.
- **Test Execution & Reporting:** Use TestNG assertions and test execution results to identify failures and support regression testing.

---

## 2. Test Scripts Execution Architecture & Matrix

| Script ID | Class File Name | Functional Area / Test Objective | Execution Type |
| :--- | :--- | :--- | :--- |
| **TS-AUTO-01** | `Test01_LoginTest.java` | Validates the member login workflow using valid test credentials | Automated |
| **TS-AUTO-02** | `Test02_InvalidLoginTest.java` | Validates application behavior when invalid or incomplete login credentials are submitted | Automated |
| **TS-AUTO-03** | `Test03_PlanSearchTest.java` | Validates healthcare plan search functionality using test ZIP code inputs | Automated |
| **TS-AUTO-04** | `Test04_PlanDetailsTest.java` | Validates navigation to plan details and the display of available plan information | Automated |

---

## 3. Automation Framework Specifications & Tools

| Parameter / Tool | Configuration |
| :--- | :--- |
| **Programming Language** | Java 17 |
| **Automation Framework** | Selenium WebDriver 4.27.0 |
| **Test Runner** | TestNG 7.10.2 |
| **Build & Dependency Management** | Apache Maven |
| **IDE** | IntelliJ IDEA |
| **Design Pattern** | Page Object Model (POM) |
| **Test Configuration** | TestNG XML suite configuration |
| **Browser Automation** | Selenium WebDriver |
| **Version Control** | Git and GitHub |
| **CI/CD** | GitHub Actions |

---

## 4. Test Execution Guidelines

The automation suite can be executed locally using Maven from the project directory.

### Prerequisites

- Java Development Kit (JDK) 17
- Apache Maven
- IntelliJ IDEA or another Java IDE
- Supported web browser
- Authorized QA test environment access

### Execution Command

```bash
mvn clean test
```

The Maven test command cleans the previous build output and executes the configured test suite.

TestNG suite execution can also be configured through the project's `testng.xml` file.

### Test Execution Workflow

1. Review the test configuration and required test data.
2. Confirm that the authorized QA environment is accessible.
3. Execute the automated tests through Maven.
4. Review TestNG execution results.
5. Investigate failed test cases and report defects when applicable.
6. Rerun tests after fixes to verify the results.

---

## 5. Test Data & Security Guidelines

- Use authorized QA test accounts and synthetic test data.
- Do not store real member credentials, passwords, or protected health information (PHI) in the repository.
- Do not publish internal staging URLs, API endpoints, connection strings, or confidential environment details.
- Keep sensitive configuration and credentials outside version-controlled files.
- Use only approved test environments when executing automation scripts.

### Portfolio Notes

This repository presents the Selenium automation structure, test scenarios, and QA techniques associated with healthcare application testing. Internal environment details and sensitive test information have been excluded from this public version.
