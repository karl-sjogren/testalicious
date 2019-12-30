/* global require, module */
const fs = require('fs');
const config = require('../public/fonts/config');

// This method is used to read the fontello config and output
// the icons as Less mixins
const fontelloToLess = function fontelloToLess(outputPath) {
  const lineBreak = '\r\n';
  let output = '#icons {' + lineBreak;
  for(let glyph of config.glyphs) {
    output += `  .${glyph.css}() {` + lineBreak;
    output += `    content: '\\${glyph.code.toString(16)}';` + lineBreak;
    output += `  }` + lineBreak;
  }
  output += '}';

  fs.writeFileSync(outputPath, output);
  //console.log(`Output new less content to ${outputPath}`);
};

module.exports = fontelloToLess;

// Great for debug!
//fontelloToLess('../app/styles/fontello-icon-definitions.less');