# Selenium Test Execution Results

**Project Focus:** Healthcare plan browsing and public account access  
**Framework:** Java 17, Selenium WebDriver 4.27.0, TestNG 7.10.2, Maven  
**CI Workflow:** `.github/workflows/humana-selenium.yml`

---

## 1. Latest GitHub Actions Result

The latest completed workflow run reviewed for this report was **Run #37**, completed on **November 5, 2026**.

<badge-placeholder />

| Metric | Result |
| :--- | :--- |
| Workflow | Humana Selenium Tests |
| Run | #37 |
| Overall status | Failed |
| Tests run | 9 |
| Failures | 4 |
| Errors | 0 |
| Skipped | 1 |

[View GitHub Actions Run #37](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/runs/42089273646)

## 2. Failures Observed in Run #37

| Test | Observed result |
| :--- | :--- |
| Blank sign-in submission | Expected required-field validation was not detected |
| Invalid sign-in | Expected error message was not found |
| ZIP code entry | The input value did not match the expected ZIP code |
| Plan search results | Expected results heading was not found before the wait timed out |

These results describe what the automated run reported. They do not, by themselves, establish whether the cause is an application defect, a changed public page, test data, or an automation issue. Each failure needs investigation before a defect is assigned.

## 3. Execution Review

When reviewing a run, check:

- Maven build result and TestNG summary.
- Failed test names and assertion messages.
- Browser version and driver initialization.
- Element locators and page changes.
- Test data and any environment-dependent behavior.
- Whether the test was skipped because required configuration was unavailable.

## 4. Status Definitions

| Status | Meaning |
| :--- | :--- |
| **Passed** | Test completed and all applicable assertions passed. |
| **Failed** | An assertion or execution step did not meet the expected result. |
| **Skipped** | TestNG did not execute the test method. |
| **Blocked** | The test could not proceed because of an environment or dependency issue. |
| **Not Run** | No execution has been recorded for the test. |

## 5. Reporting Notes

Execution status is updated from the actual GitHub Actions and TestNG reports. A passing result should only be recorded when the corresponding run confirms that the tests completed successfully.

This report is a snapshot of the latest run reviewed, not a claim that the suite is currently passing.
