# Selenium Test Execution Results

The Selenium suite runs against local HTML pages in `src/test/resources/fixtures`. It does not connect to Humana systems or use real member information.

## Recording a Test Run

After a completed local or GitHub Actions run, record:

- Execution date
- Run type (local or GitHub Actions)
- Workflow run link, if applicable
- Total tests, passed, failed, skipped, and errors
- Build result
- Relevant failure details

Use the Maven Surefire reports under `target/surefire-reports` to confirm local test counts and outcomes. For GitHub Actions, use the summary and logs from the specific completed workflow run.

Only add execution counts and a run link after checking the corresponding report. Keep results from separate runs clearly identified.
