// var terms = [
//    'javascript',
//    'selenium',
//    'webdriver'
// ];
var webdriver = require('selenium-webdriver');

var flows = terms.map(function(term) {
 return webdriver.promise.createFlow(function() {
   var driver = new webdriver.Builder().build();

   driver.get('http://www.google.com');
   driver.findElement(webdriver.By.name('q')).sendKeys(term);
   driver.findElement(webdriver.By.name('btnG')).click();
   driver.getTitle().then(function(title) {
     if (title !== (term + ' - Google Search')) {
       throw Error('Unexpected title: ' + title);
     }
   });
 });
});

webdriver.promise.fullyResolved(flows).then(function() {
 console.log('All tests passed!');
});