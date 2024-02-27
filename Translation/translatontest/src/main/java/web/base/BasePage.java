package web.base;

import interfaces.Navigable;
import utils.Logging;
import web.components.navbar.NavbarComponent;

import static java.lang.String.format;

public class BasePage extends WebBase implements Logging {

    public BasePage(String url) {
        super(url);
    }

    @Override
    protected void navigate(Navigable navigable) {
        driver.navigate().refresh();
        getLogger().info(format("Navigating to %s", url));
        driver.get(navigable.getUrl());
    }


    public NavbarComponent getNavbarComponent() {
        return new NavbarComponent(this.url, isVisibleCheckFlags);
    }
}
