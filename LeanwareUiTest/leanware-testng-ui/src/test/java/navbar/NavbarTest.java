package navbar;

import base.BaseTest;
import io.qameta.allure.testng.Tag;
import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import web.components.navbar.NavbarComponent;
import web.components.servicesmodal.ServicesModal;
import web.pages.homepage.HomePage;

public class NavbarTest extends BaseTest {

    @Tag("ServicesModal")
    @Test
    public void clickingOnServicesWillOpenServicesModal() {
        HomePage homePage = new HomePage(true);
        NavbarComponent navbar = homePage.getNavbarComponent();
        ServicesModal servicesModal = navbar.hoverOnServicesOption();
        Assert.assertTrue(servicesModal.isVisible(), "Verify that modal is visible when clicking on services button at navbar");
    }

}
