package com.humana.portal.tests;

import org.openqa.selenium.By;
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

public class Test01_LoginTest {

    private WebDriver driver;
    private WebDriverWait wait;

    //direct account login url
    private static final String ACCOUNT_LOGIN_URL = "https://account.humana.com/";

    //locators for the sign-in form elements
    private final By usernameInputLocator = By.id("username");
    private final By passwordInputLocator = By.id("password");
    private final By loginButtonLocator = By.cssSelector("button[type='submit'].nb-btn--primary");
    private final By dashboardIndicatorLocator = By.cssSelector(".dashboard-container, .user-profile, header nav, .welcome-banner");

    @BeforeMethod
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        //options.addArguments("--headless=new");
        options.addArguments("--disable-gpu");
        options.addArguments("--window-size=1920,1080");

        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));
        driver.get(ACCOUNT_LOGIN_URL);
    }

    @Test(priority = 1, description = "Test Case 1: Verify account login page loads successfully")
    public void testLoginPageLoadsDirectly() {
        WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(usernameInputLocator));
        Assert.assertTrue(usernameField.isDisplayed(), "Username input field failed to load on account portal.");
    }

    @Test(priority = 2, description = "Test Case 2: Verify successful login with provided credentials")
    public void testSuccessfulMemberLogin() {
        WebElement usernameField = wait.until(ExpectedConditions.elementToBeClickable(usernameInputLocator));
        usernameField.clear();
        usernameField.sendKeys("sumaiyahhossin");

        WebElement passwordField = wait.until(ExpectedConditions.elementToBeClickable(passwordInputLocator));
        passwordField.clear();
        passwordField.sendKeys("Bangladesh123");

        WebElement loginButton = wait.until(ExpectedConditions.elementToBeClickable(loginButtonLocator));
        loginButton.click();

        boolean loginSuccessful = wait.until(driver ->
                driver.findElements(dashboardIndicatorLocator).size() > 0
                        || !driver.getCurrentUrl().equals(ACCOUNT_LOGIN_URL)
        );

        Assert.assertTrue(loginSuccessful,
                "Successful login verification failed or encountered an authentication challenge.");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}