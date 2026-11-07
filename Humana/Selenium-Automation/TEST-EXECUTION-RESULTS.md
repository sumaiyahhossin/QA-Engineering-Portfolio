# Selenium Test Execution Results

The [Humana Selenium GitHub Actions workflow](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/workflows/humana-selenium.yml) runs the Java 17 and TestNG suite in headless Chrome against local HTML fixtures with synthetic test data.

## Verified execution

[GitHub Actions run #56](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/runs/42131063764) completed successfully with **9 tests passed, 0 failed, 0 errors, and 0 skipped**.

| Test class | Coverage | Tests |
| --- | --- | ---: |
| `Test01_LoginTest` | Sign-in page and valid credentials | 2 |
| `Test02_InvalidLoginTest` | Invalid credentials and required fields | 2 |
| `Test03_PlanSearchTest` | Page load, ZIP entry, search submission, and results | 4 |
| `Test04_PlanDetailsTest` | Plan details opened from search results | 1 |
| **Total** | | **9** |

Local Maven runs write detailed results to `target/surefire-reports/`.
