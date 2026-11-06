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

## Test results

No pass/fail claim is made here until the tests have been executed and verified. Playwright generates an HTML report and retains traces for failures. Do not commit reports that might contain sensitive information.

## Structure

- `demo/index.html`: local demo application
- `tests/member-workflows.spec.js`: Playwright UI tests
- `playwright.config.js`: browser and reporting configuration

These tests demonstrate automation techniques relevant to the QA workflows described elsewhere in this portfolio.
