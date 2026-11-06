# Playwright UI Automation

This independent portfolio demo uses **Playwright and JavaScript** to test healthcare-style member workflows. It is not Healthfirst source code or an internal Healthfirst environment. All member IDs and plan names are fictional.

## Coverage

Five UI tests cover eligible members, required member IDs, unknown members, filtering plan types, and selecting a plan. Tests run against the local `demo/index.html` application, so no employer systems, accounts, or APIs are needed.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npx playwright install chromium
npm test
```

For a visible browser, run `npm run test:headed`. To open the HTML report after a run, use `npm run report`.

## Test Results

The JavaScript Playwright suite was verified in GitHub Actions on November 5, 2026 (Eastern): **5 passed, 0 failed** in Chromium. See [verified execution results](TEST_EXECUTION_RESULTS.md) and the [successful workflow run](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/runs/42142787083). These results apply to the tested commit; rerun the workflow after code changes. Playwright generates an HTML report and retains traces for failures. Do not commit reports that might contain sensitive information.

## Structure

- `demo/index.html`: local demo application
- `tests/member-workflows.spec.js`: Playwright UI tests
- `playwright.config.js`: browser and reporting configuration

These tests demonstrate automation techniques relevant to the QA workflows described elsewhere in this portfolio.
