# Selenium Automation Suite

**Project Focus:** Healthcare plan browsing and public account access  
**Language:** Java 17  
**Tools:** Selenium WebDriver 4.27.0, TestNG 7.10.2, Maven, Chrome, GitHub Actions

---

## 1. Overview

This folder contains Java Selenium WebDriver tests for selected browser workflows, including public account sign-in, invalid sign-in input, plan search, and plan details.

The test classes use TestNG annotations and assertions. Browser setup, waits, and element interactions are currently defined in the individual test classes. A separate Page Object Model layer is not part of the current implementation.

The code is a sanitized portfolio example. It does not contain internal employer application code, private test environments, credentials, or member data.

## 2. Test Classes

| Test Class | Coverage |
| :--- | :--- |
| `Test01_LoginTest.java` | Sign-in page loading and optional test-account flow |
| `Test02_InvalidLoginTest.java` | Invalid sign-in input and blank-field validation |
| `Test03_PlanSearchTest.java` | Plan finder page, ZIP code input, and search behavior |
| `Test04_PlanDetailsTest.java` | Plan details navigation and displayed information |

## 3. Tools & Configuration

| Item | Version / Configuration |
| :--- | :--- |
| Java | 17 |
| Selenium WebDriver | 4.27.0 |
| TestNG | 7.10.2 |
| Maven | Project build and dependency management |
| Browser | Chrome / Headless Chrome |
| Test Suite | `testng.xml` |
| CI | GitHub Actions |

## 4. Running the Tests

From this directory, run:

```bash
mvn clean test
```

The Maven Surefire configuration loads the TestNG suite from `testng.xml`.

Before running tests, review the test data and target URLs in the source files. Only run browser automation against systems you are authorized to test. Do not add private employer URLs, credentials, or member information to the public repository.

## 5. Reviewing Results

After execution:

1. Review the Maven output.
2. Check the TestNG / Surefire reports under `target/surefire-reports`.
3. Review failed assertions and browser exceptions.
4. Confirm whether a failure is caused by the test, test data, browser behavior, or the target application before classifying it as an application defect.

The current CI status is documented separately in [Test Execution Results](TEST-EXECUTION-RESULTS.md).
