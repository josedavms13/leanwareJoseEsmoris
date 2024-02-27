package navbar.services;

import base.BaseTest;
import io.qameta.allure.testng.Tag;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import web.components.navbar.NavbarComponent;
import web.components.servicesmodal.ServicesModal;
import web.pages.homepage.HomePage;

import java.util.List;

import static java.util.Arrays.asList;

public class NavbarServicesModalTest extends BaseTest {
    private static final List<String> TECHNOLOGIES = asList("React.js", "Python", "Angular", "Vue.JS", "React Native", "Flutter", "Swift");

    @Tag("ServicesModal")
    @Test
    public void verifyPythonIsInTheTechnologiesList() {
        HomePage homePage = new HomePage(true);
        NavbarComponent navbar = homePage.getNavbarComponent();
        ServicesModal servicesModal = navbar.hoverOnServicesOption();
        List<String> technologies = servicesModal.getTechnologies();
        Assert.assertTrue(technologies.contains("Python"), "Verify that Python is in the technologies list");
    }
}
