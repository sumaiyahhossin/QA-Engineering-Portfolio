# Enterprise QA Defect Report Template

Use this template to document defects that have been reproduced in an approved test environment. Record the actual build, environment, browser, test data, and evidence from the test run. Do not enter assumed API responses, selectors, timestamps, or logs.

## Defect Report Template

| Field | Value |
| --- | --- |
| **Defect ID** | `DEF-HUM-YYYY-NNNN` |
| **Summary** | [Concise description of the observed failure and its impact] |
| **Application / Module** | [Application and affected module] |
| **Environment** | [QA / Staging; browser and version; operating system] |
| **Build / Page** | [Verified build number and page URL] |
| **Severity** | [Critical / High / Medium / Low, with user or business impact] |
| **Priority** | [P1 / P2 / P3 / P4, based on urgency] |
| **Reported By** | Junior QA Analyst |
| **Date Reported** | [Actual date the defect was reported] |

## Preconditions

1. The approved QA or staging environment is available.
2. Required test data is prepared and confirmed to be synthetic.
3. The browser and viewport are configured as recorded for the test run.
4. The tester has access to the relevant application workflow.

## Steps to Reproduce

1. Navigate to the affected application page.
2. Confirm the page and required controls load.
3. Enter the approved test data.
4. Follow the workflow that triggers the issue.
5. Record the exact action and point at which the behavior differs from expectations.

## Expected Result

Describe the behavior the application should produce according to the requirement or acceptance criteria. Include measurable response-time expectations only when they are documented requirements.

## Actual Result

Describe only what was observed during the test run. Include the exact error message, browser console output, network response, or automation exception only when captured and verified. Distinguish an application defect from an external network, CDN, environment, or anti-automation issue during triage.

## Attachments & Evidence

- [Screenshot filename and what it demonstrates]
- [Browser console or network log, if captured]
- [Automation output or stack trace, if captured]

## Lifecycle & Tracking

| Field | Value |
| --- | --- |
| **Status** | [New / Open / In Progress / Resolved / Closed / Reopened] |
| **Assigned To** | [Team or owner assigned during triage] |
| **Retest Result** | [Pending / Passed / Failed / Blocked / Not Retested] |

---

## Illustrative Portfolio Scenario — Plan Finder Results Do Not Load

> **Sample only:** The scenario below demonstrates how a defect report could be written. It is not a verified Humana production or staging incident and must not be represented as a defect observed during employment. Replace the example details with evidence from an authorized test run before treating it as an actual defect report.

| Field | Illustrative Value |
| --- | --- |
| **Defect ID** | `DEF-HUM-2024-0814` |
| **Summary** | Plan finder results fail to render after a valid ZIP code is submitted |
| **Application / Module** | Humana Public Portal / Plan Finder |
| **Environment** | Example QA / Staging setup — browser, version, OS, and build require verification |
| **Build / Page** | Public plan finder page — verify the exact URL and release/build before reporting |
| **Severity** | High (S2) — example classification if the primary plan-search workflow is blocked |
| **Priority** | High (P2) — example classification subject to team triage |
| **Reported By** | Junior QA Analyst |
| **Date Reported** | November 14, 2024 — illustrative date only |

### Preconditions

1. The authorized QA or staging environment is available.
2. A synthetic test ZIP code, such as `11417`, is prepared.
3. The browser and viewport are configured and recorded.
4. No real member information or production credentials are used.

### Steps to Reproduce

1. Navigate to the approved plan finder page.
2. Verify that the page and plan-search controls render.
3. Enter the synthetic ZIP code `11417`.
4. Submit the ZIP code using the page's search control.
5. Continue through the available plan-selection steps, if those steps are present in the tested workflow.
6. Submit the plan search and observe whether results are displayed.

### Expected Result

The application accepts the valid test ZIP code, processes the search, and displays the available plan results or a clear message explaining why results cannot be shown. Any response-time threshold should come from a documented requirement.

### Actual Result

**Example observation only — not verified:** The results area remains in a loading state and the expected results do not appear. If reproduced, capture the browser state and inspect the console and network activity to determine whether the cause is an application error, service response, environment issue, or external network failure.

Do not state that a specific `TimeoutException`, HTTP 504 response, API endpoint, or shadow-DOM component caused the issue unless the corresponding automation output or network trace was actually captured.

### Attachments & Evidence

Example evidence names for a real test run (not existing attachments):

- `ERR_SCREENSHOT_DEF0814_ZIP11417.png` — screenshot of the observed results state.
- `console_network_trace.log` — browser console and network evidence, if captured.
- `Selenium_TimeoutException_Trace.txt` — automation output, only if that exception occurred.

### Lifecycle & Tracking

- **Status:** Not Run / Pending Verification
- **Assigned To:** To be determined during triage
- **Retest Result:** Not Retested

---

## Test Data & Compliance Notes

Use synthetic test data only and follow the organization's approved testing and data-handling procedures. Do not include PHI, real member details, passwords, access tokens, or confidential internal information in portfolio artifacts. During triage, investigate environment availability, network failures, bot protection, and third-party service issues before classifying an observation as an application defect.
