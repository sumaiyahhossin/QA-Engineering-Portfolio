# API Testing & Validation

## Overview

This section covers API testing scenarios related to member eligibility, health plan search, plan comparison, enrollment, and member profile updates.

The test cases demonstrate REST API validation using positive and negative scenarios, request and response validation, authentication checks, error handling, security testing, and backend data verification.

**Tools & Technologies:** Postman, REST APIs, JSON, Oracle SQL Developer

**Testing Areas:** Functional API testing, negative testing, authentication, payload validation, response validation, data integrity, and security testing.

**Test Data:** Synthetic test data is used in public examples. No real member information or credentials are included.

**Note:** These portfolio examples are based on my QA testing experience. Endpoint paths and examples have been generalized for public sharing and should not be treated as published internal API specifications.

---

## API Test Scenarios

**Total: 30 test cases**

### 1. Member Eligibility & Authentication

| Test ID | Endpoint / Method | Description | Expected Result |
|---|---|---|---|
| API-HF-001 | `GET /api/eligibility` | Verify active coverage status and policy effective dates for a valid member. | Returns `200 OK` with an active coverage status, effective date, and assigned plan information. |
| API-HF-002 | `GET /api/eligibility` | Verify the response for an inactive or terminated policy. | Returns `200 OK` with the appropriate terminated status and historical coverage end date. |
| API-HF-003 | `GET /api/eligibility` | Verify the response when a member ID does not exist. | Returns `404 Not Found` with a structured error response. |
| API-HF-004 | `GET /api/eligibility` | Submit a request without the required Bearer token. | Returns `401 Unauthorized` without exposing protected member information. |
| API-HF-005 | `GET /api/eligibility/dependents` | Verify dependent coverage records associated with a primary subscriber. | Returns `200 OK` with the applicable dependent records and relationship information. |

### 2. Plan Catalog & Geographic Search

| Test ID | Endpoint / Method | Description | Expected Result |
|---|---|---|---|
| API-HF-006 | `GET /api/plans/search` | Search the plan catalog using a valid service area ZIP code. | Returns `200 OK` with plans available for the requested service area. |
| API-HF-007 | `GET /api/plans/search` | Verify plan category filtering, such as HMO or PPO. | Returns `200 OK` with results matching the requested plan category. |
| API-HF-008 | `GET /api/plans/search` | Search using an invalid or out-of-service ZIP code. | Returns the appropriate validation response or an empty result set, according to the API contract. |
| API-HF-009 | `GET /api/plans/search` | Submit a search request without required geographic parameters. | Returns a validation error identifying the missing required parameters. |
| API-HF-010 | `GET /api/plans/{planId}` | Retrieve benefit details for a specific health plan. | Returns `200 OK` with the applicable benefit information, including deductibles, copays, and network details. |
| API-HF-011 | `GET /api/plans/{planId}` | Request details using a malformed or non-existent plan ID. | Returns `404 Not Found` without exposing internal system or database errors. |

### 3. Plan Comparison

| Test ID | Endpoint / Method | Description | Expected Result |
|---|---|---|---|
| API-HF-012 | `POST /api/plans/compare` | Submit multiple valid plan IDs for side-by-side comparison. | Returns `200 OK` with comparison details for the submitted plans. |
| API-HF-013 | `POST /api/plans/compare` | Submit a comparison request that exceeds the maximum allowed number of plans. | Returns a validation error indicating that the comparison limit has been exceeded. |
| API-HF-014 | `POST /api/plans/compare` | Submit a comparison request containing duplicate plan IDs. | Handles duplicate IDs according to the API contract and returns the appropriate response. |
| API-HF-015 | `POST /api/plans/compare` | Include an inactive plan ID in a comparison request. | Returns a validation error identifying the plan that cannot be included in the comparison. |

### 4. Enrollment & Application Submissions

| Test ID | Endpoint / Method | Description | Expected Result |
|---|---|---|---|
| API-HF-016 | `POST /api/enrollment` | Submit a complete enrollment request with all required fields. | Returns `201 Created` with an enrollment confirmation reference and timestamp. |
| API-HF-017 | `POST /api/enrollment` | Submit an enrollment request with a required field, such as applicant email, missing. | Returns a validation error identifying the missing field. |
| API-HF-018 | `POST /api/enrollment` | Submit an invalid email format in the enrollment request. | Returns a validation error identifying the invalid email format. |
| API-HF-019 | `POST /api/enrollment` | Submit a phone number containing unsupported characters. | Returns a validation error for the invalid phone number format. |
| API-HF-020 | `POST /api/enrollment` | Submit an enrollment request using a discontinued plan. | Returns a validation error indicating that the selected plan is unavailable for enrollment. |
| API-HF-021 | `POST /api/enrollment/draft` | Save partially completed enrollment information as a draft. | Returns a successful response confirming that the draft was saved for the applicable session. |
| API-HF-022 | `DELETE /api/enrollment/draft` | Delete an existing saved enrollment draft. | Returns `204 No Content` when the draft is successfully deleted. |

### 5. Backend Persistence & Data Integrity

| Test ID | Endpoint / Method | Description | Expected Result |
|---|---|---|---|
| API-HF-023 | `POST /api/enrollment` | Verify that enrollment information is persisted after a successful API submission. | Backend data validation confirms that stored values match the submitted request. |
| API-HF-024 | `PUT /api/member/profile` | Update member contact information, such as phone number or address. | Returns `200 OK`, and a subsequent GET request reflects the updated information. |
| API-HF-025 | `PUT /api/member/profile` | Attempt to modify read-only fields, such as a system-generated member identifier. | The API rejects or ignores unauthorized changes to read-only fields according to the API contract. |

### 6. Security, Negative & Boundary Testing

| Test ID | Endpoint / Method | Description | Expected Result |
|---|---|---|---|
| API-HF-026 | `GET /api/member/profile` | Submit a request using an expired Bearer token. | Returns `401 Unauthorized` without providing access to protected member information. |
| API-HF-027 | `GET /api/eligibility` | Submit a SQL injection test string through a member ID query parameter. | The input is handled safely without unauthorized data access or exposure of database errors. |
| API-HF-028 | `GET /api/plans/search` | Submit an XSS test string through a search parameter. | The input is handled safely and is not returned as executable content. |
| API-HF-029 | `POST /api/enrollment` | Submit an empty request body. | Returns a validation error indicating that required request data is missing. |
| API-HF-030 | `GET /api/documents/summary` | Verify generation of a temporary Summary of Benefits PDF download link. | Returns a successful response with an accessible temporary link and the expected PDF content type. |

---

## API Testing Coverage

The scenarios above cover the following areas:

- **Request validation:** Required fields, invalid values, missing parameters, and malformed payloads.
- **Response validation:** HTTP status codes, response messages, JSON structure, and returned data.
- **Authentication:** Missing and expired Bearer tokens.
- **Functional testing:** Eligibility, plan search, plan comparison, enrollment, and profile updates.
- **Negative testing:** Invalid member IDs, inactive plans, missing fields, and invalid input.
- **Security testing:** SQL injection and XSS input handling.
- **Data integrity:** Verification of submitted and persisted information using backend data checks.

## Data Privacy

- Public examples use synthetic data and do not contain real member information.
- No credentials, access tokens, internal server addresses, or confidential system details are included.
- Internal employer documentation and production data are not included in this portfolio.
- These examples are intended to demonstrate QA testing knowledge and experience.
