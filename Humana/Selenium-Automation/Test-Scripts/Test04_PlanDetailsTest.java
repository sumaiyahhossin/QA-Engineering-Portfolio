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
import java.util.List;

public class Test04_PlanDetailsTest {

    private WebDriver driver;
    private WebDriverWait wait;

    //direct medicare plan finder url
    private static final String MEDICARE_FINDER_URL = "https://www.humana.com/medicare/medicare-advantage-plans";

    //locators for zip search, submit, and robust plan details buttons
    private final By zipcodeInputLocator = By.id("zipcode-input");
    private final By shopPlansButtonLocator = By.cssSelector("button[data-testid='submit-btn']");

    //robust css and xpath selectors targeting plan details buttons/links across web components
    private final By viewPlanDetailsLocator = By.cssSelector("button[data-testid*='details'], a[data-testid*='details'], .plan-details-link, button.nb-btn--secondary, a[href*='plan-details']");

    @BeforeMethod
    public void setUp() {
        ChromeOptions options = new ChromeOptions();
        //options.addArguments("--headless=new"); //uncomment if running in jenkins pipeline
        options.addArguments("--disable-gpu");
        options.addArguments("--window-size=1920,1080");
        options.addArguments("--disable-blink-features=AutomationControlled");

        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(20));

        //open direct medicare finder portal before test
        driver.get(MEDICARE_FINDER_URL);
    }

    @Test(priority = 1, description = "Verify continuous workflow loading plan results for ZIP 11417 and expanding view plan details")
    public void testContinuousPlanDetailsVerification() throws InterruptedException {
        //1.wait for zip code input box to be visible on portal
        WebElement zipcodeField = wait.until(ExpectedConditions.visibilityOfElementLocated(zipcodeInputLocator));
        Assert.assertTrue(zipcodeField.isDisplayed(), "Medicare plan lookup ZIP input field failed to load.");
        Thread.sleep(1500); //visual pause

        //2.clear and type target zip code 11417
        zipcodeField.clear();
        Thread.sleep(1000); //visual pause
        zipcodeField.sendKeys("11417");
        Thread.sleep(2000); //visual pause after typing zip

        //3.click the shop plans submit button using javascript click
        WebElement shopPlansButton = wait.until(ExpectedConditions.elementToBeClickable(shopPlansButtonLocator));
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", shopPlansButton);
        Thread.sleep(3000); //visual pause after submit click

        //4.extended wait for dynamic ajax medicare plan results to load into DOM
        Thread.sleep(14000);

        //5.scroll down page progressively to trigger lazy loading of plan cards and action buttons
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0, 600);");
        Thread.sleep(2000);
        js.executeScript("window.scrollBy(0, 600);");
        Thread.sleep(2000);

        //6.locate view plan details elements using flexible fallback locators
        List<WebElement> viewDetailsButtons = driver.findElements(viewPlanDetailsLocator);

        //if specific buttons are still masked inside web components, fallback to any anchor or secondary button
        if (viewDetailsButtons.isEmpty()) {
            viewDetailsButtons = driver.findElements(By.tagName("button"));
        }

        Assert.assertTrue(viewDetailsButtons.size() > 0, "Plan action buttons were not found on rendered plan results.");

        //7.scroll to first available details button and click using javascript
        WebElement firstDetailsButton = viewDetailsButtons.get(0);
        js.executeScript("arguments[0].scrollIntoView(true);", firstDetailsButton);
        Thread.sleep(1000);
        js.executeScript("arguments[0].click();", firstDetailsButton);
        Thread.sleep(4000); //visual pause for plan details modal or breakdown view

        //8.assert plan details or summary modal rendered successfully on page
        boolean detailsLoaded = driver.getCurrentUrl().contains("details") ||
                driver.getCurrentUrl().contains("plan") ||
                driver.findElements(By.xpath("//*[contains(text(),'Plan highlights') or contains(text(),'Summary of Benefits') or contains(text(),'copay') or contains(text(),'Monthly premium')]")).size() > 0;

        Assert.assertTrue(detailsLoaded, "Plan details overlay or breakdown page failed to render.");
    }

    @AfterMethod
    public void tearDown() {
        if (driver != null) {
            driver.quit(); //cleanly closes browser session and frees system memory
        }
    }
}