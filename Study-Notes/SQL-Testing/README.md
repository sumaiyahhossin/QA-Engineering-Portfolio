SQL Testing Notes

SQL is useful for checking whether application data is stored and returned as expected.

Common Commands
- SELECT retrieves data.
- WHERE filters rows.
- JOIN combines related tables.
- GROUP BY groups rows for aggregate checks.
- HAVING filters grouped results.
- COUNT checks record counts.
- ORDER BY sorts results.

Common QA Checks
- Verify an approved test record exists.
- Compare application values with database values.
- Check for duplicate records.
- Find missing or null values where fields are required.
- Validate date ranges and status values.
- Confirm related records join correctly.

Example

```sql
SELECT status, COUNT(*) AS total
FROM test_records
GROUP BY status
ORDER BY status;
```

Use read-only access where possible, parameterized queries, and approved test data. Never publish sensitive query output.