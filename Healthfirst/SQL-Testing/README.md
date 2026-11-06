# SQL Testing and Data Validation

This section shows how SQL can support QA checks for member records, eligibility, coverage dates, and information returned by an application or API.

## What the SQL examples cover

| Area | Validation |
| --- | --- |
| Member data | Record lookup and status |
| Eligibility | Status, plan association, and coverage dates |
| Date quality | Invalid ranges and overlapping periods |
| Duplicate checks | Repeated eligibility record IDs |
| Required data | Missing fields |
| Relationships | Missing member references and joins |
| Data totals | Eligibility counts by status |
| Point-in-time checks | Coverage dates for a supplied test date |

## Queries

[View all 10 SQL validation examples](SQL-QUERIES.md).

Each query includes its purpose and expected interpretation. The examples use Oracle-compatible syntax, bind variables, and read-only `SELECT` statements. They cover `JOIN`, `LEFT JOIN`, `GROUP BY`, `HAVING`, `COUNT`, null checks, and date comparisons.

## How these checks fit into QA

SQL results can be compared with expected test data and values shown by member-facing workflows or returned by an API. Unexpected results should be reviewed against the requirements before a defect is reported.

The sample tables and IDs are synthetic and generic. They do not describe Healthfirst's private database schema or claim execution against internal systems.
