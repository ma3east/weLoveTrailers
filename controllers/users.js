var express = require('express');
var router = express.Router();
var User = require('../models/user');


//get list of users - working
router.get('/', function(req, res){
  User.find(function(err, users){
    if (err) {
      res.status(404).json({err: err, message: 'There are no users in the database.'});
    } else {
      res.status(200).send(users);
    }
    
  });
});

//find a single user - working
router.get('/:user_id', function(req, res){
  User.findById(req.params.user_id, function(err, user){
    if (err){
      res.send(err);
    }
    console.log("user id" + req.params.user_id + ' received');
    res.json(user);
  })
})


module.exports = router