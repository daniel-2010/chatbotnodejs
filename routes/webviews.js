
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  //res.send('Birds home page');
  res.render('newsletter-settings');
});

module.exports = router;

