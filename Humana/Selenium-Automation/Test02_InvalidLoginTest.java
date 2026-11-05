package com.humana.portal.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.time.Duration;

public class Test02_InvalidLoginTest {

    private WebDriver driver;
    private WebDriverWait wait;

    //direct account login url
    private static final String ACCOUNT_LOGIN_URL = "https://account.humana.com/";

    //locators for login form elements
    private final By usernameInputLocator = By.id("username");
    private final By passwordInputLocator = By.id("password");
    private final By loginButtonLocator   = By.cssSelector("button[type='submit'].nb-btn--primary");

    //locator targeting any element containing text on the page to verify the exact error message
    private final By pageBodyLocator = By.tagName("body");

    @BeforeMethod
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--disable-gpu");
        options.addArguments("--window-size=1920,1080");
        options.addArguments("--disable-blink-features=AutomationControlled");

        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));

        //open account sign-in page before each test
        driver.get(ACCOUNT_LOGIN_URL);
    }

    @Test(priority = 1, description = "Test Case 1: Verify invalid login displays incorrect username or password message")
    public void testInvalidLoginShowsIncorrectMessage() throws InterruptedException {
        //1.typing username into input field
        WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(usernameInputLocator));
        usernameField.clear();
        usernameField.sendKeys("sumaiyahhossin");
        Thread.sleep(1000);

        //2.typing incorrect password into input field
        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(passwordInputLocator));
        passwordField.clear();
        passwordField.sendKeys("WrongPassword123!");
        Thread.sleep(1000);

        //3.submitting form using javascript click
        WebElement loginButton = wait.until(ExpectedConditions.presenceOfElementLocated(loginButtonLocator));
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", loginButton);
        Thread.sleep(3000);

        //4.verifying the page displays the exact expected error message text
        WebElement bodyElement = wait.until(ExpectedConditions.visibilityOfElementLocated(pageBodyLocator));
        String pageText = bodyElement.getText();

        Assert.assertTrue(pageText.contains("Username and/or password is incorrect"),
                "Expected error message 'Username and/s or password is incorrect' was not found on the page.");
    }

    @Test(priority = 2, description = "Test Case 2: Verify blank submission triggers form validation")
    public void testBlankSubmissionTriggersValidation() throws InterruptedException {
        //1.clicking sign-in button without entering username or password
        WebElement loginButton = wait.until(ExpectedConditions.presenceOfElementLocated(loginButtonLocator));
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", loginButton);
        Thread.sleep(2000);

        //2.verifying username field indicates invalid required state
        WebElement usernameField = driver.findElement(usernameInputLocator);
        String ariaInvalid = usernameField.getAttribute("aria-invalid");
        Assert.assertEquals(ariaInvalid, "true", "Form submitted successfully without triggering required field validation.");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit(); //shut down browser window when test finishes
        }
    }
}