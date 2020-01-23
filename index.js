const fs = require('fs');
const pngitxt = require('png-itxt');

console.log('start');
if (process.argv.length >= 3) {
  fs.createReadStream(process.argv[2]).pipe(
    pngitxt.get(function(err, data) {
      if (!err && data) {
        console.log(data.keyword, ':', data.value);
      }
    })
  );
} else {
  console.error('Set the image path to 3rd arg');
}
