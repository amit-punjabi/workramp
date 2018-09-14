var webdriver = require('selenium-webdriver');
var capabilities = { 'browserName': 'firefox' }

var driver = new webdriver.Builder().withCapabilities(capabilities).usingWebDriverProxy("http://10.100.100.226:8118").build();

driver.get('https://www.facebook.com');
    driver.quit();