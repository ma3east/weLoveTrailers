var express = require('express');
var router = express.Router();
var request = require('request');

var Movie = require('../models/movie');
var Trailer = require('../models/trailer');

//search for trailers from traileraddict website - in progess
router.post('/search', function(req, res){

  var trailerAddict = 'http://api.traileraddict.com/?film=';
  var searchTerm = encodeURIComponet(req.body.search);

  request(trailerAddict+searchTerm+"&count=5&width=640&width=000", function(err, response, trailer){
    if(!err && response.statusCode === 200){
      console.log("data received" + trailer);
    } else {
      console.log(err);
    }

  })
});

//get list of trailers

router.get('/', function(req, res){
  Trailer.find().populate('movieId similarId').exec(function(err, trailers){
    if (err) {
      res.json({ err: err, message: 'Something went wrong there are no trailers.!'})
    } else {
      res.json(trailers);
    }
  })
});




module.exports = router