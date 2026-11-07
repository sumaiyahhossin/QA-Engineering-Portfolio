# Playwright UI Automation

This independent portfolio demo uses **Playwright and JavaScript** to test healthcare-style member workflows. It is not Healthfirst source code or an internal Healthfirst environment. All member IDs and plan names are fictional.

## Coverage

Five UI tests cover eligible members, required member IDs, unknown members, filtering plan types, and selecting a plan. Tests run against the local `demo/index.html` application, so no employer systems, accounts, or APIs are needed.

## Run locally

Requires Node.js 20 or later.

```bash
npm ci
npx playwright install chromium
npm test
```

For a visible browser, run `npm run test:headed`. To open the HTML report after a run, use `npm run report`.

## Test Results

All five tests passed in Chromium in [GitHub Actions](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/runs/42315394263). Playwright generates an HTML report and retains traces for failures.

## Structure

- `demo/index.html`: local demo application
- `tests/member-workflows.spec.js`: Playwright UI tests
- `playwright.config.js`: browser and reporting configuration

These tests demonstrate automation techniques relevant to the QA workflows described elsewhere in this portfolio.
