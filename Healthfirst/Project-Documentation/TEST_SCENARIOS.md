# Functional Test Scenarios

**Project:** Member portal and healthcare workflows  
**Role:** Quality Assurance

This document summarizes the main workflows represented in the manual and automated portfolio tests.

## Scenario List

| Scenario ID | Area | Scenario | Expected Result |
| --- | --- | --- | --- |
| HF-001 | Navigation | Move between member portal sections | Requested section opens without an unexpected error |
| HF-002 | Eligibility | Submit valid eligibility test data | Expected eligibility result is displayed |
| HF-003 | Eligibility | Leave a required field blank | Appropriate validation appears |
| HF-004 | Eligibility | Enter an invalid value | Value is rejected or handled according to validation rules |
| HF-005 | Plan Search | Search with supported criteria | Results match the selected criteria |
| HF-006 | Plan Details | Open a plan from results | Selected plan information is displayed |
| HF-007 | API | Submit a valid request | Documented status and response structure are returned |
| HF-008 | API | Submit invalid or missing information | Documented validation response is returned |
| HF-009 | Data Validation | Compare displayed values with test data | Values match expected records |
| HF-010 | Regression | Recheck workflows after a change | Affected and related checks behave as expected |

## What to Check

### Eligibility and Coverage
- Valid and invalid member inputs.
- Missing required information.
- Eligibility status and coverage dates.
- Service errors and appropriate messages.

### Plan Search and Details
- ZIP code entry and validation.
- Results and no-results states.
- Plan details and comparison information.

### Forms, APIs, and Regression
- Required fields and invalid input.
- API success and error responses.
- Related workflows after fixes or updates.

## Test Data and Execution

Detailed steps, execution statuses, and defect references are kept in the Manual Testing section. The public automation examples use synthetic data and local demo applications. Exact business rules depend on the requirements for the system being tested.
