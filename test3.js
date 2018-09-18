var webdriver = require('selenium-webdriver'), By = webdriver.By, until = webdriver.until;
var assert = require('assert')
var capabilities = { 'browserName': 'chrome' }

var driver = new webdriver.Builder().usingServer('http://10.100.100.226:4444/wd/hub').withCapabilities(capabilities).build();

//Opens http://demo.guru99.com/popup.php
driver.get("http://demo.guru99.com/popup.php");


//driver.findElement(By.xpath("/html/body/p/a"));
//Clicking click here
driver.wait(until.titleIs('Guru99 Bank Home Page'), 1000)
    .then(function () {
        driver.findElement(By.linkText('Click Here')).click();
    });
var parent_window = driver.getWindowHandle();

//Switches to new window
var child_window = driver.getAllWindowHandles().then(function gotWindowHandles(allHandles){driver.switchTo().window(allHandles[allHandles.length-1]);});
driver.wait(until.urlIs('http://demo.guru99.com/articles_popup.php'), 10000)
.then(function(){
    driver.getCurrentUrl().then(url => {console.log('current url: "' + url + '"');});
});
//In the email id, enters 'support@bstack.com', click 'Submit'
driver.findElement(By.name('emailid')).sendKeys("support@bstack.com");
driver.findElement(By.name('btnLogin')).click();

//Assert if 'This access is valid only for 20 days.' exists
driver.sleep(10000);
driver.findElement(By.css("h3")).getText().then(function(ans){

//console.log(ans.value_);
if(assert.equal("This access is valid only for 20 days.",ans,"FAIL")==undefined){
    console.log("Success");
}
});
//Switch to first window
driver.switchTo().window(parent_window);
driver.sleep(5000);
driver.findElement(By.xpath("//body/p/a")).getText().then(function(c){

//Assert if 'Click here' text exists
if(assert.equal("Click Here",c,"FAIL")==undefined){
    console.log("Success");
}});
driver.quit();