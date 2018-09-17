var webdriver = require('selenium-webdriver'), Key = webdriver.Key, By = webdriver.By, until = webdriver.until;
var assert = require('assert')
var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://the-internet.herokuapp.com/key_presses');

// Send 'ENTER' key on the page
driver.actions().sendKeys(Key.ENTER).perform();
// Verify if text 'You entered: ENTER' exist
driver.findElement(By.id("result")).getText().then(function(result){
    if(assert.equal("You entered: ENTER",result,"FAIL")==undefined){
        console.log("SUCCESS")
    }
})
driver.quit();