package contactus;


import base.BaseTest;
import org.junit.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import utils.Logging;
import web.pages.contactus.ContactUsePage;

public class ContactUsTest extends BaseTest implements Logging {

    private static final String INVALID_EMAIL_ERROR = "Enter an email address like example@mysite.com.";

    private ContactUsePage contactUsPage;

    @BeforeMethod
    public void setUp() {
        contactUsPage = new ContactUsePage(true);
        contactUsPage.isVisible();
    }

    @Test
    public void emptyFieldsTest() {
        getLogger().info("Testing empty fields");
        contactUsPage.submitForm();
        Assert.assertTrue("Name error is present since name field is empty", contactUsPage.isNameFieldErrorDisplayed());
        Assert.assertTrue("Email error is present since email field is empty", contactUsPage.isEmailFieldErrorDisplayed());
        Assert.assertTrue("Tell us about your project error is present since tell us about your project field is empty", contactUsPage.isTellUsAboutYourProjectErrorDisplayed());
    }

    @Test
    public void ifAFieldIsNotEmptyThenTheErrorWontDisplayed() {
        getLogger().info("Testing if a field is not empty then the error wont be displayed");
        contactUsPage.setFullName("<NAME>");
        contactUsPage.submitForm();
        Assert.assertFalse("Name error is not present since name field is not empty", contactUsPage.isNameFieldErrorDisplayed());
        Assert.assertTrue("Email error is present since email field is empty", contactUsPage.isEmailFieldErrorDisplayed());
        Assert.assertTrue("Tell us about your project error is present since tell us about your project field is empty", contactUsPage.isTellUsAboutYourProjectErrorDisplayed());
    }

    @Test
    public void cannotSubmitFormWithInvalidEmail() {
        getLogger().info("Testing you cannot submit form with invalid email");
        contactUsPage.setFullName("<NAME>");
        contactUsPage.setEmail("Email without 'at' symbol");
        contactUsPage.submitForm();
        String emailError = contactUsPage.getEmailError();
        Assert.assertEquals("Email error" ,emailError, INVALID_EMAIL_ERROR);
    }
}
