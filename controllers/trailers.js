var express = require('express');
var router = express.Router();
var request = require('request');

var Movie = require('../models/movie');
var Trailer = require('../models/trailer');

// search you tube - just enter search term, have appended trailer already
router.get('/:search', function(req, res){
  var youtubeServerKey = process.env.YOUTUBE_SERVER_API_KEY;
  var searchTerm = encodeURIComponent(req.params.search);

  request('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+searchTerm+' trailer&type=video&key='+youtubeServerKey, function(err, response, youtube){

    if (!err && response.statusCode == 200) {
      var data = JSON.parse(youtube); 
      res.status(200).json(data);
      console.log("this is you tube data");
    } else {
      console.log(err);
    }
  });
});

//get list of trailers or search
router.get('/', function(req, res){
  if (!req.query.search) {
    Trailer.find().populate('movieId similarId').exec(function(err, trailers){
      
      if (err) {
        res.send({ err: err, message: 'Something went wrong there are no trailers.!'});
      } else {
        res.send(trailers);
      }
    });

  } else {
    var youtubeServerKey = process.env.YOUTUBE_SERVER_API_KEY;
    var searchTerm = encodeURIComponent(req.query.search);

    request('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+searchTerm+' trailer&type=video&key='+youtubeServerKey, function(err, response, youtube){

      if (!err && response.statusCode == 200) {
        var data = JSON.parse(youtube); 
        res.status(200).send(data);
      } else {
        res.status(500).send({ message: err });
      }
    });
  }
});

//get single trailer by id - to test
router.get('/:trailer_id', function(req, res){
  Trailer.findById(req.params.trailer_id).populate('movieId similarId').exec(function(err, trailer){

    if (err){
      res.send(err);
    } else {
      console.log('trailer id ' + req.params.trailer_id + ' received');
      res.json(trailer);
    }
  });
});

module.exports = router;