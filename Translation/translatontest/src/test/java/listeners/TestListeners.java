package listeners;

import org.testng.ISuite;
import org.testng.ISuiteListener;
import utils.reports.AllureReportsManager;

public class TestListeners implements ISuiteListener {
    @Override
    public void onStart(ISuite suite) {
        AllureReportsManager allureReportsManager = new AllureReportsManager();
        allureReportsManager.cleanAllureReports();
    }

}
