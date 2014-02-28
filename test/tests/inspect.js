var fs          = require("fs");
var SmallURL	= require("../../index.js");
var assert	= require("assert");

var config = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
var shortener = new SmallURL();

shortener.inspect("http://google.com", function(err, stats) {
	assert.ok(stats, !null);
});
