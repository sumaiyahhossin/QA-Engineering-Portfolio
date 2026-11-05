# Test Environment Notes

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

Java 17, Selenium WebDriver, TestNG, Maven, Chrome, IntelliJ IDEA, Oracle SQL Developer, Jira, Zephyr, Git, GitHub, and GitHub Actions.

## Test Data

For actual testing, use only accounts and records approved for the environment. The public SQL examples and local browser pages in this repository use synthetic values, including test member IDs and ZIP codes. No live member information or employer credentials are included.

## Running the Public Selenium Tests

The Selenium tests in this repository run against the HTML pages under Selenium-Automation/src/test/resources/fixtures. They don't need a Humana login or access to an employer environment.

From the Selenium-Automation folder, run:

    mvn clean test

The GitHub Actions workflow runs the same Maven command on pushes and pull requests that change the Selenium project.
