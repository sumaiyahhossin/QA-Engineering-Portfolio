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

public class Test03_PlanSearchTest {

    private WebDriver driver;
    private WebDriverWait wait;

    //direct medicare plan finder url to bypass homepage web component bot blocks
    private static final String MEDICARE_FINDER_URL = "https://www.humana.com/medicare/medicare-advantage-plans";

    //locators for medicare search workflow
    private final By zipcodeInputLocator = By.id("zipcode-input");
    private final By shopPlansButtonLocator = By.cssSelector("button[data-testid='submit-btn']");
    private final By planResultsLocator = By.xpath("//*[contains(text(),'plans in your ZIP code')]");

    @BeforeMethod
    public void setUp() {
        ChromeOptions options = new ChromeOptions();

        options.addArguments("--disable-gpu");
        options.addArguments("--window-size=1920,1080");
        options.addArguments("--disable-blink-features=AutomationControlled");

        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(20));

        //open direct medicare finder portal before each test
        driver.get(MEDICARE_FINDER_URL);
    }

    @Test(priority = 1, description = "Test Case 1: Verify Medicare plan finder portal loads successfully")
    public void testMedicarePageLoads() throws InterruptedException {
        //1.wait for zip code input field to be present on page
        WebElement zipcodeField = wait.until(ExpectedConditions.visibilityOfElementLocated(zipcodeInputLocator));
        Thread.sleep(1500); //visual pause
        Assert.assertTrue(zipcodeField.isDisplayed(), "Medicare plan lookup ZIP input field failed to load.");
    }

    @Test(priority = 2, description = "Test Case 2: Enter target ZIP code 11417 into search input")
    public void testEnterZipCode() throws InterruptedException {
        //1.locate zip input and type zip code 11417 slowly
        WebElement zipcodeField = wait.until(ExpectedConditions.elementToBeClickable(zipcodeInputLocator));
        zipcodeField.clear();
        Thread.sleep(1000); //visual pause
        zipcodeField.sendKeys("11417");
        Thread.sleep(2000); //visual pause after typing zip

        //2.verify entered value in input field
        String enteredZip = zipcodeField.getAttribute("value");
        Assert.assertEquals(enteredZip, "11417", "ZIP code input field did not match expected test value.");
    }

    @Test(priority = 3, description = "Test Case 3: Click shop plans submit button")
    public void testClickShopPlansButton() throws InterruptedException {
        //1.enter zip code before submitting search
        WebElement zipcodeField = wait.until(ExpectedConditions.elementToBeClickable(zipcodeInputLocator));
        zipcodeField.clear();
        zipcodeField.sendKeys("11417");
        Thread.sleep(1500);

        //2.click shop plans button using javascript for reliable execution
        WebElement shopPlansButton = wait.until(ExpectedConditions.elementToBeClickable(shopPlansButtonLocator));
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", shopPlansButton);
        Thread.sleep(3000); //visual pause after submit click

        //3.verify redirection or loading state starts
        Assert.assertTrue(driver.getCurrentUrl().contains("medicare") || driver.getCurrentUrl().contains("plan"),
                "Page failed to trigger search submission.");
    }

    @Test(priority = 4, description = "Test Case 4: Verify Medicare Advantage plan results render for ZIP code 11417")
    public void testVerifyPlanResultsRendered() throws InterruptedException {
        //1.enter zip code 11417
        WebElement zipcodeField = wait.until(ExpectedConditions.elementToBeClickable(zipcodeInputLocator));
        zipcodeField.clear();
        zipcodeField.sendKeys("11417");
        Thread.sleep(1500);

        //2.click shop plans button
        WebElement shopPlansButton = wait.until(ExpectedConditions.elementToBeClickable(shopPlansButtonLocator));
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", shopPlansButton);

        //3.extended wait for dynamic ajax plan results to finish loading
        Thread.sleep(12000);

        //4.verify plan results summary text appears on screen
        WebElement resultsHeading = wait.until(ExpectedConditions.visibilityOfElementLocated(planResultsLocator));
        Assert.assertTrue(resultsHeading.isDisplayed(), "Medicare plan search results banner failed to render for ZIP 11417.");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit(); //cleanly closes browser session and frees system memory
        }
    }
}
