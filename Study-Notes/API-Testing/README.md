API Testing Notes

REST API Basics
An API allows systems to communicate. REST APIs commonly use HTTP methods such as GET, POST, PUT, PATCH, and DELETE.

Common HTTP Status Codes
- 200: request succeeded.
- 201: resource created.
- 204: request succeeded with no response body.
- 400: request is invalid.
- 401: authentication is required or invalid.
- 403: access is forbidden.
- 404: resource was not found.
- 409: request conflicts with the current resource state.
- 500: unexpected server error.

What to Validate
- Correct method and endpoint.
- Status code.
- Response time where a requirement exists.
- JSON structure and data types.
- Required fields and null values.
- Business rules and data consistency.
- Error handling for invalid requests.
- Authentication and authorization behavior.

Postman
Use environments for base URLs and variables for test data. Keep tokens and credentials out of exported collections. Use tests to assert the documented response contract rather than simply checking that a request returned 200.