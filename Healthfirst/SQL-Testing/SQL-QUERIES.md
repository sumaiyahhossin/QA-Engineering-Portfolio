# SQL Data Validation Examples

The examples below show common checks for member and eligibility data. Table and column names are illustrative and do not represent Healthfirst database schemas.

## 1. Member Record

```sql
SELECT member_id, member_status
FROM members
WHERE member_id = :test_member_id;
```

## 2. Eligibility Status

```sql
SELECT member_id, eligibility_status, effective_date, end_date
FROM member_eligibility
WHERE member_id = :test_member_id;
```

## 3. Eligibility Date Range

```sql
SELECT member_id, effective_date, end_date
FROM member_eligibility
WHERE end_date < effective_date;
```

## 4. Duplicate Eligibility Records

```sql
SELECT member_id, COUNT(*) AS record_count
FROM member_eligibility
GROUP BY member_id
HAVING COUNT(*) > 1;
```

## 5. Member and Eligibility Comparison

```sql
SELECT m.member_id, m.member_status, e.eligibility_status,
       e.effective_date, e.end_date
FROM members m
JOIN member_eligibility e ON e.member_id = m.member_id
WHERE m.member_id = :test_member_id;
```

The examples use bind variables and read-only SELECT statements. They illustrate how member and eligibility values can be compared during QA data validation.
