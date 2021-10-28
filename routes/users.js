var express = require('express');
var router = express.Router();
var numb = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  numb = numb + 1;
  res.send(`User accesses are: ${numb}`)
});

module.exports = router;
