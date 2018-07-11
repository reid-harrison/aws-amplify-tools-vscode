var jshint = require("simplebuild-jshint");

jshint.checkOneFile({
    options: {
        file: 'docs_code.js',
    }, function() {
        console.log("OK");
    }, function(message) {
        console.log(message);
    }
});