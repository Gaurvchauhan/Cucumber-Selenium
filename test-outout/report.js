$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Selenium Notes/Testing Framework/com.selenium.java/src/main/java/com/qa/features/freeCRM.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Free CRM Home page Test",
  "description": "",
  "id": "free-crm-application-test;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate loggedin username",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_open_browser()"
});
formatter.result({
  "duration": 9114811918,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 14093369,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 1048161,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy13.sendKeys(Unknown Source)\r\n\tat com.qa.pages.LoginPage.login(LoginPage.java:42)\r\n\tat stepDef.HomePageSteps.user_enters_username_and_password(HomePageSteps.java:33)\r\n\tat ✽.Then user enters username and password(D:/Selenium Notes/Testing Framework/com.selenium.java/src/main/java/com/qa/features/freeCRM.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.home_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.validate_loggedin_username()"
});
formatter.result({
  "status": "skipped"
});
});