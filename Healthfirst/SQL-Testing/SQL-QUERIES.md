SQL Data Validation Examples

The table and column names below are illustrative only. Confirm the authorized test schema before use.

1. Check an approved test member

```sql
SELECT member_id, member_status
FROM members
WHERE member_id = :test_member_id;
```

2. Review eligibility status

```sql
SELECT member_id, eligibility_status, effective_date, end_date
FROM member_eligibility
WHERE member_id = :test_member_id;
```

3. Check eligibility date range

```sql
SELECT member_id, effective_date, end_date
FROM member_eligibility
WHERE end_date < effective_date;
```

4. Check duplicate eligibility records

```sql
SELECT member_id, COUNT(*) AS record_count
FROM member_eligibility
GROUP BY member_id
HAVING COUNT(*) > 1;
```

5. Compare member and eligibility data

```sql
SELECT m.member_id, m.member_status, e.eligibility_status,
       e.effective_date, e.end_date
FROM members m
JOIN member_eligibility e ON e.member_id = m.member_id
WHERE m.member_id = :test_member_id;
```

Use bind variables and approved test data. Do not include real member identifiers or query output in a public repository. Do not run data-changing statements without authorization.
