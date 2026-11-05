# Test Plan

**Project:** Healthcare plan browsing and member workflows  
**Role:** Junior QA Analyst  
**Methodology:** Agile / Scrum

## 1. Purpose

This test plan summarizes the application areas and QA activities represented in the portfolio examples: plan search, plan details, member coverage information, sign-in, forms, and related data checks. It outlines an approach to manual testing, automation, and defect follow-up.

## 2. What Was Tested

- Plan search and ZIP code entry.
- Search submission and results.
- Plan listings, details, and coverage information.
- Member coverage status and date scenarios.
- Enrollment form fields and validation.
- Sign-in and required-field behavior.
- Page navigation and related user workflows.
- Data checks using SQL when database access was available.

## 3. Testing Types

| Type | How I Used It |
| --- | --- |
| Functional | Checked that features worked as expected. |
| Smoke | Checked key workflows after a build or update. |
| Regression | Rechecked existing features after changes. |
| Integration | Checked related parts of a workflow. |
| Negative | Tried invalid, missing, or unexpected input. |
| Boundary | Checked field limits and edge cases. |
| UI | Checked fields, messages, page content, and navigation. |
| Database | Used SQL to review test records and related data. |

## 4. Tools

Java, Selenium WebDriver, TestNG, Maven, IntelliJ IDEA, Oracle SQL Developer, Jira, Zephyr, Excel, and Git.

## 5. Test Process

1. Review the requirement and expected behavior.
2. Write test cases and identify the data needed.
3. Run the manual tests and record what happened.
4. Automate repeatable checks where it makes sense.
5. Log issues with steps, expected results, and actual results.
6. Retest fixes and run regression checks.
7. Review the results with the team.

## 6. Test Data

For actual testing, use only accounts and records approved for the environment. All names, identifiers, ZIP codes, and other values shown in this public portfolio are synthetic.

## 7. Out of Scope

The portfolio examples cover application behavior. They do not perform live enrollment submissions, process claims, make payments, or change production records.

## Portfolio Automation

The public Selenium examples use local HTML test pages and synthetic values. GitHub Actions runs this portfolio test suite; it is not listed as a Humana workplace tool.
