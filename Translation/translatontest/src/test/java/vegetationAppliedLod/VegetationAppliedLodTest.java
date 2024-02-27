package vegetationAppliedLod;

import base.BaseTest;
import languageStrings.vegetationAppliedLod.LangVegetationApplied;
import languageStrings.vegetationAppliedLod.LangVegetationAppliedLodDto;
import org.junit.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import services.translate.enums.Languages;
import utils.Logging;
import web.components.navbar.NavbarLanguages;
import web.pages.vegetationAppliedLOD.VegetationAppliedLODPage;

public class VegetationAppliedLodTest extends BaseTest implements Logging {
    VegetationAppliedLODPage vegetationAppliedLODPage;

    @BeforeMethod
    public void setUp() {
        vegetationAppliedLODPage = new VegetationAppliedLODPage();
        vegetationAppliedLODPage.getNavbarComponent().setLanguage(NavbarLanguages.ENGLISH);
    }

    @Test(description = "Test labels are different between languages")
    public void labelsAreDifferentBetweenLanguages() {
        getLogger().info("Test labels are different between languages");
        String tagLabel = vegetationAppliedLODPage.getTagsLabelText();
        String closedAlertText = vegetationAppliedLODPage.getClosedAlertText();
        vegetationAppliedLODPage.getNavbarComponent().setLanguage(NavbarLanguages.SPANISH, false);
        String newTagLabel = vegetationAppliedLODPage.getTagsLabelText();
        String newClosedAlertText = vegetationAppliedLODPage.getClosedAlertText();

        Assert.assertNotEquals("Tag label has changed with when language changes",newTagLabel, tagLabel);
        Assert.assertNotEquals("Closed alert has changed when language changes" ,newClosedAlertText, closedAlertText);
    }

    @Test(description = "Tags and closed alerts text are translated to Spanish correctly")
    public void tagsAndClosedAlertsTextAreTranslatedCorrectly() {
        getLogger().info("Tags and closed alerts text are translated to Spanish correctly");
        vegetationAppliedLODPage.getNavbarComponent().setLanguage(NavbarLanguages.SPANISH, false);

        LangVegetationAppliedLodDto translatedClass = LangVegetationApplied.createLangVegetationApplied(Languages.SPANISH);

        String currentTagLabel = vegetationAppliedLODPage.getTagsLabelText();
        String currentClosedAlertText = vegetationAppliedLODPage.getClosedAlertText();

        Assert.assertEquals("Tag is correctly translated to Etiquetas", currentTagLabel, translatedClass.getTranslatedTagLabel());
        Assert.assertEquals("Closed alert has changed when language changes", currentClosedAlertText, translatedClass.getTranslatedClosedAlert());
    }
}
