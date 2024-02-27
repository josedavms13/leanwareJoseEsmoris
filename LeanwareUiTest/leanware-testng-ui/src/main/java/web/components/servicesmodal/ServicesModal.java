package web.components.servicesmodal;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import web.base.WebBase;

import java.util.List;
import java.util.stream.Collectors;

import static java.util.Arrays.asList;


public class ServicesModal extends WebBase {

    private static final String MODAL_CONTAINER_SELECTOR = "div[class*='megaMenuWrapper'i]";


    @FindBy(css = MODAL_CONTAINER_SELECTOR)
    private WebElement modalContainer;

    @FindBy(css = "a[href*='https://www.leanware.co/technologies']")
    private List<WebElement> technologiesList;

    public ServicesModal() {
        super();
        setCheckFlags(asList(modalContainer));
    }

    public List<String> getTechnologies() {
        return technologiesList.stream().map(WebElement::getText).collect(Collectors.toList());
    }
}
