var fs          = require("fs");
var SmallURL	= require("../../index.js");
var assert	= require("assert");

var config = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
var shortener = new SmallURL();

shortener.shorten("http://google.com", function(err, url) {
	assert.ok(url, !null);
});
