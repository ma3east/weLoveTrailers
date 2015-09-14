var express = require('express');
var router = express.Router();

// router.use('/api', router);
router.use('/api/users', require('./users'));
router.use('/api/movies', require('./movies'));
router.use('/api/trailers', require('./trailers'));

router.get('/', function(req, res) {
  res.render("index.html");
});


//get api index
// router.get('/api', function(req, res) {
//   res.json({ message: 'This is a call to the API index.' });

// });


module.exports = router;


