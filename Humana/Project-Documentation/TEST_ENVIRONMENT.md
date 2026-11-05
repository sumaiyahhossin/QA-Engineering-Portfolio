Test Environment

Project Name: Healthcare Plan Browsing and Public Account Access
Company: Humana

Environment Overview

The Selenium examples in this public repository navigate public Humana web pages. They are not connected to an internal QA environment.

Application Areas
- Public healthcare plan browsing
- Public plan search
- Public plan information
- Account sign-in page behavior

Tools
- Java 17
- Selenium WebDriver 4.27.0
- TestNG 7.10.2
- Maven
- Chrome / ChromeDriver through Selenium Manager
- GitHub Actions

Test Data
- ZIP code used by the current public plan-search examples: 11417
- Invalid login test data: intentionally incorrect password
- Optional account test credentials: HUMANA_TEST_USERNAME and HUMANA_TEST_PASSWORD environment variables

Do not put active passwords, personal information, member IDs, or private account data in source control. Use only an account you are authorized to access. The account used for sign-in practice is not fully set up and may require additional profile information.

Scope Limitations

The public plan finder does not provide proof of Medicare eligibility or member coverage. The sign-in tests should only verify the public sign-in flow and the next page or setup step reached by the test account. Do not submit personal details or enroll in a plan as part of this portfolio.

Before Execution
- Confirm the public page is available.
- Check that current page selectors still match the website.
- Confirm Java and Maven are installed.
- Confirm optional environment variables are configured.
- Avoid protected account data.

External Dependencies

Tests use a live public website. Results can be affected by site changes, bot protection, network conditions, consent banners, and temporary outages. These are not necessarily application defects.