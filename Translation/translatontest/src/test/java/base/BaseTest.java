package base;

import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import utils.Logging;
import utils.reports.AllureReportsManager;
import web.base.WebBase;

public class BaseTest implements Logging {

    @BeforeSuite()
    public static void testSetUp() {
        AllureReportsManager allureReportsManager = new AllureReportsManager();
        allureReportsManager.cleanAllureReports();
    }

    @AfterSuite
    public static void tearDown() {
        WebBase.dispose();
    }
}
