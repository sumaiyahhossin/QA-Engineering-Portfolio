# Selenium Test Results

**Workflow:** Humana Selenium Tests  
**Run:** [GitHub Actions #50](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/runs/42093938034)  
**Date:** November 5, 2026

## Latest Run

| Result | Count |
| --- | ---: |
| Tests run | 9 |
| Passed | 9 |
| Failed | 0 |
| Errors | 0 |
| Skipped | 0 |

**Build result:** Success

The workflow completed successfully using the local HTML pages in src/test/resources/fixtures. The tests covered sign-in, invalid sign-in, blank-field validation, ZIP code search, results display, and plan details.

## Notes

The run log includes Selenium warnings that its CDP support doesn't match the Chrome version installed on the GitHub runner. The tests don't use Chrome DevTools features, and the warning did not affect this run.

For the next run, check the Actions summary and Maven report under target/surefire-reports. Update this page only when a new run finishes.
