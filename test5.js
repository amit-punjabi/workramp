var webdriver = require('selenium-webdriver'), By = webdriver.By, until = webdriver.until;
var assert = require('assert')
var capabilities = {
 'browserName' : 'chrome'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://the-internet.herokuapp.com/dynamic_controls');

// Click 'Remove' button

driver.findElement(By.xpath('//*[@id="checkbox-example"]/button')).click();
// Verify if text 'It's gone!' exist
driver.sleep(5000);
driver.findElement(By.id('message')).getText().then(function(answer1){
if(assert.equal("It's gone!",answer1)==undefined){
    console.log("Success");
}
else{
    console.log("Fail");
}});
driver.sleep(2000);

// Click the 'Add' button
driver.findElement(By.xpath('//*[@id="checkbox-example"]/button')).click();

// Verify if text 'It's back!' exist

driver.sleep(10000);
driver.findElement(By.id('message')).getText().then(function(answer2){
if(assert.equal("It's back!",answer2)==undefined){
    console.log("Success");
}
else{
    console.log("Fail");
}});

driver.sleep(2000);

driver.quit();
