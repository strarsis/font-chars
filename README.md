# font-chars
Lists the unicode codepoints/characters of a font loaded by opentype.js

[![david](https://david-dm.org/strarsis/font-chars.svg)](https://david-dm.org/strarsis/font-chars)

Heavily inspired by [character-map](https://www.npmjs.com/package/character-map) (which is a CLI tool).


Usage
-----
````
npm install font-chars
````

````
var opentype  = require('opentype.js')
  , fontChars = require('font-chars');

opentype.load('./path/to/font.ttf', function(err, font) {
	if (err) {
		console.log(err);
		return;
	}

	console.log(fontChars.getCodepoints(font));
});
````

The returned array contains unicode code points, they can be converted into human readable characters if needed.
