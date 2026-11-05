# Test Environment

**Project:** Healthcare plan browsing and member workflows  
**Role:** Junior QA Analyst

## Areas Covered

| Area | What I Checked |
| --- | --- |
| Plan Search | ZIP code entry, search submission, and results |
| Plan Details | Plan information, benefits, and navigation |
| Member Coverage | Coverage status, dates, and member-to-plan relationships |
| Enrollment Forms | Required fields, input validation, and review steps |
| Sign-In | Page loading, input fields, and validation messages |
| Data Checks | Test records and related data using SQL when access was available |

## Tools

Java 17, Selenium WebDriver, TestNG, Maven, Chrome, IntelliJ IDEA, Oracle SQL Developer, Jira, Zephyr, Git, and Excel.

## Test Data

The public SQL examples and local browser pages in this repository use synthetic values, including test member IDs and ZIP codes. The portfolio does not contain live member information or employer credentials.

## Public Selenium Test Setup

The Selenium tests run against the HTML pages under `Selenium-Automation/src/test/resources/fixtures`. They do not require a Humana login or access to an employer environment.

Run the tests from the `Selenium-Automation` folder:

```bash
mvn clean test
```

The GitHub Actions workflow runs the same Maven command on pushes and pull requests that change the Selenium project. GitHub Actions is part of this public portfolio setup.
