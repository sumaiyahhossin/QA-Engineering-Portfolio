# Enterprise QA Defect Report Template

Use this template to document defects reproduced in an approved test environment. Record the actual build, environment, browser, test data, and evidence from the test run.

## Defect Details

| Field | Value |
| --- | --- |
| **Defect ID** | `DEF-HUM-YYYY-NNNN` |
| **Summary** | [Concise description of the observed failure and its impact] |
| **Application / Module** | [Application and affected module] |
| **Environment** | [QA / Staging; browser and version; operating system] |
| **Build / Page** | [Verified build number and page URL] |
| **Severity** | [Critical / High / Medium / Low, with user or business impact] |
| **Priority** | [P1 / P2 / P3 / P4, based on urgency] |
| **Reported By** | [Role or team] |
| **Date Reported** | [Actual date the defect was reported] |

## Preconditions

1. [Required environment and access]
2. [Required synthetic test data]
3. [Browser, operating system, and viewport]
4. [Any other setup needed to reproduce the issue]

## Steps to Reproduce

1. [First action]
2. [Next action]
3. [Continue with exact steps until the issue occurs]

## Expected Result

[Describe the behavior required by the acceptance criteria or documented requirement.]

## Actual Result

[Describe only what was observed. Include error messages, console output, network responses, or automation exceptions only when captured and verified.]

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

## Reporting Notes

- Use synthetic test data only and follow approved testing and data-handling procedures.
- Do not include PHI, real member details, passwords, access tokens, or confidential internal information.
- Record actual environment and build details; do not guess selectors, API endpoints, response codes, or error messages.
- Investigate environment availability, network failures, bot protection, and third-party service issues during triage before classifying an observation as an application defect.
