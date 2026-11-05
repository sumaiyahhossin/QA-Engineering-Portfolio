# SQL Checks for Member and Coverage Data

**Role:** Junior QA Analyst  
**Tool:** Oracle SQL Developer

I used SQL to help check test data related to member records and coverage. These queries cover the checks I worked with: record status, coverage dates, duplicate records, and relationships between tables.

The table names and IDs below are generic, and the IDs are synthetic.

## Query 1: Member Record

Check whether the test member record exists and is active.

    SELECT
        member_id,
        first_name,
        last_name,
        member_status,
        created_date
    FROM sample_member_profiles
    WHERE member_id = 'TEST-MEMBER-001'
      AND member_status = 'ACTIVE';

Expected: one row when the test member exists and has active status.

## Query 2: Active Coverage

Review the active coverage records and their dates for a member.

    SELECT
        member_id,
        plan_id,
        coverage_start_date,
        coverage_end_date,
        coverage_status
    FROM sample_member_coverage
    WHERE member_id = 'TEST-MEMBER-001'
      AND coverage_status = 'ACTIVE';

Expected: the active coverage records associated with that test member.

## Query 3: Duplicate Active Coverage

Find members with more than one active record for the same plan.

    SELECT
        member_id,
        plan_id,
        COUNT(*) AS active_policy_count
    FROM sample_member_coverage
    WHERE coverage_status = 'ACTIVE'
    GROUP BY member_id, plan_id
    HAVING COUNT(*) > 1;

Expected: no rows when there are no duplicate active records for a member and plan.

## Query 4: Coverage Date Check

Find records where the end date is earlier than the start date.

    SELECT
        coverage_id,
        member_id,
        plan_id,
        coverage_start_date,
        coverage_end_date
    FROM sample_member_coverage
    WHERE coverage_end_date IS NOT NULL
      AND coverage_end_date < coverage_start_date;

Expected: no rows when the coverage date ranges are valid.

## Query 5: Member and Coverage Join

Check the relationship between a member record and its coverage record.

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

Expected: matching member and coverage information when a related coverage record exists.

## Running These Queries

Run queries only in a database you have permission to access. Use the approved test schema and test records for that environment.
