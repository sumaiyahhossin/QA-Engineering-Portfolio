# Selenium Test Automation

**Language:** Java 17  
**Automation:** Selenium WebDriver 4.27.0  
**Test Framework:** TestNG 7.10.2  
**Build Tool:** Maven

## Overview

This folder contains Java Selenium tests for selected sign-in, plan search, and plan details workflows. TestNG handles test execution and assertions, and Maven manages the project dependencies and test run.

Common browser setup and cleanup are handled in `TestBase.java`. Each test class contains the locators and steps for its workflow.

## Test Scripts

| Class | Coverage |
| --- | --- |
| `Test01_LoginTest.java` | Sign-in page and valid test credentials |
| `Test02_InvalidLoginTest.java` | Invalid sign-in and blank-field validation |
| `Test03_PlanSearchTest.java` | ZIP code entry and plan search results |
| `Test04_PlanDetailsTest.java` | Opening plan details from search results |

## Running the Tests

The public test suite runs against local HTML pages stored in `src/test/resources/fixtures`. It does not connect to Humana systems or require an employer QA account.

### Prerequisites

- Java Development Kit (JDK) 17
- Apache Maven
- Google Chrome

### Run

From the `Selenium-Automation` directory:

```bash
mvn clean test
```

Maven runs the TestNG suite configured in `testng.xml`. Test results are written to the Maven Surefire reports under `target/surefire-reports`.

## Test Data

The local pages use synthetic test values. Do not add real member information, credentials, internal URLs, or confidential employer details to the repository.
