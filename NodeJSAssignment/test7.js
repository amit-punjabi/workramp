var count = require('./parallel.js')
var browsers = require('./browsers.json');
var webdriver = require('selenium-webdriver');
var i=""
//count;
var fn ="";
exports.fn = function abc() {
    i=count.i;
    console.log(i);
    var driver = new webdriver.Builder().
    usingServer('http://hub-cloud.browserstack.com/wd/hub').
    withCapabilities(browsers[i]).
    build();

driver.get('http://www.google.com').then(function () {
    driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack\n').then(function () {
        driver.getTitle().then(function (title) {
            console.log(title);
            driver.quit();
        });
    });
});
  // console.log(obj.parallel_sessions_running);
}


// var j = count.i;
// console.log(browsers.length)

// var driver = new webdriver.Builder().usingServer('http://hub-cloud.browserstack.com/wd/hub').withCapabilities(browsers[j]).build();
//     driver.get('http://www.google.com');
//     debugger;
//     //console.log("before");
//     driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack\n');
//     driver.getTitle().then(function (title) {
//       console.log(title);
//     });
//     driver.quit();


//Input capabilities
var capabilities = {
    'browserName': 'Chrome',
    'browser_version': '62.0',
    'os': 'Windows',
    'os_version': '10',
    'resolution': '1024x768',
    'browserstack.user': 'amitpunjabi1',
    'browserstack.key': 'yMtYz9ThrcPcCDAnBezs',
    //'project' : 'project1_1',
    //'build' : 'build1_1',
    //'name' : 'Sample'
}
var browsers = require('./browsers.json');
//console.log(browsers.length)

