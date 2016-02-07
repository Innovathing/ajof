var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */


router.get('/', function(req, res, next) {
  var files = fs.readdirSync(__dirname + '/../public/sound');
  console.log(files);
  res.render('index', {files: files});
});

module.exports = router;
