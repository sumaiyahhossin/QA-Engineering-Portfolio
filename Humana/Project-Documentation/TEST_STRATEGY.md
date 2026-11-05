# Quality Assurance Test Strategy

**Project Focus:** Healthcare plan browsing and public account access  
**Role:** Junior QA Analyst  
**Methodology:** Agile / Scrum

---

## 1. Testing Objectives

The objective of this strategy is to verify key healthcare application workflows, identify defects, and support reliable application behavior.

Testing objectives include:

- Verify plan browsing and search functionality.
- Validate ZIP code input, search results, and plan information.
- Check plan details and page navigation.
- Test public sign-in behavior and form validation.
- Document defects with clear reproduction steps.
- Perform regression checks after relevant changes.
- Use automation to support repeatable browser testing.

---

## 2. Testing Levels

| Testing Level | Scope |
| :--- | :--- |
| **Functional Testing** | Verify individual features against expected behavior. |
| **Integration Testing** | Check interactions between related application components where applicable. |
| **System Testing** | Validate complete user workflows within the available test scope. |
| **Regression Testing** | Recheck existing functionality after changes. |
| **Smoke Testing** | Check critical functionality after an update or deployment. |

---

## 3. Testing Types

| Testing Type | Description |
| :--- | :--- |
| **Positive Testing** | Verify workflows using valid inputs. |
| **Negative Testing** | Check behavior when invalid or unexpected inputs are submitted. |
| **Boundary Testing** | Test input limits, required fields, and edge cases. |
| **UI Testing** | Verify page elements, form behavior, navigation, and displayed information. |
| **Cross-Browser Testing** | Check behavior across supported browsers where applicable. |
| **Functional Testing** | Confirm features behave according to documented expectations. |

---

## 4. Manual Testing Strategy

Manual testing activities include:

- Reviewing requirements and application workflows.
- Identifying positive, negative, and boundary scenarios.
- Preparing and maintaining test cases.
- Using appropriate test data.
- Executing test cases and recording actual results.
- Comparing actual results with expected results.
- Reporting defects with clear steps and evidence.
- Retesting fixes and performing regression checks.

Manual test cases are documented in the project files and Excel workbook.

---

## 5. Automation Testing Strategy

Automation focuses on repeatable browser workflows using Java, Selenium WebDriver, and TestNG.

Activities include:

- Initializing browser sessions with Selenium WebDriver.
- Locating and interacting with page elements.
- Using TestNG annotations and assertions.
- Applying explicit waits for page synchronization.
- Organizing tests in a TestNG XML suite.
- Managing dependencies and builds with Maven.
- Reviewing automated execution results through Maven and GitHub Actions.

The current public implementation keeps locators and browser interactions in the individual test classes. A separate Page Object Model layer is not currently implemented.

---

## 6. Defect Management

Defects should be documented with:

- Summary and affected functionality.
- Environment and relevant test data.
- Preconditions and steps to reproduce.
- Expected and actual results.
- Severity and priority, based on impact.
- Supporting evidence where available.
- Status and retest outcome.

A failed assertion or timeout should be investigated before it is classified as an application defect.

---

## 7. Test Data & Privacy

- Use approved test data and authorized test accounts where required.
- Use synthetic identifiers in public examples.
- Do not include real member personal information (PII), protected health information (PHI), passwords, or production credentials.
- Keep internal environment details and confidential implementation information out of the public repository.

---

## 8. Tools & Technologies

| Category | Tools |
| :--- | :--- |
| Programming Language | Java 17 |
| Browser Automation | Selenium WebDriver 4.27.0 |
| Test Framework | TestNG 7.10.2 |
| Build Management | Apache Maven |
| Development Environment | IntelliJ IDEA |
| Defect Tracking | Jira |
| Test Case Management | Zephyr |
| Database Verification | Oracle SQL Developer |
| Version Control | Git, GitHub |
| CI/CD | GitHub Actions |

---

## 9. Quality Assurance Approach

The QA approach emphasizes clear test documentation, consistent execution, defect investigation, and repeatable automation.

The goal is to identify issues early, maintain traceability between scenarios and test cases, and verify relevant functionality after changes.
