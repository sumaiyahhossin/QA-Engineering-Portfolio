package com.humana.portal.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.time.Duration;

public class Test01_LoginTest extends TestBase {

    private final By usernameInput = By.id("username");
    private final By passwordInput = By.id("password");
    private final By signInButton = By.cssSelector("button[type='submit']");
    private final By statusMessage = By.id("message");

    @Test(priority = 1, description = "Check that the sign-in page loads")
    public void testLoginPageLoads() {
        openFixture("login.html");

        WebElement usernameField = new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(ExpectedConditions.visibilityOfElementLocated(usernameInput));

        Assert.assertTrue(usernameField.isDisplayed());
        Assert.assertTrue(driver.findElement(passwordInput).isDisplayed());
    }

    @Test(priority = 2, description = "Check sign-in with valid test credentials")
    public void testValidLoginShowsSuccessMessage() {
        openFixture("login.html");

        driver.findElement(usernameInput).sendKeys("qa.user@example.test");
        driver.findElement(passwordInput).sendKeys("TestPass123!");
        driver.findElement(signInButton).click();

        String message = new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(ExpectedConditions.visibilityOfElementLocated(statusMessage))
                .getText();

        Assert.assertTrue(message.contains("Sign-in successful"),
                "A success message should appear after valid test credentials are submitted.");
    }
}
