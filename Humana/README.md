# Humana QA Project: Healthcare Plan Browsing & Public Account Access

**Company Ecosystem:** Humana Health Insurance  
**Project Name:** Healthcare Plan Browsing and Public Account Access  
**Role:** Junior QA Analyst  
**Methodology:** Agile / Scrum  
**Testing Focus:** Manual Testing, Automation Testing, Functional Testing, and Database Validation  
**Target Environment:** Authorized QA Staging Environment  
**Document Version:** 1.0

---

## 1. Project Overview & Scope

This project documents QA testing activities associated with healthcare plan browsing and public account access workflows.

My responsibilities included reviewing application functionality, preparing and executing manual test cases, developing Selenium WebDriver automation scripts, validating application behavior, and supporting data verification through SQL queries.

The project documentation includes manual testing artifacts, automated test scripts, SQL validation examples, and supporting QA documentation.

### Testing Scope

- **Public Plan Browsing:** Verified public-facing healthcare plan finder functionality and plan listing displays.
- **ZIP Code & Search Validation:** Tested ZIP code input, search submissions, input validation, and plan search results.
- **Account Sign-In Behavior:** Tested public sign-in page loading, form behavior, and authentication workflows using authorized test accounts where applicable.
- **Negative & Boundary Testing:** Validated required fields, blank submissions, invalid input handling, and error messaging.
- **Plan Details & Navigation:** Tested navigation between plan search results and plan detail views, including displayed benefit information.
- **Database Verification:** Used SQL queries to review member and coverage data, identify potential inconsistencies, and validate database relationships where authorized access was available.

### Scope Boundary

The public plan finder and account sign-in workflows documented here focus on application-level functionality. Public plan browsing does not establish access to private member eligibility determinations or CMS backend processing.

No real member credentials, protected health information (PHI), or confidential production data are included in this public portfolio.

---

## 2. Tools & Technologies

| Category | Tools & Technologies |
| :--- | :--- |
| **Programming Language** | Java 17 |
| **Automation Framework** | Selenium WebDriver 4.27.0 |
| **Test Runner & Assertions** | TestNG 7.10.2 |
| **Build & Dependency Management** | Apache Maven |
| **Automation Design Pattern** | Page Object Model (POM) |
| **Database Verification** | Oracle SQL Developer |
| **Defect Management** | Jira |
| **Test Management** | Zephyr |
| **CI/CD** | GitHub Actions |
| **Browser Automation** | Chrome / Headless Chrome |
| **IDE** | IntelliJ IDEA |
| **Documentation & Version Control** | Git, GitHub, and Markdown |

---

## 3. Portfolio Repository Structure

The repository is organized into separate sections to demonstrate the different areas of QA testing and documentation.

| Section | Description | Included Artifacts |
| :--- | :--- | :--- |
| **Project Documentation** | Project scope, testing approach, and environment documentation | `PROJECT_OVERVIEW.md`, `TEST_PLAN.md`, `TEST_STRATEGY.md`, `TEST_ENVIRONMENT.md` |
| **Manual Testing** | Detailed functional test cases and supporting test documentation | 50 manual test cases, Excel workbook, test case documentation |
| **Selenium Automation** | Java-based browser automation for core application workflows | `Test01_LoginTest.java` through `Test04_PlanDetailsTest.java`, Maven configuration, TestNG suite |
| **SQL Testing** | SQL-based database verification and backend QA examples | `member_coverage_queries.sql`, SQL documentation |
| **CI/CD** | Automated test execution configuration | GitHub Actions workflow |

---

## 4. QA Testing Approach

Testing activities covered both manual and automated validation.

### Manual Testing

- Reviewed functional requirements and application workflows.
- Prepared and organized detailed manual test cases.
- Performed positive, negative, and boundary testing.
- Validated page behavior, input fields, search results, and navigation.
- Documented test outcomes and potential defects.

### Automation Testing

- Developed Java-based Selenium WebDriver test scripts.
- Used TestNG annotations and assertions to organize test execution.
- Applied Page Object Model principles to organize browser interactions.
- Used Maven to manage dependencies and execute tests.
- Configured automated execution through GitHub Actions.

### Database Testing

- Used SQL queries to retrieve and review member records.
- Validated coverage information and date ranges.
- Identified potential duplicate coverage records.
- Used SQL joins to examine relationships between member and coverage data.

---

## 5. Data Governance & Security

- **Test Data:** Public portfolio examples use synthetic identifiers and illustrative test data.
- **Privacy:** No real member information, protected health information (PHI), passwords, or production credentials are included.
- **Environment Security:** Internal staging URLs, connection strings, and confidential infrastructure details are excluded from public documentation.
- **SQL Examples:** Database scripts use generalized identifiers and illustrative table names where necessary to protect internal infrastructure details.
- **Repository Security:** Sensitive configuration and credentials should remain outside version-controlled files.

---

## 6. Project Deliverables

The portfolio demonstrates experience with:

- Manual test case design and documentation.
- Functional, regression, negative, and boundary testing.
- Selenium WebDriver automation using Java.
- TestNG test execution and assertions.
- Page Object Model organization.
- SQL queries for backend data verification.
- Defect tracking and test management workflows.
- Maven project configuration and GitHub Actions integration.

