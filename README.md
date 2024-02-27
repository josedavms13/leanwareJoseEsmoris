# Leanware Tech Test

Each folder represents one of the deliverables.
The focus of these projects is the architecture and implementation of different mechanisms to facilitate the scalability, separating the logic from the tests.


---
# LeanwareUiTest

Inside, you will find the directory that contains the project.

The project was built using TestNg as the test runner. It will generate an Allure Result that can be served as a HTML file.
It uses Page Factory on top of Page Object Model to facilitate scalability and reusability.

### Technologies

- Building Tool: Maven.
- Test runner: TestNg.
- Automation: Selenium
- Reports: Allure.

### Running Tests

To run test, navigate to the project directory `LeanwareUiTest/leanware-testng-ui`, `mvn install` to get the dependencies, and run `mvn clean test`.

### See test execution report

Having allure installed, you can run `allure serve` on the root of the project.


## Points of improvement

- Currently the project does not support multiple browsers, however the way it is set up allows it to be implemented easily.
- It does not support parallel execution, but the tests are written to allow them to run in parallel.
- Due the nature of the tests, parametrization isn't required. But parametrization can be implemented easily.

---

# TranslationTest

It was built using Page Object Model without Page Factory. It uses Allure to generate test results reports.

The project has the goal of being scalable. It uses the idea of Factory design pattern to get the translated strings that will be used to evaluate the page behavior.

### Technologies

- Building Tool: Maven.
- Test runner: TestNg.
- Automation: Selenium
- Reports: Allure.

### Running Tests

To run test, navigate to the project directory `LeanwareUiTest/leanware-testng-ui`, `mvn install` to get the dependencies, and run `mvn clean test`.


## Points of improvement

- Only few tests were written and due the nature of the Amazon page some tests have `stale element` errors.

# LoadTesting

It is a performance test for `https://www.themealdb.com/api/json/v1/1/random.php`.

### Technologies

- JMeter.

### Running Tests

Having JMeter installed and path configured.
To run test generating test results report, navigate to the project directory and run `jmeter -n -t LoadingTestingPlan.jmx -l LeadTest.csv -e -o /REPORT`

This will generate generated test results HTML report in the /REPORT directory.

## Points of improvement
- I would use a CI/CD tool like jenkins to run the test.
- Due the JMeter configuration, I would dockerize the environment to make it easier to run and set up.