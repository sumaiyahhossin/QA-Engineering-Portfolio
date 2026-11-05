package com.humana.portal.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.time.Duration;

public class Test03_PlanSearchTest extends TestBase {

    private final By zipcodeInput = By.id("zipcode-input");
    private final By shopPlansButton = By.cssSelector("button[data-testid='submit-btn']");
    private final By resultsHeading = By.id("results-heading");

    @Test(priority = 1, description = "Verify plan search page loads")
    public void testPlanSearchPageLoads() {
        openFixture("plan-search.html");

        WebElement zipField = new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(ExpectedConditions.visibilityOfElementLocated(zipcodeInput));

        Assert.assertTrue(zipField.isDisplayed());
    }

    @Test(priority = 2, description = "Verify a five-digit ZIP code can be entered")
    public void testEnterZipCode() {
        openFixture("plan-search.html");

        WebElement zipField = driver.findElement(zipcodeInput);
        zipField.sendKeys("11417");

        Assert.assertEquals(zipField.getAttribute("value"), "11417");
    }

    @Test(priority = 3, description = "Verify the Shop Plans button submits the search")
    public void testClickShopPlansButton() {
        openFixture("plan-search.html");

        driver.findElement(zipcodeInput).sendKeys("11417");
        driver.findElement(shopPlansButton).click();

        Assert.assertTrue(driver.findElement(By.id("plan-results")).isDisplayed());
    }

    @Test(priority = 4, description = "Verify plan results render for the entered ZIP code")
    public void testVerifyPlanResultsRendered() {
        openFixture("plan-search.html");

        driver.findElement(zipcodeInput).sendKeys("11417");
        driver.findElement(shopPlansButton).click();

        String heading = new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(ExpectedConditions.visibilityOfElementLocated(resultsHeading))
                .getText();

        Assert.assertEquals(heading, "Plans in your ZIP code 11417");
        Assert.assertTrue(driver.findElement(By.cssSelector(".plan-card")).isDisplayed());
    }
}
