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

Seven API requests cover eligible and unknown members, plan filtering, missing member ID, valid eligibility, and valid/invalid plan selection. Each request has status and response-body assertions.

The [collection](Healthcare_API.postman_collection.json) can also be imported into Postman. To run manually, start `node server.js` and run the collection with `baseUrl=http://127.0.0.1:3100`.

## Execution evidence

The [Healthfirst Postman API Demo workflow](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/workflows/healthfirst-postman.yml) runs the collection through Newman against the local demo API. A successful workflow was reported on November 5, 2026 (Eastern). The exact request/assertion totals have not been independently confirmed from the run logs, so no per-test pass count is claimed here. Review the linked run logs for detailed execution evidence.
