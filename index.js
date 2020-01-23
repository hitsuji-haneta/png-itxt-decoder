const fs = require('fs');
const pngitxt = require('png-itxt');

console.log('start');

fs.createReadStream('image/sample.png').pipe(
  pngitxt.get(function(err, data) {
    if (!err && data) {
      console.log(data.keyword, ':', data.value);
    }
  })
);
