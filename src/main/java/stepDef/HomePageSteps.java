package stepDef;

import org.junit.Assert;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.utils.TestBase;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class HomePageSteps extends TestBase
{
	LoginPage login = new LoginPage();
	HomePage homePage;
	
	@Given("^User open browser$")
	public void user_open_browser() throws Throwable {
		TestBase.initialization();
	    //throw new PendingException();
	}

	@Then("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
	    String title= login.validateLoginPageTitle();
	    Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	    //throw new PendingException();
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
		  homePage = login.login(prop.getProperty("username"), prop.getProperty("password"));
		    //throw new PendingException();
	}

	@Then("^home page is displayed$")
	public void home_page_is_displayed() throws Throwable {
		String homeTitle= homePage.verifyHomePageTitle();
		   Assert.assertEquals("CRMPRO", homeTitle);
		    //throw new PendingException();
	}

	@Then("^validate loggedin username$")
	public void validate_loggedin_username() throws Throwable {
		 boolean flag= homePage.verifyCorrectUserName();
		 Assert.assertTrue(flag);
		    //throw new PendingException();
	}
}
