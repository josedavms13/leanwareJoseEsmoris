package web.components.navbar;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import web.base.WebBase;
import web.components.servicesmodal.ServicesModal;

import java.util.List;
import java.util.NoSuchElementException;

public class NavbarComponent extends WebBase {

    private static final String NAVBAR_CONTAINER_SELECTOR = "nav[class*='wixui-horizontal-menu']";

    @FindBy(css = NAVBAR_CONTAINER_SELECTOR)
    private WebElement navbarContainer;


    @FindBy(css = NAVBAR_CONTAINER_SELECTOR + " li")
    private List<WebElement> navbarItems;

    public WebElement getNavbarItem(NavbarOptions navbarOption) throws NoSuchElementException {
        waitFor(navbarContainer);
        return navbarItems.stream()
                .filter(navElement -> navElement.getText().equalsIgnoreCase(navbarOption.toString()))
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("Navbar item " + navbarOption.toString() + " not found"));
    }

    public ServicesModal hoverOnServicesOption() throws NoSuchElementException {
        WebElement element = getNavbarItem(NavbarOptions.SERVICES);
        waitFor(element, 10);
        hoverOnElement(element);
        ServicesModal servicesModal = new ServicesModal();
        while (!servicesModal.isVisible()) {
            hoverOnElement(element);
        }
        return new ServicesModal();
    }
}
