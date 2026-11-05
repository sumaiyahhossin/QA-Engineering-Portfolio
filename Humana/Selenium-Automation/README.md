# Selenium Automation Suite

**Project Name:** Healthcare Plan Browsing and Public Account Access  
**Company Ecosystem:** Humana Health Insurance  
**Role:** Junior QA Analyst  
**Framework & Tech Stack:** Java 17, Selenium WebDriver 4.27.0, TestNG 7.10.2, Maven, Headless Chrome, GitHub Actions

---

## 1. Automation Framework Overview

This project contains Java-based Selenium WebDriver automation test scripts developed to validate public account access and healthcare plan browsing workflows.

The automation framework uses the Page Object Model (POM) design pattern to organize page interactions and separate test logic from element locators. Maven manages project dependencies, while TestNG handles test execution, annotations, and suite configuration.

### Test Class Architecture

| Test Class File | Functional Scope & Objective | Target Workflow |
| :--- | :--- | :--- |
| `Test01_LoginTest.java` | Validates public account sign-in page loading and the optional test-account authentication flow | Public Account Login |
| `Test02_InvalidLoginTest.java` | Validates negative testing scenarios, including invalid credentials and blank-field validation errors | Login Validation |
| `Test03_PlanSearchTest.java` | Validates public plan finder page rendering, ZIP code input processing, search submission, and results display | Healthcare Plan Search |
| `Test04_PlanDetailsTest.java` | Validates navigation to public plan details and benefit summary screens | Plan Details |

---

## 2. Automation Framework & Tools

| Parameter | Configuration |
| :--- | :--- |
| **Programming Language** | Java 17 |
| **Automation Framework** | Selenium WebDriver 4.27.0 |
| **Test Runner** | TestNG 7.10.2 |
| **Build Tool** | Apache Maven |
| **Design Pattern** | Page Object Model (POM) |
| **Browser** | Chrome / Headless Chrome |
| **Test Configuration** | TestNG XML |
| **CI/CD** | GitHub Actions |
| **IDE** | IntelliJ IDEA |

---

## 3. Local Execution Guidelines

The test suite can be executed locally from the project root directory using Maven.

### Prerequisites

- Java Development Kit (JDK) 17
- Apache Maven
- Google Chrome
- Authorized QA test environment access
- Valid synthetic test data, where required

### Execute Test Suite

```bash
mvn clean test
```

This command cleans the previous build output and runs the tests configured in the Maven project.

### Test Execution Workflow

1. Open the project in IntelliJ IDEA.
2. Verify the Maven dependencies are available.
3. Review the test configuration in `testng.xml`.
4. Execute the test suite using Maven.
5. Review the TestNG execution results.
6. Investigate failures and rerun tests after applicable fixes.

---

## 4. Continuous Integration

GitHub Actions is used to configure automated test execution within the repository's CI/CD workflow.

The workflow supports:
- Setting up the Java environment.
- Resolving Maven dependencies.
- Running Selenium tests.
- Executing browser tests in the configured environment.
- Reviewing automated test execution results.

---

## 5. Test Data & Security

- Use authorized QA environments and synthetic test data.
- Do not include real member credentials, passwords, or protected health information (PHI).
- Exclude internal staging URLs, confidential API endpoints, and database connection details from public repository files.
- Keep sensitive configuration outside version-controlled files.

