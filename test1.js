var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
//Opens facebook.com
driver.get('https://www.facebook.com');
//Then navigates to browserstack.com
driver.get('https://www.browserstack.com');
//Use selenium command to simulate 'back' button
driver.navigate().back();
//Use selenium command to simulate 'forward' button
driver.navigate().forward();
//Use selenium command to simulate 'back' button
driver.navigate().back();

//Verify if current page title is 'Facebook – log in or sign up'
driver.getTitle().then(function (websiteTitle) {
    console.log(websiteTitle);
});
driver.wait(until.titleIs('Facebook – log in or sign up'), 1000)
    .then(function () {
        console.log('Page title is: Facebook – log in or sign up');
    });



//Print Current URL of page
driver.getCurrentUrl().then(url => {console.log('current url: "' + url + '"');});


//Verify if current URL is 'https://www.facebook.com/'
driver.wait(until.urlIs('https://www.facebook.com/'), 1000)
    .then(function () {
        console.log('URL is: https://www.facebook.com/');
    });
    
driver.quit();