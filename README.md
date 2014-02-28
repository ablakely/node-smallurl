node-smallurl
=============

Node.js library for [SmallURL](http://smallurl.in/)

# Usage

```javascript
var SmallURL = require("smallurl");

var shortener = new SmallURL();  // Accepts key as arg

shortener.shorten("http://google.com", function(err, url) {
	console.log(url);
});
```
