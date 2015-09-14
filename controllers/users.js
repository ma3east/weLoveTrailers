var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res){
  User.find(function(err, users){
    if (err) {
      res.status(404).json({err: err, message: 'There are no users in the database.'});
    } else {
      res.status(200).send(users);
    }
    
  });
});



module.exports = router