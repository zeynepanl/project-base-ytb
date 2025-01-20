var express = require('express');
var router = express.Router();

let isAuthenticated = true;

router.all('*', (req, res, next) => {
  if (isAuthenticated) {
    next();
  }
  else {
    res.json({
      success: false,
      error: "Not authenticated"
    });
  }
});


router.get('/', function(req, res, next) {
  res.send('success: true');
});

module.exports = router;
