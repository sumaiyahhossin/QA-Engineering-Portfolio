# Manual Testing

This section brings together manual QA documentation for member-facing healthcare workflows, eligibility validation, health plan browsing, and defect tracking. The public portfolio materials use generalized scenarios and synthetic data.

## Files

- **Excel workbook:** The uploaded public Healthfirst manual QA workbook contains the broader test case and execution records, defect tracking, regression coverage, requirements traceability, and test-cycle information. It is a sanitized portfolio version, not an internal company export.
- [Manual test cases](TEST_CASES.md): Detailed workbook-aligned tables for all 50 test cases, including steps, expected and recorded actual results, statuses, dates, environments, and defect references.
- [Test execution results](TEST_EXECUTION_RESULTS.md): A 50-row summary of the recorded manual execution results: 48 Passed and 2 Failed, including dates, environments, and defect references.
- [Defect reports](Defect-Reports/README.md): Defect documentation guidance and a [reusable defect report template](Defect-Reports/DEFECT-REPORT-TEMPLATE.md).

## How the materials fit together

The Excel workbook demonstrates broader manual QA documentation. The detailed Markdown test cases and execution-results summary reflect the same 50 recorded test cases. The results are transcribed from the portfolio workbook and have not been independently rerun against employer systems. Where specific observed behavior was not recorded, the original general wording is retained rather than inventing details.

All public examples should avoid member information, credentials, private system addresses, and confidential employer records.

## Execution evidence and review notes

The 48 Passed and 2 Failed statuses are recorded in the public workbook; they are not independently verified test runs. Some Passed entries do not contain a separate observation or screenshot. The two failed cases are linked to the corresponding defect records, which describe the observed behavior.

Some workbook entries contain notes asking for confirmation of historical execution dates or their original source associations. Those notes are retained as open verification items; they should not be presented as confirmed audit evidence. Build/release identifiers are not required for this public portfolio.
