package homepage;

import base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import web.pages.contactus.ContactUsePage;
import web.pages.homepage.HomePage;

public class HomePageTest extends BaseTest {

    private HomePage homePage;



    @Test
    public void testHomePageLoadsCorrectly() {
        homePage = new HomePage(true);
        Assert.assertTrue(homePage.isVisible(), "Home page is loaded correctly");
    }

    @Test(testName = "Click on Contact Us Button Navigates to Contact Page")
    public void ClickingOnContactUsButtonNavigatesToContactPage() {
        homePage = new HomePage(true);
        ContactUsePage contactUs = homePage.clickContactUsButton();
        Assert.assertTrue(contactUs.isVisible(), "Contact us page is loaded correctly");
    }
}
