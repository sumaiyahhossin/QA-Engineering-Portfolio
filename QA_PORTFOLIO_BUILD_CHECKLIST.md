# QA Portfolio Build Checklist

This document tracks the files included in the portfolio and the checks that still need to be completed before public sharing.

---

## 1. Humana Portfolio — Files Present

- [x] **Project Documentation:** Project overview, test plan, test strategy, test environment, and test scenarios.
- [x] **Manual Testing:** Manual test case documentation and Excel workbook.
- [x] **Execution Tracking:** Manual execution tracking document.
- [x] **Defect Documentation:** Defect report template and generalized example.
- [x] **Selenium Automation:** Four Java TestNG test classes.
- [x] **Build Configuration:** Maven `pom.xml` and TestNG `testng.xml`.
- [x] **CI Configuration:** GitHub Actions workflow at `.github/workflows/humana-selenium.yml`.
- [x] **SQL Validation:** Generalized SQL examples using synthetic identifiers.

A file being present does not mean its contents or execution results have been independently verified.

---

## 2. Automation Status

The latest GitHub Actions run reviewed for the Selenium suite was **Run #37** on November 5, 2026.

- **Workflow result:** Failed
- **Tests run:** 9
- **Failures:** 4
- **Errors:** 0
- **Skipped:** 1

The failure details are recorded in [Selenium Test Execution Results](Humana/Selenium-Automation/TEST-EXECUTION-RESULTS.md). The failures need investigation before the suite can be described as passing.

The current Java tests keep locators and browser interactions in the individual test classes. A separate Page Object Model layer is not currently implemented or claimed.

---

## 3. Final Review Items

- [ ] Compare all 50 cases in `TEST_CASES.md` with the Excel workbook.
- [ ] Download the Excel workbook and check that column widths, wrapping, and formatting remain readable.
- [ ] Review manual execution dates, statuses, and defect references against the original records before publishing execution totals.
- [ ] Investigate the four Selenium failures and one skipped test from the latest CI run.
- [ ] Run the Selenium suite only against systems that are authorized for automated testing.
- [ ] Confirm all README links and file paths work on GitHub.
- [ ] Review screenshots, logs, and attachments for confidential or personal information.
- [ ] Confirm that public documentation does not expose internal URLs, API routes, database schemas, credentials, or member information.

---

## 4. Public Portfolio & Data Governance

- Employer experience is summarized in the portfolio; internal employer code and confidential implementation details are not reproduced.
- Public examples use generalized names and synthetic test data.
- No production credentials, real member PII/PHI, private staging URLs, internal API keys, or confidential employer assets should be published.
- Test execution results should reflect actual reports. Do not mark a test as Passed unless it was executed and the result was verified.
- A failed automation run should be described accurately and investigated before attributing the cause to the application.

---

## 5. Completion Standard

The Humana section is ready for public review when the remaining checks above have been completed, the automation status is accurately documented, and all public files have passed a confidentiality review.
