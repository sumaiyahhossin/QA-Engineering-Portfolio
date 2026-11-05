# QA Test Environment Overview

**Project Focus:** Healthcare plan browsing and public account access  
**Role:** Junior QA Analyst  
**Testing Areas:** Manual functional testing, browser automation, and SQL validation

---

## 1. Environment Overview

Testing activities covered application workflows in QA or staging environments. The environment information in this public document is intentionally general; internal hostnames, private routes, infrastructure identifiers, and connection details are not included.

The documented scope includes plan browsing, plan information display, public sign-in behavior, form validation, and selected data checks where authorized access was available.

## 2. Application Areas

| Application Area | Testing Focus |
| :--- | :--- |
| Plan Search | ZIP code entry, search submission, and results display |
| Plan Details | Plan information, benefit details, and navigation |
| Public Account Access | Sign-in page loading and form validation |
| Form Validation | Required fields, invalid input, and error messaging |
| Data Validation | Review of authorized test records using SQL examples |

## 3. Tools & Technologies

| Tool | Purpose |
| :--- | :--- |
| Java 17 | Automation programming language |
| Selenium WebDriver 4.27.0 | Browser automation |
| TestNG 7.10.2 | Test execution and assertions |
| Apache Maven | Dependency and build management |
| Chrome | Browser used for automation |
| Git / GitHub | Version control |
| GitHub Actions | Workflow automation |
| IntelliJ IDEA | Java development |
| Oracle SQL Developer | SQL query and data validation |

## 4. Test Data Approach

Test scenarios use representative inputs for positive, negative, and boundary conditions.

- Valid and invalid ZIP code formats.
- Blank and incomplete form submissions.
- Valid and invalid sign-in inputs using authorized test accounts where applicable.
- Synthetic identifiers in public SQL examples.

No real member credentials, personal information, or protected health information (PHI) are included in the public repository.

## 5. Execution Prerequisites

Before running browser automation:

1. Confirm the test target is an environment you are authorized to automate.
2. Confirm the target application and test data are available.
3. Verify Java and Maven configuration.
4. Confirm Maven dependencies resolve successfully.
5. Review the TestNG suite configuration.
6. Record the actual execution result and investigate failures.

Do not run automated tests against a public production site unless explicit authorization has been provided.

## 6. Automation & CI Notes

The Java test suite uses Selenium WebDriver, TestNG, and Maven. The current implementation keeps browser interactions and locators in the individual test classes; it does not use a separate Page Object Model layer.

The GitHub Actions workflow is configured for manual execution and requires confirmation that the target is an authorized test environment. The workflow should not be run until the test URLs have been reviewed and confirmed as appropriate for automation.

## 7. Privacy & Security

- Internal hostnames, private application routes, API endpoints, database schemas, and connection details are excluded.
- Credentials and secrets must not be committed to source control.
- Public examples use synthetic test data and generalized technical details.
- This document does not claim formal HIPAA or CMS compliance certification.
