describe("Workramp test 10", function() {
    it("Iterates through each image and inspect that it finished loading and has a defined width", function() {
        browser.ignoreSynchronization = true;
        browser.get("http://the-internet.herokuapp.com/broken_images");
        setTimeout(function(){
            var elem = element(by.xpath('/html/body'));
        var images = element(by.getElementsByTagName('example')).getText().then(function(ghi){
                console.log(ghi);
        });
        // console.log(images[0]);

        // var imgs = element(by.getElementsByTagName('img'));
            // loaded = 0;
            // console.log(imgs);
        // for (var i = 0; i < imgs.length; i++) {
        //     if (imgs[i].naturalWidth > 0) {
        //         loaded = loaded + 1;
        //     };
        // };
    }, 6000);

    browser.executeAsyncScript(function (callback) {
        var imgs = document.getElementsByTagName('img'),
            loaded = 0;
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].naturalWidth > 0) {
                loaded = loaded + 1;
            };
        };
        callback(imgs.length - loaded);
     }).then(function (brokenImagesCount) {
        expect(brokenImagesCount).toBe(2);
    });


    });
});