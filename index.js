var unicodeToChar = function(unicode) {
  String.fromCharCode(unicode);
};

var getGlyphs = function(font) {
  if (!font.glyphs || font.glyphs.length === 0) {
    console.log('No glyphs found in this font.');
    return;
  }

  var glyphs = font.glyphs.glyphs;
  var table  = []
    , glyph;

  for(glyphNo in glyphs) {
    glyph = glyphs[glyphNo];
    if (!glyph.unicode) {
      continue;
    }

    table.push(glyph.unicode);
  }

  return table;
};


module.exports.unicodeToChar = unicodeToChar;
module.exports.getGlyphs     = getGlyphs;


// List of the characters as text in a string:
// var glyphsList = getGlyphs(font).map(unicodeToChar).join('');
