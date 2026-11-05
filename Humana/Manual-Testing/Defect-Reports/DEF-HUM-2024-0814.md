# Example Defect Report — Plan Search Results Timeout

**Issue Type:** Functional defect example  
**Component:** Public plan search workflow  
**Status in this example:** Under investigation

> This report has been generalized for a public QA portfolio. Internal ticket references, environment names, build identifiers, endpoint paths, and supporting internal evidence are not included.

## Summary

After a valid ZIP code is submitted, the plan search workflow does not display the expected results within the test's wait period.

## Classification

| Field | Value |
| :--- | :--- |
| Severity | To be assessed against business impact |
| Priority | To be assigned by the project team |
| Environment | Authorized test environment |
| Browser | Desktop browser |
| Test Data | Synthetic ZIP code |

## Preconditions

1. The plan search page is available.
2. A valid synthetic ZIP code is ready for testing.
3. The browser is using a supported desktop viewport.

## Steps to Reproduce

1. Open the plan search page in the authorized test environment.
2. Enter a valid ZIP code.
3. Submit the search.
4. Wait for the plan results to load.

## Expected Result

The application displays plan search results that correspond to the submitted ZIP code.

## Actual Result

The results section does not appear within the expected wait period, and the automated check reports a timeout while waiting for the results element.

## Investigation Notes

The timeout should be investigated before assigning a root cause. Review the browser state, page response, network activity where authorized, test data, and element locator behavior to determine whether the issue is in the application or the automation.

## Retest & Resolution

| Field | Result |
| :--- | :--- |
| Fix status | Not recorded in this public example |
| Retest status | Pending verification |
| Evidence | Internal evidence is not included in the public portfolio |

## QA Takeaway

A Selenium timeout identifies that an expected condition was not observed within the configured wait. It does not automatically prove a backend outage or application defect. Further investigation is needed before confirming root cause.
