package web.base;

import interfaces.Navigable;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.Logging;

import java.time.Duration;
import java.util.List;

import static java.lang.String.format;

public class WebBase implements Logging {
    protected List<By> isVisibleCheckFlags;
    private static final int DEFAULT_TIMEOUT = 10;
    protected static WebDriver driver;

    protected String url;

    private static WebDriverWait wait;

    private static Actions actions;

    private static JavascriptExecutor javascriptExecutor;

    static {
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(chromeOptions);
        driver.manage().window().setPosition(new Point(0, -1500));
        driver.manage().window().maximize();
        actions = new Actions(driver);
    }

    public WebBase(String url) {
        this.url = url;
        driver.get(this.url);
        PageFactory.initElements(driver, this);
    }

    public void waitFor(WebElement element) {
        waitFor(element, DEFAULT_TIMEOUT);
    }

    public void waitFor(WebElement element, int timeout) {
        wait = new WebDriverWait(driver, Duration.ofSeconds(timeout));
        wait.until(ExpectedConditions.visibilityOf(element));
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public void waitFor(List<WebElement> elements) {
        waitFor(elements, DEFAULT_TIMEOUT);
    }

    public void waitFor(List<WebElement> elements, int timeout) {
        wait = new WebDriverWait(driver, Duration.ofSeconds(timeout));
        wait.until(ExpectedConditions.visibilityOfAllElements(elements));
    }

    public void waitFor(By locator) {
        waitFor(locator, DEFAULT_TIMEOUT);
    }

    public void waitTime(int timeoutInSeconds) {
        try {
            Thread.sleep(Duration.ofSeconds(timeoutInSeconds).toMillis());
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    public void waitFor(By locator, int timeout) {
        wait = new WebDriverWait(driver, Duration.ofSeconds(timeout));
        wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    public WebElement getElement(By locator) {
        WebElement element = driver.findElement(locator);
        waitFor(element);
        return element;
    }

    public List<WebElement> getElements(By locator) {
        List<WebElement> elements = driver.findElements(locator);
        waitFor(elements);
        return elements;
    }

    protected void setIsVisibleCheckFlags(List<By> isVisibleCheckFlags) {
        this.isVisibleCheckFlags = isVisibleCheckFlags;
    }

    public void waitForPageToLoad() {
        waitForPageToLoad(DEFAULT_TIMEOUT);
    }

    public void waitForPageToLoad(int timeoutInSeconds) {
        for (By flag : isVisibleCheckFlags) {
            waitFor(flag, timeoutInSeconds);
        }
    }

    public void refreshPage() {
        driver.navigate().refresh();
        waitForPageToLoad();
    }

    public void click(By element) {
        getElement(element);
        click(element, false);
    }

    public void click(WebElement element) {
        waitFor(element);
        element.click();
    }

    public void click(By element, boolean doubleClick) {
        waitFor(element);
        WebElement webElement = getElement(element);
        if (doubleClick) {
            actions.doubleClick(webElement).perform();
        } else {
            webElement.click();
        }
    }

    public void jsClick(WebElement element) {
        jsExecution("arguments[0].click();", element);
    }

    public void addStyleToElement(WebElement element, String style) {
        javascriptExecutor.executeScript("arguments[0].setAttribute('style', '" + style + "'", element);
    }

    public void typeIn(WebElement element, String text) {
        waitFor(element);
        element.sendKeys(text);
    }

    public boolean hasElementVisible(WebElement element) {
        try {
            waitFor(element);
            return element.isDisplayed();
        } catch (TimeoutException e) {
            return false;
        }
    }

    public boolean isVisible() {
        try {
            List<WebElement> elements = isVisibleCheckFlags.stream().map(this::getElement).toList();
            return elements.stream().allMatch(this::hasElementVisible);
        } catch (Exception e) {
            return false;
        }
    }

    public static void dispose() {
        System.out.println("Disposing driver");
        driver.close();
        driver.quit();
    }

    public static void jsExecution(String script, WebElement element) {
        javascriptExecutor = (JavascriptExecutor) driver;
        javascriptExecutor.executeScript(script, element);
    }

    public static void jsExecution(String script) {
        javascriptExecutor = (JavascriptExecutor) driver;
        javascriptExecutor.executeScript(script);
    }

    protected void navigate(Navigable navigable) {
        driver.navigate();
        getLogger().info(format("Navigating to %s", navigable.getUrl()));
        driver.get(navigable.getUrl());
    }

    protected String getText(By locator) {
        return getElement(locator).getText();
    }

    protected void hoverOnElement(WebElement element) {
        actions.moveToElement(element).perform();
    }
}
