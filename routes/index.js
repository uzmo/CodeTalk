var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET UI5 page. */
router.get('/ui5', function(req, res) {
  res.render('ui5', { title: 'ui5' });
});

module.exports = router;
