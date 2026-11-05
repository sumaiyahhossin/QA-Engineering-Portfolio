# Healthcare Member Portal QA Portfolio

A locally running healthcare portal built to demonstrate Cypress end-to-end and API testing against a working application.

Harbor Health is fictional. All member records, health plans, and enrollment requests use synthetic data. This project is not connected to Healthfirst or any employer system.

## What the Application Does

- Browse a member portal with Home, Find a Plan, Check Eligibility, and Enrollment sections.
- Search three synthetic health plans using ZIP codes `10001` and `10002`.
- Return no plans for ZIP code `10003` and an appropriate message for ZIP codes outside the demo service area.
- View plan premiums, deductibles, copays, prescription coverage, and compare available plans.
- Check active and inactive synthetic member records, including coverage dates.
- Submit a sample enrollment request, validate the information, and receive a confirmation number. This does not create actual coverage.
- Access the local JSON API for health checks, plan searches, plan details, eligibility, and enrollment requests.

## Technologies

- Cypress 16
- JavaScript
- Node.js built-in HTTP server
- HTML and CSS
- JSON test data and fixtures
- `cy.intercept()` for service failures and unexpected responses
- `cy.request()` for direct API testing

## Project Structure

```text
healthfirst-cypress/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── app/
│   ├── data/
│   │   ├── members.json
│   │   └── plans.json
│   ├── public/
│   │   ├── app.js
│   │   ├── index.html
│   │   └── styles.css
│   └── server.js
├── cypress/
│   ├── e2e/
│   │   ├── error-handling.cy.js
│   │   ├── healthfirst-api-workflows.cy.js
│   │   ├── member-eligibility-enrollment.cy.js
│   │   ├── member-portal-navigation.cy.js
│   │   └── plan-search-details.cy.js
│   ├── fixtures/
│   │   ├── enrollment.json
│   │   ├── members.json
│   │   └── plans.json
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
├── README.md
└── TEST_PLAN.md
```

## Requirements and Setup

Node.js 20 or newer is required.

Install dependencies:

```bash
npm ci
```

Start the application:

```bash
npm start
```

The application runs at:

http://127.0.0.1:4173

Check that the API is responding:

```bash
curl http://127.0.0.1:4173/api/health
```

Expected response:

```json
{"status":"ok"}
```

## Running Cypress Tests

Keep the application running in one terminal. Open a second terminal from the project directory.

Run the complete test suite:

```bash
npm test
```

Open Cypress interactively:

```bash
npm run cy:open
```

Run a specific test file:

```bash
npx cypress run --spec "cypress/e2e/member-eligibility-enrollment.cy.js"
```

Cypress records test videos under `cypress/videos/`. Generated videos and screenshots are excluded from Git.

## Test Coverage

The project contains five Cypress spec files, seven test suites, and 50 automated test cases.

| Test Suite | Test Cases |
|---|---:|
| Member Portal Navigation | 6 |
| Health Plan Search | 8 |
| Plan Details and Comparison | 6 |
| Member Eligibility | 8 |
| Enrollment Form | 6 |
| API Testing | 10 |
| Error Handling and Additional Scenarios | 6 |
| **Total** | **50** |

### Latest Test Results

The latest complete Cypress run finished with:

- 50 passing
- 0 failing
- 0 pending
- 0 skipped

The tests cover portal navigation, plan searches, plan details, eligibility checks, enrollment form validation, API responses, and error handling.

API tests use `cy.request()` against the local Node.js server. UI tests exercise the application's actual endpoints for normal success and validation flows. `cy.intercept()` is used for selected failure and unexpected-response scenarios.

## Continuous Integration

The project includes a GitHub Actions workflow that installs dependencies, starts the local application, checks the health endpoint, and runs the Cypress suite.

Test screenshots and videos are uploaded as artifacts when tests fail.

## Synthetic Test Data

All application data is fictional and intended for demonstration purposes. The project does not use real member information, employer systems, or production healthcare data.

The enrollment endpoint validates a sample request and returns a generated confirmation number. It does not create actual insurance coverage or store submitted personal information.