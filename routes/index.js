var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  var filenames = fs.readdirSync(__dirname + '/../public/sound');
  var files = [];

  for (var i = 0; i < filenames.length; i++)
  {
    splitted = filenames[i].split(" ");
    number = splitted[0];
    splitted.shift(); // removes first element
    name = splitted.join(" ");
    files.push({
        'number': number,
        'name': name,
        'filename': filenames[i]
    });
  };

  console.log(files);
  res.render('index', {files: files});
});

module.exports = router;
