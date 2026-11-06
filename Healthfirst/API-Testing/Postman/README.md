# Postman API Automation

This independent healthcare API demo uses a local Node.js server and synthetic member/plan data. It does not call Healthfirst systems or contain employer endpoints.

## Run

Requires Node.js 20 or later.

```bash
npm install
npm test
```

The test command starts the local API, runs the Postman collection using Newman, prints assertions and pass/fail results, then stops the server. No credentials or external service are required.

## Coverage

Seven API requests cover eligible and unknown members, plan filtering, missing member ID, valid eligibility, and valid/invalid plan selection. The collection defines **17 automated assertions** across those seven requests (status codes and response-body values). This is a count of configured assertions, not a verified execution result.

The [collection](Healthcare_API.postman_collection.json) can also be imported into Postman. To run manually, start `node server.js` and run the collection with `baseUrl=http://127.0.0.1:3100`.

## Execution evidence

The GitHub Actions **Healthfirst Postman API Demo** workflow completed successfully on November 5, 2026. The Newman output from the successful run confirms:

| Metric | Executed | Failed |
|:--|--:|--:|
| Requests | 7 | 0 |
| Test scripts | 7 | 0 |
| Assertions | 17 | 0 |
| Iterations | 1 | 0 |

All 17 assertions passed, including checks for successful and negative-response scenarios. The reported total run duration was 141 ms. These results are from the local synthetic-data demo API in GitHub Actions, not from Healthfirst systems.

[View the GitHub Actions workflow and its runs](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/workflows/healthfirst-postman.yml).
