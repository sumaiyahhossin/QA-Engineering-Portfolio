Playwright Automation Practice

This is an independent automation practice project using the public demo website at the-internet.herokuapp.com. It is not connected to Humana or Healthfirst and is not an employer work artifact.

Tools
- JavaScript
- Playwright Test
- Chromium
- GitHub Actions

Scenarios
- Verify the login form is displayed.
- Verify the public demo account can log in and log out.
- Verify an invalid password displays an error.

Run Locally

From this directory:

```bash
npm install
npx playwright install chromium
npm test
```

The project uses the demo website's published sample credentials. Do not reuse these credentials on any other website.

Configuration

The default base URL is the public demo site. To point the project at a different approved test application, set BASE_URL and update the selectors and expected results to match that application's documented behavior. Do not add internal employer URLs or credentials to this public repository.

Test artifacts

Playwright HTML reports, screenshots, and traces are generated locally or by CI. Review all artifacts before sharing them to ensure they contain no personal or confidential data.