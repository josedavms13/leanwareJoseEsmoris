package web.components.navbar;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import web.base.WebBase;

import java.util.List;

import static java.lang.String.format;
import static java.util.Arrays.asList;

public class NavbarComponent extends WebBase {

    private By languageDropdownButton = By.cssSelector("[data-test='language-dropdown']");

    private By languageDropdown = By.cssSelector("[class*='LanguageSelect_menu']");

    public NavbarComponent(String url, List<By> isVisibleCheckFlags) {
        super(url);
        setIsVisibleCheckFlags(isVisibleCheckFlags);
    }

    public NavbarComponent setLanguage(NavbarLanguages language) {
        return setLanguage(language, false);
    }

    public NavbarComponent setLanguage(NavbarLanguages language, boolean forceToSwitch) {
        if (isLanguageAlreadySet(language)) {
            if (forceToSwitch) {
                List<NavbarLanguages> languages = asList(NavbarLanguages.values());
                NavbarLanguages newLanguage = languages.stream().filter(lang -> !lang.toString().equalsIgnoreCase(language.toString())).findFirst().get();
                setLanguage(newLanguage);
                return setLanguage(language);
            } else return this;
        }
        click(languageDropdownButton);

        if (!isMenuOpen()) {
            click(languageDropdownButton);
        }
        try {
            WebElement element = getLanguageOptionFromDropdown(language);
            waitFor(element);
            click(element);
            waitForPageToLoad();
            return this;
        } catch (NoSuchLanguageException e) {
            getLogger().error(e.getMessage());
            throw new RuntimeException(e.getMessage());
        }
    }


    public NavbarLanguages getCurrentLanguage() {
        String currentLanguage = getElement(languageDropdownButton).getText();
        List<NavbarLanguages> languages = asList(NavbarLanguages.values());
        return languages.stream().filter(lang -> lang.toString().equalsIgnoreCase(currentLanguage)).findFirst().get();
    }

    public boolean isLanguageAlreadySet(NavbarLanguages language) {
        NavbarLanguages currentLanguage = getCurrentLanguage();
        return currentLanguage.equals(language);
    }

    public boolean isMenuOpen() {
        try {
            return getElement(By.className("ant-dropdown-open")).isDisplayed();
        } catch (Exception e) {
            return false;
        }
    }

    private WebElement getLanguageOptionFromDropdown(NavbarLanguages language) throws NoSuchLanguageException {
        String stringedSelector = format("[class*='LanguageSelect_menuItem'][data-menu-id*='%s']", language.value);
        By selector = By.cssSelector(stringedSelector);
        try {
            WebElement element = getElement(selector);
            waitFor(element);
            return element;
        } catch (NoSuchElementException e) {
            throw new NoSuchLanguageException(stringedSelector);
        }
    }

}
