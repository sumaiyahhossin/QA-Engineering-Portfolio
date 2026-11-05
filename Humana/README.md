# Humana QA Project: Healthcare Plan Browsing & Member-Facing Workflows

**Company:** Humana  
**Role:** Junior QA Analyst  
**Project Focus:** Healthcare plan browsing and member-facing application workflows  
**Methodology:** Agile / Scrum  
**Testing Areas:** Manual testing, Selenium automation, functional testing, and SQL validation

---

## 1. Project Overview

This section summarizes QA work related to healthcare plan browsing and member-facing application workflows.

My work included reviewing application behavior, preparing and executing manual test cases, writing Selenium WebDriver tests, documenting defects, and using SQL to support data verification where authorized access was available.

The manual test suite covers plan browsing, member coverage scenarios, enrollment form validation, navigation and security checks, and selected QA workflow checks. The public automation examples focus on a smaller set of browser workflows.

The public portfolio contains selected documentation and generalized examples. It does not reproduce internal application code, private environments, or confidential employer systems.

### Testing Scope

- **Plan Browsing:** Checked plan finder pages, plan listings, and plan detail information.
- **ZIP Code Search:** Tested ZIP code entry, search submission, and results behavior.
- **Member Coverage Scenarios:** Documented checks for coverage status, coverage dates, member-to-plan relationships, and related page behavior using synthetic test data.
- **Enrollment Form Validation:** Documented form validation and review scenarios using test data; this does not represent live enrollment processing.
- **Account Sign-In:** Tested sign-in page behavior and form validation using authorized test accounts where applicable.
- **Navigation & Security:** Documented navigation, session, and input validation scenarios.
- **Database Validation:** Used SQL to review test records, coverage dates, and relationships between related records where authorized access was available.

Actual eligibility determinations, live enrollment transactions, and access to real member records are outside the public portfolio demonstration.

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
| Defect Management | Defect report template and a generalized example |
| Selenium Automation | Four Java TestNG test classes, Maven configuration, and TestNG suite |
| SQL Testing | Generalized SQL examples using synthetic test data |
| CI/CD | GitHub Actions workflow for automated test execution |

---

## 4. QA Approach

### Manual Testing

- Reviewed application workflows and expected behavior.
- Prepared and organized detailed test cases.
- Covered positive, negative, and boundary scenarios.
- Checked plan browsing, member coverage, form validation, and navigation workflows.
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
- Internal hostnames, private routes, API endpoints, database connection details, and confidential infrastructure information are not published.
- SQL examples use generalized table names and synthetic test data.
- Employer experience is summarized in my own words; public code and examples are sanitized for portfolio use.
- The public automation examples do not connect to private member records or perform live enrollment or eligibility processing.

---

## 6. Skills Demonstrated

- Manual test design and execution
- Functional, negative, and regression testing
- Java and Selenium WebDriver
- TestNG annotations and assertions
- Maven project configuration
- SQL data validation
- Defect documentation and test tracking
- GitHub Actions workflow configuration
