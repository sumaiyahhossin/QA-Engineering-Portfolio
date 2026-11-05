# Enterprise QA SQL Validation Scripts

**Company:** Humana Health Insurance  
**Project Name:** Healthcare Plan Browsing and Member Coverage  
**Role:** Junior QA Analyst  
**Database Tool:** Oracle SQL Developer / SQL*Plus CLI  
**Target Environment:** Authorized QA Staging Environment  
**Document Version:** 1.0

---

## 1. Database Testing Overview & Objectives

As part of my QA responsibilities, I used SQL queries to support backend data verification alongside application testing. These checks helped validate member records, review healthcare coverage information, identify data inconsistencies, and verify relationships between database records.

### Core Verification Focus

- **Member Record Integrity:** Verified that expected member profile records existed and had the correct status after submission or ingestion.
- **Coverage Period Audit:** Reviewed effective and termination dates to identify invalid date ranges and coverage status mismatches.
- **UI vs. Database Reconciliation:** Compared available backend plan information, including copays, deductibles, and out-of-pocket maximums, against values displayed in the application.
- **Anomaly & Duplicate Detection:** Used SQL queries to identify potential duplicate active coverage records and missing required values.
- **Relational Integrity:** Validated relationships between member profiles and assigned coverage records using SQL joins.

---

## 2. SQL Testing Scenarios Matrix

| Query ID | Testing Area | Purpose / Description | Target Table(s) |
| :--- | :--- | :--- | :--- |
| **Query 1** | Member Profile Audit | Retrieve member profile details and verify active status | `sample_member_profiles` |
| **Query 2** | Policy Coverage Audit | Validate active coverage assignments and coverage dates | `sample_member_coverage` |
| **Query 3** | Duplicate Policy Check | Identify duplicate active coverage records for the same member and plan | `sample_member_coverage` |
| **Query 4** | Date Range Validation | Detect invalid coverage date ranges where the end date precedes the start date | `sample_member_coverage` |
| **Query 5** | Relational Join Audit | Cross-check member profiles against their assigned coverage records | `sample_member_profiles`, `sample_member_coverage` |

---

## 3. Enterprise QA SQL Validation Scripts

### Query 1: Primary Member Profile Verification

**Objective:** Verify that an expected test member record exists in the QA environment and has an active status.

```sql
-- Query 1: Retrieve active subscriber record details
SELECT
    member_id,
    first_name,
    last_name,
    member_status,
    created_date
FROM sample_member_profiles
WHERE member_id = 'TEST-MEMBER-001'
  AND member_status = 'ACTIVE';
```

**Expected Result:** One matching record should be returned when the test member exists and has an active status.

---

### Query 2: Policy Coverage & Effective Date Verification

**Objective:** Retrieve active coverage assignments and review the associated coverage dates and status for a specified member ID.

```sql
-- Query 2: Retrieve active coverage records and policy dates
SELECT
    member_id,
    plan_id,
    coverage_start_date,
    coverage_end_date,
    coverage_status
FROM sample_member_coverage
WHERE member_id = 'TEST-MEMBER-001'
  AND coverage_status = 'ACTIVE';
```

**Expected Result:** The query should return active coverage records associated with the specified member, including their effective and termination dates.

---

### Query 3: Duplicate Active Policy Detection

**Objective:** Identify multiple active coverage records assigned to the same member ID and plan ID.

```sql
-- Query 3: Identify duplicate active coverage records
SELECT
    member_id,
    plan_id,
    COUNT(*) AS active_policy_count
FROM sample_member_coverage
WHERE coverage_status = 'ACTIVE'
GROUP BY member_id, plan_id
HAVING COUNT(*) > 1;
```

**Expected Result:** No rows should be returned if there are no duplicate active coverage records for the same member and plan combination.

---

### Query 4: Coverage Period Date Range Integrity Audit

**Objective:** Identify coverage records containing invalid chronological date ranges where the coverage end date occurs before the coverage start date.

```sql
-- Query 4: Identify invalid coverage date ranges
SELECT
    coverage_id,
    member_id,
    plan_id,
    coverage_start_date,
    coverage_end_date
FROM sample_member_coverage
WHERE coverage_end_date IS NOT NULL
  AND coverage_end_date < coverage_start_date;
```

**Expected Result:** No rows should be returned when all recorded coverage date ranges are chronologically valid.

---

### Query 5: Member Profile & Plan Coverage Relational Join Audit

**Objective:** Verify the relationship between member profile records and their associated coverage records using an INNER JOIN.

```sql
-- Query 5: Cross-check member profiles against assigned coverage
SELECT
    m.member_id,
    m.first_name,
    m.last_name,
    c.plan_id,
    c.coverage_start_date,
    c.coverage_end_date,
    c.coverage_status
FROM sample_member_profiles m
INNER JOIN sample_member_coverage c
    ON m.member_id = c.member_id
WHERE m.member_id = 'TEST-MEMBER-001';
```

**Expected Result:** Matching member profile and coverage information should be returned when the specified member has an associated coverage record.

---

## 4. Execution Environment & Data Privacy

| Parameter / Tool | Configuration |
| :--- | :--- |
| **Query Tool** | Oracle SQL Developer / SQL*Plus CLI |
| **Target Environment** | Authorized QA Staging Environment |
| **Access** | Authorized QA database access |
| **Test Data** | Synthetic test identifiers |
| **SQL Capabilities** | SELECT, WHERE, INNER JOIN, GROUP BY, HAVING, COUNT, NULL checks, and date comparisons |

### Data Privacy & Governance

Database verification activities were performed using authorized QA environments and test data.

This public portfolio version uses generalized schema and table names and synthetic identifiers to avoid exposing internal database infrastructure or confidential member information. No real member records, protected health information (PHI), production credentials, or connection details are included.
