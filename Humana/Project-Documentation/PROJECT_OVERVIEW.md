# Medicare Advantage Plan Search & Member Portal QA Suite

**Company / Project:** Humana Health Insurance  
**Project Name:** Healthcare Plan Browsing and Member Coverage  
**Role:** Junior QA Analyst  
**Methodology:** Agile / Scrum  
**Testing Types:** Functional Manual Testing, Automated Regression, SQL Backend Validation  

---

## Project Overview

This project focuses on quality assurance testing for a healthcare insurance platform that allows users to browse, compare, and review Medicare Advantage health plan options online.

The primary objective was to verify that users could successfully search for available health plans, review plan details, navigate coverage information, and access member-related functionality. Testing activities included manual test case development, functional and regression testing, automated browser testing, defect tracking, and database validation.

The project includes QA documentation and automation artifacts demonstrating the testing workflows and tools used throughout the development process.

---

## Role & Responsibilities

As a Junior QA Analyst, key responsibilities included:

- Reviewing requirements and understanding healthcare plan browsing workflows.
- Creating and maintaining manual test cases based on application functionality.
- Performing functional, smoke, regression, and integration testing.
- Validating ZIP code searches and healthcare plan results.
- Verifying plan details, coverage information, and navigation workflows.
- Developing automated test scripts using Selenium WebDriver and Java.
- Implementing TestNG assertions and test execution configurations.
- Performing database checks using SQL queries.
- Reporting, documenting, and tracking defects using Jira.
- Participating in Agile ceremonies, including sprint planning, daily standups, and sprint reviews.

---

## Tools & Technologies

| Category | Tools / Technologies |
| :--- | :--- |
| **Automation** | Selenium WebDriver, Java 17 |
| **Test Framework** | TestNG |
| **Build Management** | Apache Maven |
| **Test Documentation** | Microsoft Excel, Markdown |
| **Defect Tracking** | Jira, Zephyr Scale |
| **Database Testing** | Oracle SQL Developer, SQL |
| **Version Control** | Git, GitHub |
| **CI/CD** | GitHub Actions |
| **IDE** | IntelliJ IDEA |

---

## Functional Testing Scope

### 1. Healthcare Plan Search & Browsing
- Verify that users can search for available health plans using ZIP codes.
- Validate search results and plan listing functionality.
- Verify plan names and displayed information.
- Test navigation between plan listings and plan details.
- Validate plan comparison and coverage information.
- Verify that search results display correctly.

### 2. Form Validation & Input Testing
- Validate required fields and input handling.
- Test valid and invalid ZIP code entries.
- Verify behavior when required information is missing.
- Check error messages and validation responses.
- Test boundary conditions and unexpected inputs.

### 3. Plan Details & Coverage Information
- Verify that individual plan details load correctly.
- Validate displayed plan information and coverage details.
- Check navigation between plan sections.
- Verify that users can access relevant plan information.
- Test page behavior when information is unavailable or incomplete.

### 4. Login & Authentication
- Verify successful login functionality.
- Test invalid login credentials.
- Validate required field messages.
- Verify appropriate error handling.
- Test navigation and behavior during login attempts.

---

## Automation Testing Scope

Automated browser testing was developed using Java, Selenium WebDriver, and TestNG. The automation suite focuses on:

- Login functionality validation.
- Negative authentication and invalid login scenarios.
- Healthcare plan search workflows.
- Plan details page navigation.
- Dynamic web element identification and interaction.
- Structural test assertions and validation.
- Organized suite execution using TestNG XML suite files.

The project uses Maven for dependency management and TestNG XML configuration for organizing automated test execution.

---

## Project Documentation

| Document | Description |
| :--- | :--- |
| **`PROJECT_OVERVIEW.md`** | Project background, objectives, and scope |
| **`TEST_PLAN.md`** | Testing approach, objectives, and strategy |
| **`TEST_CASES.md`** | Manual test cases and expected results |
| **`Humana_Manual_Test_Cases.xlsx`** | Manual test case tracking workbook |
| **Selenium Automation** | Java-based automated test scripts |
| **`testng.xml`** | TestNG execution configuration |
| **`pom.xml`** | Maven project configuration |

---

## Repository Structure

```text
Humana/
│
├── Project-Documentation/
│   ├── PROJECT_OVERVIEW.md
│   ├── TEST_PLAN.md
│   ├── TEST_CASES.md
│   └── Humana_Manual_Test_Cases.xlsx
│
├── Selenium-Automation/
│   ├── src/
│   │   └── test/
│   │       └── java/
│   │           └── com/
│   │               └── humana/
│   │                   └── portal/
│   │                       └── tests/
│   │                           ├── Test01_LoginTest.java
│   │                           ├── Test02_InvalidLoginTest.java
│   │                           ├── Test03_PlanSearchTest.java
│   │                           └── Test04_PlanDetailsTest.java
│   │
│   ├── pom.xml
│   └── testng.xml
│
└── README.md
