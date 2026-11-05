# Selenium Test Execution Results

**Project Focus:** Healthcare plan browsing and member-facing sign-in workflows  
**Framework:** Java 17, Selenium WebDriver 4.27.0, TestNG 7.10.2, Maven  
**CI Workflow:** `.github/workflows/humana-selenium.yml`

---

## 1. Test Scope

The automated suite contains nine TestNG test methods covering:

- Sign-in page loading and accepted test credentials.
- Invalid sign-in and blank-field validation.
- Plan search page loading, ZIP code entry, and results rendering.
- Plan details navigation.

The tests run against local HTML fixtures in `src/test/resources/fixtures`. They do not connect to Humana production systems or use real member information.

## 2. Execution Status

The latest historical run against the previous live-site-dependent implementation was **Run #37**, completed November 5, 2026. It failed with 9 tests run, 4 failures, 0 errors, and 1 skipped.

That result is retained as historical context only. It does not describe the current local-fixture implementation. The current implementation should be reported as passing only after a new GitHub Actions run completes successfully.

## 3. Reviewing Results

After each run, review:

- Maven build result and TestNG summary.
- Failed test names and assertion messages.
- Browser and driver initialization.
- TestNG / Surefire reports under `target/surefire-reports`.

A passing result should only be recorded when the corresponding run confirms that all expected tests completed successfully.
