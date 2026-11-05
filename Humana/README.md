# Humana QA Project: Healthcare Plan Browsing & Public Account Access

**Company:** Humana  
**Role:** Junior QA Analyst  
**Project Focus:** Healthcare plan browsing and public account access  
**Methodology:** Agile / Scrum  
**Testing Areas:** Manual testing, Selenium automation, functional testing, and SQL validation

---

## 1. Project Overview

This section summarizes QA work related to healthcare plan browsing and public account access workflows.

My work included reviewing application behavior, preparing and executing manual test cases, writing Selenium WebDriver tests, documenting defects, and using SQL to support data verification where authorized access was available.

The public portfolio contains selected documentation and generalized examples. It does not reproduce internal application code, private environments, or confidential employer systems.

### Testing Scope

- **Plan Browsing:** Checked public-facing plan finder pages, plan listings, and plan detail information.
- **ZIP Code Search:** Tested ZIP code entry, search submission, and the resulting page behavior.
- **Account Sign-In:** Tested public sign-in page loading and form validation using authorized test accounts where applicable.
- **Negative Testing:** Checked blank fields, invalid input, and validation messages.
- **Navigation:** Checked movement between plan search and plan detail pages.
- **Database Validation:** Used SQL to review test records, coverage dates, and relationships between related records where authorized access was available.

Public plan browsing is separate from private member eligibility decisions, enrollment processing, and access to member records.

---

## 2. Tools & Technologies

| Category | Tools |
| :--- | :--- |
| Programming Language | Java 17 |
| Browser Automation | Selenium WebDriver 4.27.0 |
| Test Runner | TestNG 7.10.2 |
| Build Tool | Apache Maven |
| Database Tool | Oracle SQL Developer |
| Defect Tracking | Jira |
| Test Management | Zephyr |
| CI/CD | GitHub Actions |
| Browser | Chrome / Headless Chrome |
| IDE | IntelliJ IDEA |
| Version Control & Documentation | Git, GitHub, Markdown |

---

## 3. Portfolio Contents

| Section | Included Artifacts |
| :--- | :--- |
| Project Documentation | Project overview, test plan, test strategy, test environment, and test scenarios |
| Manual Testing | 50 manual test cases, Excel workbook, and execution tracking |
| Defect Management | Defect report template and an anonymized example |
| Selenium Automation | Four Java TestNG test classes, Maven configuration, and TestNG suite |
| SQL Testing | Generalized SQL examples using synthetic test data |
| CI/CD | GitHub Actions workflow for automated test execution |

---

## 4. QA Approach

### Manual Testing

- Reviewed application workflows and expected behavior.
- Prepared and organized functional test cases.
- Covered positive, negative, and boundary scenarios.
- Checked page behavior, form validation, search results, and navigation.
- Recorded test outcomes and documented issues for follow-up.

### Selenium Automation

- Wrote Java Selenium WebDriver tests for selected browser workflows.
- Used TestNG annotations and assertions to organize execution.
- Used explicit waits to handle page elements and dynamic behavior.
- Managed dependencies and test execution with Maven.
- Configured a GitHub Actions workflow to run the suite.

The current public test code keeps its locators and browser interactions in the individual test classes; it does not currently use a separate Page Object Model layer.

### SQL Validation

- Used SELECT queries to review member and coverage test records.
- Checked coverage status and date ranges.
- Queried for possible duplicate active coverage records.
- Used joins to review relationships between related records.

The SQL files in this repository use generalized table names and synthetic identifiers. They are examples for demonstrating query structure and are not internal database definitions.

---

## 5. Privacy & Public Portfolio Notes

- No production credentials, real member information, or protected health information (PHI) are included.
- Internal hostnames, private API routes, database connection details, and confidential infrastructure information are not published.
- SQL examples use generalized table names and synthetic test data.
- Employer experience is summarized in my own words; public code and examples are sanitized for portfolio use.
- Test execution status is reported separately from project documentation and is not described as passing unless the corresponding report confirms it.

---

## 6. Skills Demonstrated

- Manual test design and execution
- Functional, negative, and regression testing
- Java and Selenium WebDriver
- TestNG annotations and assertions
- Maven dependency and build configuration
- SQL data validation
- Defect documentation and test tracking
- GitHub Actions workflow configuration
