# Selenium Automation

**Language:** Java 17  
**Tools:** Selenium WebDriver 4.27.0, TestNG 7.10.2, Maven, Chrome, GitHub Actions

## Overview

I used Java and Selenium WebDriver to automate selected browser checks around sign-in, form validation, plan search, and plan details.

The tests are organized into four TestNG classes. Common browser setup and cleanup are in TestBase.java; each test class contains the steps and locators for its workflow.

For this public repository, the browser tests use the local pages in src/test/resources/fixtures and synthetic test values. This lets the suite run from GitHub Actions without needing an employer login or a live site.

## Test Classes

| Class | Checks |
| --- | --- |
| Test01_LoginTest.java | Sign-in page and accepted test credentials |
| Test02_InvalidLoginTest.java | Invalid sign-in and blank-field validation |
| Test03_PlanSearchTest.java | Plan search, ZIP code entry, and results |
| Test04_PlanDetailsTest.java | Opening and checking plan details |

The Java test files are available here:

- [TestBase.java](src/test/java/com/humana/portal/tests/TestBase.java)
- [Test01_LoginTest.java](src/test/java/com/humana/portal/tests/Test01_LoginTest.java)
- [Test02_InvalidLoginTest.java](src/test/java/com/humana/portal/tests/Test02_InvalidLoginTest.java)
- [Test03_PlanSearchTest.java](src/test/java/com/humana/portal/tests/Test03_PlanSearchTest.java)
- [Test04_PlanDetailsTest.java](src/test/java/com/humana/portal/tests/Test04_PlanDetailsTest.java)

There are nine TestNG test methods in total.

## Run Locally

From this folder:

    mvn clean test

Java 17 and Chrome are required. Maven downloads the project dependencies. No external test account or environment URL is needed.

## Test Reports

After a run, Maven and TestNG reports are available under target/surefire-reports. Check the test summary and any failure details before recording the result.
