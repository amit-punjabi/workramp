var webdriver = require('selenium-webdriver');

proxy = require('selenium-webdriver/proxy');

var capabilities = { 'browserName': 'firefox' }

var driver = new webdriver.Builder().usingServer("http://localhost:4444/wd/hub").withCapabilities(capabilities).usingWebDriverProxy("http://10.100.100.226:8118").build();

driver.get('https://www.google.com');
    driver.quit();