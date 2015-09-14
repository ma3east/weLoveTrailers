var express = require('express');
var router = express.Router();
var request = require('request');

var Movie = require('../models/movie');
var Trailer = require('../models/trailer');

//search for trailers from traileraddict website - in progess
router.get('/:search', function(req, res){
  // console.log(req.params.search)

  var trailerAddict = 'http://api.traileraddict.com/?film=';
  var searchTerm = req.params.search

  request(trailerAddict+searchTerm+"&count=5&width=640&width=000", function(err, response, trailer){
    if(!err && response.statusCode === 200){
      console.log("data received" + trailer);
    } else {
      console.log(err);
    }
  })
});

//get list of all trailers - working
router.get('/', function(req, res){
  Trailer.find().populate('movieId similarId').exec(function(err, trailers){
    if (err) {
      res.json({ err: err, message: 'Something went wrong there are no trailers.!'})
    } else {
      res.json(trailers);
    }
  })
});

//get single trailer by id
router.get('/:trailer_id', function(req, res){
  Trailer.findById(req.params.trailer_id).populate('movieId similarId').exec(function(err, trailer){
    if (err){
      res.send(err);
    } else {
      console.log('trailer id ' + req.params.trailer_id + ' received');
      res.json(trailer)
    }
  })
});




module.exports = router