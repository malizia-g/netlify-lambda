var express = require('express');
var router = express.Router();
const serverless = require ('serverless-http');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
module.exports.handler= serverless(router); 