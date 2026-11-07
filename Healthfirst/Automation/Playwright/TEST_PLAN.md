# Playwright Test Plan

## Objective
Check key UI behavior in an independent healthcare-plan demo using Playwright and JavaScript. This is a public portfolio example, not a Healthfirst environment.

## Scope
- Member eligibility lookup for a fictional valid ID
- Empty member ID validation
- Unknown member handling
- Filtering plans by plan type
- Selecting a plan and confirming the selection

## Test setup
Chromium in headless mode by default. The application is a local HTML fixture at `demo/index.html`. No network services, member accounts, or employer credentials are required.

## Execution
Run `npm ci`, `npx playwright install chromium`, then `npm test` from this folder. GitHub Actions runs the same suite for changes to the Playwright folder and on manual dispatch.

## Entry and exit criteria
Entry: dependencies installed and local fixture available. Exit: all five tests pass. Playwright retains traces and screenshots for failures.

## Reporting
Results appear in the terminal and in the HTML report under `playwright-report/`.

## Data handling
All member and plan values are fictional. No production endpoints, real member information, or confidential internal documents are used.
