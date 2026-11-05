# Test Plan

## Scope

Validate the fictional Harbor Health member portal and its local JSON API. Coverage includes navigation, ZIP-based plan discovery, plan details and comparison, member eligibility, enrollment request validation, and UI/API failure handling.

This project is an independent portfolio demonstration. It is not a production health plan system and does not use real member, employer, or provider data. Enrollment requests are validated in memory and are not saved.

## Test Approach

- Cypress end-to-end tests run in a browser against the locally served application.
- API tests use `cy.request()` against the running Node.js server. Successful endpoint tests use the actual local API rather than stubs.
- `cy.intercept()` is used for targeted failure cases that cannot be reliably produced by the local service, including 500/503 responses, network failures, missing plan details, and malformed response data.
- Cypress fixtures provide expected plan and member values, along with a valid enrollment request.
- Selectors use `data-cy` attributes. Assertions cover visible user feedback, API status codes, response data, and prevented submissions.
- Tests are organized by workflow and use stable suite IDs: `NAV`, `SEARCH`, `PLAN`, `ELIG`, `API`, `ENR`, and `ERR`.

## Test Environment

- Node.js 20 or newer
- Cypress 16.2.1, installed from `package-lock.json`
- Local application at `http://127.0.0.1:4173`

Synthetic ZIP codes:

- `10001`: Three available plans
- `10002`: Two available plans
- `10003`: No available plans
- Other valid five-digit ZIP codes: Outside the demo service area

Synthetic member records:

- `MBR100001`: Active member
- `MBR100002`: Inactive member

Install dependencies from the project root:

```bash
npm ci
```

Start the application:

```bash
npm start
```

Keep the application running and open a second terminal to execute the full Cypress suite:

```bash
npm test
```

The CI workflow starts the application, checks `/api/health`, and runs Cypress.

## Scenarios and Expected Coverage

| Suite | IDs | Scenarios | Count |
|---|---|---|---:|
| Member Portal Navigation | NAV-01–NAV-06 | Page load, navigation links, section navigation and content, invalid route, working links | 6 |
| Health Plan Search | SEARCH-01–SEARCH-08 | Valid ZIP searches, result display and updates, invalid and missing ZIP, service-area rejection, no-results state | 8 |
| Plan Details and Comparison | PLAN-01–PLAN-06 | Detail view, plan names, premium, coverage, comparison, unavailable detail response | 6 |
| Member Eligibility | ELIG-01–ELIG-08 | Active, inactive, unknown and missing member, status, dates, failed service, rendered UI data | 8 |
| API Testing | API-01–API-10 | Health check, status codes, plan response structure, plan details, eligibility, ZIP-specific plans, invalid parameters, error responses | 10 |
| Enrollment Form | ENR-01–ENR-06 | Valid request, required fields, email and ZIP validation, incomplete submission, confirmation | 6 |
| Error Handling and Additional Scenarios | ERR-01–ERR-06 | Server error, unavailable API, malformed payload, validation messaging, empty state, failed enrollment | 6 |
| **Total** | | | **50** |

## Entry and Exit Criteria

### Entry Criteria

- Dependencies install successfully from the lockfile.
- The application responds successfully from `/api/health`.
- Cypress can reach the configured local `baseUrl`.

### Exit Criteria

- All 50 Cypress test cases execute and pass.
- The server returns the expected success and validation responses for the documented endpoints.
- No missing selectors, test fixtures, or application dependencies block execution.
- A failed run exits unsuccessfully, and CI preserves available Cypress screenshots and videos.

## Known Boundaries

This is a workflow and test-automation demonstration, not an eligibility determination, quoting engine, enrollment transaction service, or HIPAA-regulated application.

The member API looks up only the two bundled synthetic records. Service-area and plan data are intentionally small and static.