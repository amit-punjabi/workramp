var config = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test BrowserStack' : function (client) {
    client
      .url('https://www.browserstack.com/')
      .waitForElementVisible('body', 1000)
      .assert.title('Browser Testing On The Most Reliable Platform | BrowserStack')
      .end();
  }
};