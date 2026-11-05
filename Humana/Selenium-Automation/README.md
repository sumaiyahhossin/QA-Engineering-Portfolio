Selenium Automation

Project Name: Healthcare Plan Browsing and Public Account Access
Company: Humana

Framework

This project contains Java Selenium WebDriver examples organized with TestNG and Maven.

Tools and Technologies
- Java 17
- Selenium WebDriver 4.27.0
- TestNG 7.10.2
- Maven
- Chrome
- GitHub Actions

Test Classes
- Test01_LoginTest.java – checks the public account sign-in page and optional test-account flow.
- Test02_InvalidLoginTest.java – checks invalid login and blank-field validation behavior.
- Test03_PlanSearchTest.java – checks public plan finder page loading, ZIP input, search submission, and results.
- Test04_PlanDetailsTest.java – checks navigation to public plan details.

Run Locally

From this directory:

```bash
mvn clean test
```

The project uses the TestNG suite in testng.xml.

Optional Test Account Variables

The account-flow test reads credentials from environment variables. They are not stored in the repository.

```bash
export HUMANA_TEST_USERNAME="your-test-username"
export HUMANA_TEST_PASSWORD="your-test-password"
mvn clean test
```

If these variables are not set, the optional account-flow test is skipped. Use only an account you are authorized to access. The test does not submit personal profile information or verify member coverage.

GitHub Actions

The workflow runs Maven tests in headless Chrome. Live public website tests may be affected by site changes, bot protection, network conditions, or consent prompts.

Test Results

See TEST-EXECUTION-RESULTS.md. Results are not considered passing until the corresponding run completes successfully.