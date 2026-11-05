package com.humana.portal.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.time.Duration;

public class Test02_InvalidLoginTest extends TestBase {

    private final By usernameInput = By.id("username");
    private final By passwordInput = By.id("password");
    private final By signInButton = By.cssSelector("button[type='submit']");
    private final By statusMessage = By.id("message");

    @Test(priority = 1, description = "Verify invalid sign-in displays an error message")
    public void testInvalidLoginShowsIncorrectMessage() {
        openFixture("login.html");

        driver.findElement(usernameInput).sendKeys("invalid.user@example.test");
        driver.findElement(passwordInput).sendKeys("IncorrectPassword!");
        driver.findElement(signInButton).click();

        String message = new WebDriverWait(driver, Duration.ofSeconds(5))
                .until(ExpectedConditions.visibilityOfElementLocated(statusMessage))
                .getText();

        Assert.assertEquals(message, "Username and/or password is incorrect");
    }

    @Test(priority = 2, description = "Verify blank sign-in submission triggers required-field validation")
    public void testBlankSubmissionTriggersValidation() {
        openFixture("login.html");

        driver.findElement(signInButton).click();

        Assert.assertEquals(driver.findElement(usernameInput).getAttribute("aria-invalid"), "true");
        Assert.assertEquals(driver.findElement(passwordInput).getAttribute("aria-invalid"), "true");
        Assert.assertFalse((Boolean) ((org.openqa.selenium.JavascriptExecutor) driver)
                .executeScript("return document.getElementById('login-form').checkValidity();"));
    }
}
