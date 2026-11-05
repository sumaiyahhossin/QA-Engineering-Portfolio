# Functional Test Scenarios

**Project:** Healthcare plan browsing and member workflows  
**Role:** Junior QA Analyst

This document lists the main workflows covered by the manual test cases and selected Selenium checks.

## Scenario List

| Scenario ID | Area | Scenario | Coverage |
| --- | --- | --- | --- |
| TS-BROWSE-001 | Plan Search | Plan search page loads | Manual |
| TS-BROWSE-002 | Plan Search | ZIP code entry and validation | Manual / Automated |
| TS-BROWSE-003 | Plan Search | Submit a plan search | Manual / Automated |
| TS-BROWSE-004 | Plan Search | Review search results | Manual / Automated |
| TS-BROWSE-005 | Plan Details | Open plan details from results | Manual / Automated |
| TS-NAV-006 | Sign-In | Sign-in page loads | Manual / Automated |
| TS-NAV-007 | Sign-In | Invalid credentials show an error | Manual / Automated |
| TS-NAV-008 | Sign-In | Blank fields are validated | Manual / Automated |
| TS-NAV-009 | Sign-In | Enter valid-format test values | Manual |
| TS-SANITY-010 | Regression | Recheck key workflows after a change | Manual / Automated |

## What to Check

### Plan Search
- Search page and ZIP field are displayed.
- Valid and invalid ZIP values are handled correctly.
- Search can be submitted.
- Results match the submitted ZIP code.
- A useful message appears when no plans are available.

### Plan Details
- A plan can be opened from the results.
- The details page displays the expected plan information.
- Navigation works between the results and details.

### Sign-In
- Sign-in page and fields are displayed.
- Invalid values show the expected error.
- Empty required fields are validated.
- Valid-format test values can be entered and submitted.

## Test Data and Execution

The manual test cases and the Humana_Manual_Test_Cases.xlsx workbook contain the detailed steps and expected results. The Selenium checks in this repository run against local HTML fixtures with synthetic values.
