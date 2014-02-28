var qs = require("querystring");

function SmallURL(key) {
	this.http	= require("request");
	this.key	= key;
}

SmallURL.prototype = {
	shorten: function(url, opts, cb) {
		if (typeof opts == "function" && cb == undefined) {
			cb   = opts;
			opts = {anon: false};
		}

		opts.action = "shorten";
		opts.type   = "json";
		opts.key    = this.key;
		opts.url    = url;

		this.http("http://api.smallurl.in/?"+qs.stringify(opts), function(err, resp, body) {
			cb(err, JSON.parse(body));
		});
	},

	inspect: function(url, cb) {
		this.http("http://api.smallurl.in/?action=inspect&short="+url+"&key="+this.key, function(err, resp, body) {
			cb(err, JSON.parse(body));
		});
	}
};

module.exports = SmallURL;
