package web.pages.contactus;

import interfaces.Navigable;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import web.base.BasePage;

import static java.util.Arrays.asList;

public class ContactUsePage extends BasePage implements Navigable {

    private static final String PATH = "/contact";

    private static final String FORM_CONTAINER_SELECTOR = "form[aria-label*='Main Form Leanware']";

    @FindBy(css = FORM_CONTAINER_SELECTOR)
    private WebElement formContainer;

    @FindBy(css = "[data-field-type='CONTACTS_FIRST_NAME'] input[type='text']")
    private WebElement fullNameInput;

    @FindBy(css = "[data-field-type='CONTACTS_FIRST_NAME'] [data-hook='errormessagewrapper-message'")
    private WebElement fullNameEmptyFieldError;

    @FindBy(css = "[data-field-type='CONTACTS_EMAIL'] input[type='email']")
    private WebElement emailInput;

    @FindBy(css = "[data-field-type='CONTACTS_EMAIL'] [data-hook='field-error-email']")
    private WebElement emailEmptyFieldError;

    @FindBy(css = FORM_CONTAINER_SELECTOR + " " + "textarea")
    private WebElement tellUsAboutYourProjectInput;

    @FindBy(css = "[data-field-type='TEXT_AREA'] [data-hook='field-error-long_answer']")
    private WebElement tellUsAboutYourProjectEmptyFieldError;

    @FindBy(css = "[data-field-type='SUBMIT_BUTTON']")
    private WebElement submitButton;

    public ContactUsePage(boolean autoNavigate) {
        super(PATH, autoNavigate);
        setCheckFlags(asList(formContainer, fullNameInput, emailInput, tellUsAboutYourProjectInput));
    }

    public void submitForm() {
        hoverOnElement(submitButton);
        click(submitButton, true);
        jsClick(submitButton);
    }

    public boolean isNameFieldErrorDisplayed() {
        return hasElementVisible(fullNameEmptyFieldError);
    }

    public boolean isEmailFieldErrorDisplayed() {
        return hasElementVisible(emailEmptyFieldError);
    }

    public boolean isTellUsAboutYourProjectErrorDisplayed() {
        return hasElementVisible(tellUsAboutYourProjectEmptyFieldError);
    }

    public ContactUsePage setFullName(String fullName) {
        typeIn(fullNameInput, fullName);
        return this;
    }

    public ContactUsePage setEmail(String email) {
        typeIn(emailInput, email);
        return this;
    }

    public String getEmailError() {
        return emailEmptyFieldError.getText();
    }

    @Override
    public String getUrl() {
        return BASE_URL + PATH;
    }

    @Override
    public void navigateTo() {
        navigate(this);
    }

}
