var Fs = require( "fs" );
var images = Fs.readdirSync( "images" );
var template = Fs.readFileSync( "tools/template.less" ).toString();
var size = "24px";
var image, emojiName, temp, output;

for ( var i = 0; i < images.length; i++ ) {
  image = images[i];
  // Deal with images which doesn't start with a dot (OS files)
  if ( !(/^[^\.]/.test( image )) ) {
    continue;
  }
  emojiName = image.split( "." )[0];

  temp = "";
  temp = template.replace( /@emoji-path/g, image );
  temp = temp.replace( /@emoji/g, emojiName );
  temp = temp.replace( /@size/g, size );

  output += temp;
}

Fs.writeFileSync("angular-emoji.css", output);
