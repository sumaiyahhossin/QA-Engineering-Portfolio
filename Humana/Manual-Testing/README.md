# Manual Testing

## Manual Testing Strategy & Documentation

### Project Scope: Healthcare Plan Browsing & Public Account Access

This module contains manual QA documentation for public Medicare Advantage plan browsing, plan benefit details, form validation, cross-browser navigation, and public account sign-in error handling.

### Repository Artifacts

- **[TEST_CASES.md](./TEST_CASES.md)** — Manual test scenarios with preconditions, execution steps, test data, and expected results.
- **[TEST_EXECUTION_RESULTS.md](./TEST_EXECUTION_RESULTS.md)** — Execution tracking for documented test cases, including actual results and linked defect IDs where applicable.
- **[Humana_Manual_Test_Cases.xlsx](./Humana_Manual_Test_Cases.xlsx)** — Spreadsheet version of the manual test cases for reviewing and tracking test coverage.
- **[Defect-Reports/](./Defect-Reports/)** — Defect documentation and a reusable report template.

### Test Execution & Quality Standards

- **Environment verification:** Record the test environment, build or page version when available, browser and operating system, test data reference, and execution date.
- **Result integrity:** Mark a test **PASS**, **FAIL**, or **BLOCKED** only after checking the actual result against the expected behavior. Record **NOT RUN** or **PENDING** when execution or verification has not been completed.
- **Defect tracking:** Document reproducible failures with clear steps, expected and actual results, relevant technical findings, and evidence when available.

### Data Privacy & Scope Boundaries

- Use non-sensitive test data for public portfolio examples. Do not publish member personal information, private account details, passwords, or other confidential information.
- ZIP codes such as **11417** may be used as public search inputs where appropriate; a ZIP code alone does not establish Medicare eligibility or coverage.
- Public plan browsing and sign-in error-handling tests are limited to the publicly accessible workflows being tested. They do not verify live Medicare eligibility, member enrollment, or private coverage information.
