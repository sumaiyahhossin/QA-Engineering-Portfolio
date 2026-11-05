## SQL Database Verification & Backend QA Testing

This section documents the database verification procedures, backend data auditing techniques, and SQL test scripts utilized during execution on Humana’s staging database instances (`ORACLE_DB_STG_02`). 

Backend database testing is conducted alongside UI automation to ensure 100% data consistency between client-facing web forms, REST API microservices, and backend Oracle/PostgreSQL tables.

---

### Backend Testing Objectives & Focus Areas

* **Member Record Verification:** Execute queries against primary subscriber tables (`MEMBER_PROFILES`, `MEMBER_COVERAGE`) to confirm synthetic test identifiers are correctly ingested post-submission.
* **Coverage Period & Date Integrity:** Audit `EFFECTIVE_DATE` and `TERMINATION_DATE` fields across policy records to flag invalid chronological ranges or expired status mismatches.
* **Data Consistency & UI Reconciliation:** Compare backend plan catalog cost-sharing parameters (copays, deductibles, out-of-pocket maximums) against values rendered on front-end plan detail drawers.
* **Anomaly & Duplicate Detection:** Scan primary key and foreign key constraints to identify duplicate active policy assignments (`HAVING COUNT > 1`) and detect missing mandatory values.
* **Relational Data Validation:** Validate complex `JOIN` relationships between subscriber profiles, dependent records, and assigned Medicare Advantage (Part C/D) policy catalogs.

---

### Execution Environment & Infrastructure Tools

| Parameter / Tool | Configuration Specification |
| :--- | :--- |
| **Query Client** | Oracle SQL Developer / SQL*Plus CLI |
| **Target Schema** | `HUM_STG_MEDICARE_V2` |
| **SQL Capabilities** | Complex `JOIN` operations, `GROUP BY` aggregations, `HAVING` filters, `CASE` audit logic, `NULL` validation, and date chronological functions |
| **Data Security & Governance** | All test queries strictly utilize synthetic, non-PHI datasets (e.g., synthetic member `MEM-SYN-10982` and regional ZIP code `11417`) complying with CMS test deck guidelines and HIPAA regulations |
