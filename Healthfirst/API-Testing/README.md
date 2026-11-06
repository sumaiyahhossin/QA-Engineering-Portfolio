# API Testing

This section covers REST API checks using Postman, with examples related to member-facing healthcare workflows.

## What I Check

- Request method and required parameters
- HTTP status code
- JSON response structure
- Required fields and data types
- Missing or invalid values
- Error responses
- Values returned for an approved test record
- Consistency between API and UI data

## Typical Postman Workflow

1. Select the correct authorized test environment.
2. Set the request method and required headers.
3. Add the approved test values.
4. Send the request.
5. Check the status code and response body.
6. Add assertions for the documented requirements.
7. Save examples only after removing private information.

See [API test cases](API-TEST-CASES.md) for the scenarios covered in this portfolio.

The examples are generic. They do not include Healthfirst endpoints, credentials, private payloads, or production data.

## Runnable Postman API Automation

The [Postman automation project](Postman/README.md) includes an importable collection, seven automated API requests with assertions, a local synthetic-data server, and a GitHub Actions workflow. Run it with `npm install` and `npm test` from the `Postman` folder. The [GitHub Actions workflow](https://github.com/sumaiyahhossin/QA-Engineering-Portfolio/actions/workflows/healthfirst-postman.yml) has a user-reported successful run; consult the logs for detailed test totals.
