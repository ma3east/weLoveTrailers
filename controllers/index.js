var express = require('express');
var router = express.Router();
var expressJWT = require('express-jwt');
var config = require('../config/config');
var secret = config.secret;

//middleware to check for token

//leave this out for now so can test sight without having to worry about access
// router.use('/api', expressJWT({secret: config.secret})
//   .unless({path: ['/api/auth', '/api/signup', '/api/login'], method: 'POST'}));

router.use(function (error, request, response, next) {
  if (error.name === 'UnauthorizedError') {
    response.status(401).json({message: 'There was a problem, do you have a valid token!'});
  }
});

// router.use('/api', router);
router.use('/api/users', require('./users'));
router.use('/api/movies', require('./movies'));
router.use('/api/trailers', require('./trailers'));

router.use('/api/auth', require('./authenticationController'));

router.get('/', function(req, res) {
  res.render("index");
});

module.exports = router;


