# Selenium Automation Suite

**Project Focus:** Healthcare plan browsing and member-facing sign-in workflows  
**Language:** Java 17  
**Tools:** Selenium WebDriver 4.27.0, TestNG 7.10.2, Maven, Chrome, GitHub Actions

---

## 1. Overview

This automation suite demonstrates browser-testing workflows relevant to the healthcare QA work documented in the Humana experience section: sign-in, required-field validation, plan search, and plan-details navigation.

The Java tests use TestNG annotations and assertions. Shared browser setup and cleanup are handled in `TestBase.java`; each test class contains the workflow-specific locators and checks.

The public repository does not connect to Humana systems or contain internal application code, private environments, credentials, or member data. The browser tests run against local HTML fixtures stored in `src/test/resources/fixtures`, so execution is repeatable and does not send automated traffic to a live healthcare website.

## 2. Test Classes

| Test Class | Coverage |
| :--- | :--- |
| `Test01_LoginTest.java` | Sign-in page loading and accepted test credentials |
| `Test02_InvalidLoginTest.java` | Invalid sign-in input and blank-field validation |
| `Test03_PlanSearchTest.java` | Plan search page, ZIP code input, and results |
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

The Maven Surefire configuration loads the TestNG suite from `testng.xml`. Chrome is required. No external test account, employer URL, or secret is needed.

## 5. Reviewing Results

After execution, review the Maven output and TestNG / Surefire reports under `target/surefire-reports`. Investigate failed assertions before deciding whether the issue is in the test, test data, browser behavior, or application under test.
