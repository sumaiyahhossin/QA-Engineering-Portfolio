# SQL Data Validation — Member and Eligibility Workflows

**Focus:** Member status, eligibility, coverage dates, data quality, and API-to-database checks  
**SQL style:** Oracle-compatible, read-only queries

These checks use a small illustrative data model: `sample_members` (`member_id`, `member_status`), `sample_eligibility` (`eligibility_id`, `member_id`, `plan_id`, `eligibility_status`, `effective_date`, `end_date`), and `sample_plans` (`plan_id`, `plan_name`, `plan_status`). All identifiers and table names are generic. The queries demonstrate QA validation logic, not Healthfirst's actual database structure.

## 1. Check a member record

Confirm that the expected member exists and review their current status.

```sql
SELECT member_id, member_status
FROM sample_members
WHERE member_id = :test_member_id;
```

**Expected:** One row for a known test member, with the status matching the test data. Zero rows may be correct for an unknown member test.

## 2. Review eligibility and coverage dates

Check the eligibility record and the dates associated with a test member.

```sql
SELECT eligibility_id, member_id, plan_id,
       eligibility_status, effective_date, end_date
FROM sample_eligibility
WHERE member_id = :test_member_id
ORDER BY effective_date DESC;
```

**Expected:** Eligibility values and dates match the test setup. Multiple rows may be valid when a member has different plans or coverage periods.

## 3. Find invalid coverage date ranges

An end date earlier than its effective date is a data-quality issue.

```sql
SELECT eligibility_id, member_id, plan_id,
       effective_date, end_date
FROM sample_eligibility
WHERE end_date IS NOT NULL
  AND effective_date IS NOT NULL
  AND end_date < effective_date;
```

**Expected:** No rows for a dataset with valid date ranges. A null end date is not automatically an error; it may indicate open-ended coverage.

## 4. Find duplicate eligibility record IDs

Check for duplicate record identifiers rather than treating every member with multiple eligibility rows as a duplicate.

```sql
SELECT eligibility_id, COUNT(*) AS record_count
FROM sample_eligibility
GROUP BY eligibility_id
HAVING COUNT(*) > 1;
```

**Expected:** No rows when `eligibility_id` is unique. If the column is enforced as a primary key, the database should prevent duplicates; this check is useful for staging tables or imported data.

## 5. Check required eligibility fields

Identify missing member, plan, status, or effective-date values.

```sql
SELECT eligibility_id, member_id, plan_id,
       eligibility_status, effective_date
FROM sample_eligibility
WHERE member_id IS NULL
   OR plan_id IS NULL
   OR eligibility_status IS NULL
   OR effective_date IS NULL;
```

**Expected:** No rows when the test dataset requires all four fields. Any returned rows should be checked against the applicable requirements.

## 6. Find eligibility records without a member

Use a left join to catch records that point to a missing member.

```sql
SELECT e.eligibility_id, e.member_id, e.plan_id
FROM sample_eligibility e
LEFT JOIN sample_members m
  ON m.member_id = e.member_id
WHERE e.member_id IS NOT NULL
  AND m.member_id IS NULL;
```

**Expected:** No rows when every eligibility record has a matching member. This can expose broken references in imported or staging data.

## 7. Check eligibility against the member and plan

Compare related records before validating values displayed in the portal or returned by an API.

```sql
SELECT m.member_id, m.member_status,
       e.eligibility_id, e.eligibility_status,
       e.effective_date, e.end_date,
       p.plan_id, p.plan_name, p.plan_status
FROM sample_members m
JOIN sample_eligibility e
  ON e.member_id = m.member_id
JOIN sample_plans p
  ON p.plan_id = e.plan_id
WHERE m.member_id = :test_member_id
ORDER BY e.effective_date DESC;
```

**Expected:** The joined values agree with the expected member and plan test records. Missing rows should be investigated based on the scenario and join type.

## 8. Check overlapping eligibility periods for the same member and plan

Look for distinct eligibility rows whose date ranges overlap. Whether overlap is a defect depends on business rules.

```sql
SELECT a.member_id, a.plan_id,
       a.eligibility_id AS first_record,
       b.eligibility_id AS second_record,
       a.effective_date AS first_start,
       b.effective_date AS second_start
FROM sample_eligibility a
JOIN sample_eligibility b
  ON a.member_id = b.member_id
 AND a.plan_id = b.plan_id
 AND a.eligibility_id < b.eligibility_id
 AND a.effective_date <= NVL(b.end_date, DATE '9999-12-31')
 AND b.effective_date <= NVL(a.end_date, DATE '9999-12-31')
WHERE a.effective_date IS NOT NULL
  AND b.effective_date IS NOT NULL;
```

**Expected:** Review returned pairs against the rules for coverage overlaps, renewals, and corrections. This query flags candidates for investigation; it does not prove they are defects.

## 9. Summarize eligibility statuses

Count records by status to compare with expected test-data totals.

```sql
SELECT eligibility_status, COUNT(*) AS total_records
FROM sample_eligibility
GROUP BY eligibility_status
ORDER BY eligibility_status;
```

**Expected:** Counts match the seeded dataset. An unexpected status or count may indicate missing or incorrectly classified records.

## 10. Validate coverage active on a test date

Check date-range eligibility using an explicit date rather than relying on the current date.

```sql
SELECT eligibility_id, member_id, plan_id,
       eligibility_status, effective_date, end_date
FROM sample_eligibility
WHERE member_id = :test_member_id
  AND effective_date <= :as_of_date
  AND (end_date IS NULL OR end_date >= :as_of_date);
```

**Expected:** Rows cover the supplied date. Eligibility status and other business rules must also be checked before interpreting a row as active coverage.
