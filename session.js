var https = require('https')

var username = 'amitpunjabi2'
var passw = '9GNx3ddF2zRF39bsy6py'

var options = {
    host: 'api.browserstack.com',
    port: 443,
    path: '/automate/sessions/10cf77a83f658e26bf74b3f376ffa5bdaccdb2a2.json',
    // authentication headers
    headers: {
        'Authorization': 'Basic ' + new Buffer(username + ':' + passw).toString('base64')
    }
};

//this is the call
request = https.get(options, function (res) {
    var body = "";
    res.on('data', function (data) {
        body += data;
    });
    res.on('end', function () {
        //here we have the full response, html or json object
        console.log(body);
    })
    res.on('error', function (e) {
        console.log("Got error: " + e.message);
    });
});