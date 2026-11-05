SQL Validation Examples

These examples show common QA data checks. Table and column names are illustrative and may need to be changed to match an approved test database.

1. Find a test member record

```sql
SELECT member_id, member_status
FROM members
WHERE member_id = :test_member_id;
```

2. Check coverage for a test member

```sql
SELECT member_id, plan_id, coverage_start_date, coverage_end_date
FROM member_coverage
WHERE member_id = :test_member_id;
```

3. Check for duplicate coverage records

```sql
SELECT member_id, plan_id, COUNT(*) AS record_count
FROM member_coverage
GROUP BY member_id, plan_id
HAVING COUNT(*) > 1;
```

4. Find records with invalid coverage date ranges

```sql
SELECT member_id, plan_id, coverage_start_date, coverage_end_date
FROM member_coverage
WHERE coverage_end_date < coverage_start_date;
```

5. Compare member and coverage records

```sql
SELECT m.member_id, c.plan_id, c.coverage_start_date, c.coverage_end_date
FROM members m
JOIN member_coverage c ON c.member_id = m.member_id
WHERE m.member_id = :test_member_id;
```

Use bind variables, approved test data, and read-only access where possible. Do not include sensitive query output in a public repository.
