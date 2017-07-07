import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * Created by curap on 4/07/2017.
 */
public class StepDefinition {

    @Given("^sample feature file is ready$")
    public void givenStatement(){
        System.out.println("Given statement executed successfully. ");
    }

    @Given("^I run the feature file$")
    public void whenStatement(){
        System.out.println("When statement executed successfully. ");
    }

    @Then("^run should be successful$")
    public void thenStatement(){
        System.out.println("Then statement executed successfully. ");
    }
}