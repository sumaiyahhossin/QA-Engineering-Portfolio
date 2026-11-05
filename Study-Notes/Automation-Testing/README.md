Automation Testing Notes

Why Automate
Automation is useful for repeatable checks, regression coverage, data-driven scenarios, and workflows that are time-consuming to repeat manually. Not every test should be automated.

Selenium
Selenium WebDriver automates browser interactions. A typical Java setup creates a driver, opens a page, locates elements, performs actions, asserts expected behavior, and closes the driver.

TestNG
TestNG provides annotations such as @BeforeMethod, @Test, and @AfterMethod, plus assertions, grouping, and suite configuration through XML.

Playwright
Playwright supports browser automation with auto-waiting, browser contexts, locators, and trace tooling. Prefer role- and label-based locators when possible.

Cypress
Cypress provides browser-based end-to-end testing with commands such as cy.visit(), cy.get(), and assertions through should().

Good Automation Practices
- Choose stable, valuable regression scenarios.
- Use clear test names and independent tests.
- Prefer explicit, user-facing assertions.
- Avoid fixed sleeps when a condition-based wait is available.
- Keep credentials in environment variables or secret storage.
- Use approved test data and clean up when needed.
- Review screenshots, traces, and logs for sensitive information before sharing.