package com.humana.portal.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.time.Duration;

public class Test04_PlanDetailsTest extends TestBase {

    @Test(description = "Verify a member can open plan details from search results")
    public void testContinuousPlanDetailsVerification() {
        openFixture("plan-search.html");

        driver.findElement(By.id("zipcode-input")).sendKeys("11417");
        driver.findElement(By.cssSelector("button[data-testid='submit-btn']")).click();

        new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(ExpectedConditions.visibilityOfElementLocated(By.id("results-heading")));

        driver.findElement(By.id("view-details")).click();

        Assert.assertTrue(driver.findElement(By.id("plan-details")).isDisplayed());
        Assert.assertTrue(driver.findElement(By.id("plan-details")).getText().contains("Plan highlights"));
    }
}
