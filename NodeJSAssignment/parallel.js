var webdriver = require('selenium-webdriver');
var browsers = require('./browsers.json');
var a = require('./automateStatus.js');
var name = 0;
var queue = 0;
//var myModule = require('./test7.js');
var limit = 0;
var x = 0;
var i = 0;
var capabilities = '';

// Should print number of browsers in browsers.json file which is 10
a.valueAccess();
setTimeout(pre,3000);
console.log("Length of browsers.json="+browsers.length)
// var millisecondsToWait = 5000;
function def() {
    //   a.hello;
    a.valueAccess();
    setTimeout(function () {
        name = a.name;
    }, 3000);
}

function pre() {
    capabilities = browsers[0];
    name = a.name;
    limit = a.limit;
    queue = a.queue;
}

//console.log(hello.parallel_sessions_max_allowed);
function refreshData() {
    // x = 4;
    // def();
    // console.log("before loop");
    // function loop() {

    for (i = i; i < browsers.length; i++) {
        def();
        setTimeout(
            function () {
                name = a.name;
                callTest();
            },3000
        )
        break;
    }


    //loop();
    //console.log("after loop");
    //

    // setTimeout(refreshData, x * 1000);
} // refresh END
refreshData();
function callTest(){
    if(name<a.limit && queue<1){
        //console.log("call test:" + limit);
        capabilities=browsers[i];
        test();
        setTimeout(refreshData,2000);
        i++;
    }
    else{
        console.log("wait");
        setTimeout(refreshData,1000);
    }
}

//console.log(browsers[0]);
// For browsers.length is not equal to zero
// If parallel session is not zero. Hint: try importing automateStatus.js.
// Run this test

/* Test Start */
//var millisecondsToWait = 8000;

function test(){
    console.log("Inside Test " +(i+1));
    var driver = new webdriver.Builder().usingServer('http://hub-cloud.browserstack.com/wd/hub').withCapabilities(capabilities).build();

    driver.get('http://www.google.com').then(function(){

    driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack\n')
    .then(function(){
    driver.getTitle().then(function(title) {
    console.log(title);
    driver.quit();
            });
        });
    });
}
