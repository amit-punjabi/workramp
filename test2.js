var webdriver = require('selenium-webdriver'), By = webdriver.By, until = webdriver.until;
var assert = require('assert')
var capabilities = {'browserName' : 'chrome'}

var driver = new webdriver.Builder().usingServer('http://10.100.100.226:4444/wd/hub').withCapabilities(capabilities).build();
//Opens https://the-internet.herokuapp.com/javascript_alerts
driver.get('https://the-internet.herokuapp.com/javascript_alerts');

// Click 'Click for JS Alert'.
driver.findElement(By.xpath('//button[1]')).click();
driver.switchTo().alert().accept();
// Click 'Click for JS Confirm'. Clicks 'OK'. Assert the Result value 'You clicked: Ok'
driver.findElement(By.xpath('//*[@id="content"]/div/ul/li[2]/button')).click()
driver.switchTo().alert().accept();
var result = driver.findElement(By.id('result')).getText()
assert.equal("You clicked: Ok",result.value_)
// Click 'Click for JS Prompt'. Enter 'BrowserStack' in the prompt. Assert the Result value 'You entered: BrowserStack' Screen reader support enabled.
driver.findElement(By.xpath('//*[@id="content"]/div/ul/li[3]/button')).click()
driver.switchTo().alert().sendKeys("BrowserStack")
driver.switchTo().alert().accept()

var result = driver.findElement(By.id('result')).getText()
assert.equal("You entered: BrowserStack",result.value_)
driver.quit();