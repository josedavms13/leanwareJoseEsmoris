package web.pages.vegetationAppliedLOD;

import org.openqa.selenium.By;
import web.base.BasePage;

import static java.util.Arrays.asList;

public class VegetationAppliedLODPage extends BasePage {

    private static final String URL = "https://repost.aws/questions/QUndEqT6iPSvSLRQOw38r9Ow/1-6-problem-with-vegetation-applied-via-terrain-layers";

    private By problemTitle = By.cssSelector("[data-test='question-title']");
    private By problemDescription = By.cssSelector("[class*='QuestionView_descriptionContainer']");
    private By closeAlert = By.cssSelector("[data-test='closed-alert']");
    private By tagsLabel = By.cssSelector("[data-test='rendered-title-tags']");


    public VegetationAppliedLODPage() {
        super(URL);
        setIsVisibleCheckFlags(asList(problemTitle, problemDescription));
    }

    public String getTitle() {
        return getElement(problemTitle).getText();
    }

    public String getDescription() {
        return getElement(problemDescription).getText();
    }

    public String getClosedAlertText() {
        return getElement(closeAlert).getText();
    }

    public String getTagsLabelText() {
        return getText(tagsLabel);
    }
}
