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

Eight API requests cover eligible and unknown members, plan filtering, missing member ID, valid eligibility, and valid and invalid plan selection. The collection includes 19 assertions, including status and error-message checks for a null plan selection payload.

The [collection](Healthcare_API.postman_collection.json) can also be imported into Postman. To run manually, start `node server.js` and run the collection with `baseUrl=http://127.0.0.1:3100`.

## Test Results

[View the GitHub Actions workflow and its runs](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/workflows/healthfirst-postman.yml).
