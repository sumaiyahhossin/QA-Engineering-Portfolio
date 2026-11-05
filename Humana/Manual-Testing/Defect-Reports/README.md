# Enterprise QA Defect Report Template

Use this template to document defects reproduced in an approved test environment. Record the actual build, environment, browser, test data, and evidence from the test run.

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

## Enterprise QA Defect Report — Plan Finder Results Do Not Load

> **Portfolio sample — not a verified Humana incident:** This detailed scenario is included to demonstrate defect-report structure and QA terminology. The date, release, environment metadata, selectors, endpoint, response code, exception, and attachment names below have not been independently verified. Do not present them as an issue you personally reproduced or reported during your Humana employment unless you have the corresponding authorized test records and evidence.

### Defect Report: `DEF-HUM-2024-0814`

| Field | Value |
| --- | --- |
| **Defect ID** | `DEF-HUM-2024-0814` |
| **Summary** | Plan finder results fail to render and hit timeout exception following valid ZIP code (`11417`) submission |
| **Application / Module** | Humana Public Portal / Medicare Advantage Plan Comparison Wizard |
| **Environment** | QA / Staging Environment (Chrome v124.0 / macOS arm64) — illustrative metadata; verify before use |
| **Build / Page** | [Humana Medicare Advantage Plans](https://www.humana.com/medicare/medicare-advantage-plans) (Release `v2024.3.1`) — verify the page and release/build |
| **Severity** | **High (S2)** — example classification if the core user journey is blocked |
| **Priority** | **High (P2)** — example classification subject to team triage |
| **Reported By** | Junior QA Analyst |
| **Date Reported** | November 14, 2024 — illustrative date only |

### Preconditions

1. QA Staging environment is operational and accessible.
2. Synthetic test data is prepared: valid Queens, NY ZIP code (`11417`).
3. Browser viewport is configured to standard desktop resolution (`1920x1080`).

### Steps to Reproduce

1. Navigate to the Medicare Advantage Plan Comparison portal (`/medicare/medicare-advantage-plans`).
2. Verify that the **"Let us help you choose a plan"** guidance wizard header renders completely.
3. Locate the postal code input field (the supplied selectors `#ZIP code` / `input[autocomplete='postal-code']` must be validated against the actual page) and enter synthetic ZIP `11417`.
4. Click the **"Get Started"** button (the supplied selector `button[data-search-button]` must be validated against the actual page).
5. Progress to the plan selection step and select **"Medicare Advantage (Part C)"**, if this option is present in the tested flow.
6. Click the **"View Plan Match"** submit button, if present, and observe the response.

### Expected Result

The plan-matching workflow processes the request within the documented response-time threshold and navigates to the results view with the heading **"Your plan matches"**, displaying the applicable regional Medicare Advantage cards. The stated threshold of less than 3.0 seconds should be used only if supported by a documented requirement or service-level objective.

### Actual Result

**Illustrative observation — not verified:** Following submission of ZIP `11417` and the plan-match request, the results area remains in a loading state and the results container does not render.

The following technical details are examples only and must be included as actual findings only if captured during an authorized test run:

- An explicit wait (`WebDriverWait` 20s) throws a `TimeoutException`.
- DOM inspection identifies an issue involving `nc-dropdown-menu` or `plan-card-results`.
- Network inspection records an HTTP 504 Gateway Timeout for `POST /api/v2/plan-match`.

Confirm the request URL, response, DOM structure, and exception from the browser or automation evidence before attributing the behavior to the application or backend service.

### Attachments & Evidence

Example filenames only — these files are not included in this repository unless separately added:

- `ERR_SCREENSHOT_DEF0814_ZIP11417.png` — screenshot showing the results state.
- `console_network_trace.log` — DevTools console and network evidence.
- `Selenium_TimeoutException_Trace.txt` — automated stack trace, if the exception was captured.

### Lifecycle & Tracking

- **Status:** `Open / Under Investigation` — illustrative status; use the actual tracker status.
- **Assigned To:** Medicare Portal Engineering Team (Frontend / API Services) — illustrative assignment; verify the actual owner.
- **Retest Result:** `Pending Fix Deployment` — illustrative retest state; update after an actual fix and retest.

> **Note on Environmental Factors & Compliance:** Use synthetic test data only and follow the organization's approved testing and data-handling procedures. Do not include PHI, real member details, passwords, access tokens, or confidential internal information in portfolio artifacts. During triage, investigate anti-automation controls, network timeouts, external CDN latency, and environment availability before classifying an observation as an application defect.

