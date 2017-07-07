$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.",
  "tags": [
    {
      "name": "@smokeTest",
      "line": 1
    }
  ],
  "description": "",
  "name": "To Test my cucumber test is running I want to run a sample feature file.",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.;cucumber-setup",
  "description": "",
  "name": "cucumber setup",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "sample feature file is ready",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I run the feature file",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "run should be successful",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "StepDefinition.givenStatement()"
});
formatter.result({
  "duration": 649416894,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.whenStatement()"
});
formatter.result({
  "duration": 86261,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.thenStatement()"
});
formatter.result({
  "duration": 98929,
  "status": "passed"
});
});