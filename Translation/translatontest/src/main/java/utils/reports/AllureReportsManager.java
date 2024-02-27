package utils.reports;

import utils.Logging;

import java.io.File;

public class AllureReportsManager implements Logging {
    private static final String ALLURE_REPORT_PATH = System.getProperty("user.dir") + "\\allure-results";

    public void cleanAllureReports() {
        cleanDirectory(ALLURE_REPORT_PATH);
    }

    private void cleanDirectory(String directoryPath) {
        File directory = new File(directoryPath);
        File[] files = directory.listFiles();

        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    cleanDirectory(file.getAbsolutePath());
                } else {
                    file.delete();
                }
            }
        }
    }
}
