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
protected List<WebElement> isVisibleCheckFlags;
  private static final int DEFAULT_TIMEOUT = 10;
  protected static final String BASE_URL = "https://www.leanware.co";
  protected static WebDriver driver;
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

  public WebBase() {
    driver.get(BASE_URL);
    PageFactory.initElements(driver, this);
  }

  public void waitFor(WebElement element) {
    waitFor(element, DEFAULT_TIMEOUT);
  }

  public void waitFor(WebElement element, int timeout) {
    wait = new WebDriverWait(driver, Duration.ofSeconds(timeout));
    wait.until(ExpectedConditions.visibilityOf(element));
  }

  public void waitForPageToLoad() {
    waitForPageToLoad(DEFAULT_TIMEOUT);
  }
  public void waitForPageToLoad(int timeoutInSeconds) {
    for (WebElement element : isVisibleCheckFlags) {
      waitFor(element, timeoutInSeconds);
    }
  }

  public void click(WebElement element) {
    click(element, false);
  }

  public void click(WebElement element, boolean doubleClick) {
    waitFor(element);
    if (doubleClick) {
      actions.doubleClick(element).perform();
    } else {
      element.click();
    }
  }

  public void jsClick(WebElement element) {
    jsExecution("arguments[0].click();", element);
  }

  public void addStyleToElement(WebElement element, String style) {
    javascriptExecutor.executeScript("arguments[0].setAttribute('style', '"+ style + "'", element);
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
    return isVisibleCheckFlags.stream().allMatch(this::hasElementVisible);
  }

  protected void setCheckFlags(List<WebElement> flags) {
    for (WebElement flag : flags) {
      waitFor(flag);
    }
    this.isVisibleCheckFlags = flags;
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
    protected String currentUrl;

    protected void navigate(Navigable navigable) {
        driver.navigate();
        getLogger().info(format("Navigating to %s", navigable.getUrl()));
        driver.get(navigable.getUrl());
    }

    protected void hoverOnElement(WebElement element) {
      actions.moveToElement(element).perform();
    }
}
