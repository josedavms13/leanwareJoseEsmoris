package web.pages.homepage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import web.base.BasePage;

import interfaces.Navigable;
import web.pages.contactus.ContactUsePage;

import static java.util.Arrays.asList;

public class HomePage extends BasePage implements Navigable {

    private static final String HOME_PAGE_TITLE_STRING = "Empowering Digital Disruptors";

    @FindBy(xpath = "//span[normalize-space(text())='" + HOME_PAGE_TITLE_STRING + "']")
    private WebElement homePageTitle;


    @FindBy(css = "[href='https://www.leanware.co/contact']")
    private WebElement contactUsButton;


    public HomePage(boolean autoNavigate) {
        super("", autoNavigate);
        setCheckFlags(asList(homePageTitle, contactUsButton));
    }

    public ContactUsePage clickContactUsButton() {
        click(contactUsButton);
        ContactUsePage contactUsePage = new ContactUsePage(false);
        contactUsePage.waitForPageToLoad();
        return contactUsePage;
    }

    @Override
    public String getUrl() {
        return BASE_URL;
    }

    @Override
    public void navigateTo() {
        navigate(this);
    }


}
