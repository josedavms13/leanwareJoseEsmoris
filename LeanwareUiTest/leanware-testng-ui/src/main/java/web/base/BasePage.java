package web.base;

import interfaces.Navigable;
import utils.Logging;
import web.components.navbar.NavbarComponent;

import static java.lang.String.format;

public class BasePage extends WebBase implements Logging {
    protected String currentUrl;

    public BasePage(String currentUrl, boolean autoNavigate) {
        this.currentUrl = BASE_URL + currentUrl;
        if (autoNavigate) {
            driver.navigate().to(this.currentUrl);
            driver.navigate().refresh();
        }
    }

    protected void navigate(Navigable navigable) {
        driver.navigate().refresh();
        getLogger().info(format("Navigating to %s", currentUrl));
        driver.get(navigable.getUrl());
    }

    public NavbarComponent getNavbarComponent() {
        return new NavbarComponent();
    }
}
