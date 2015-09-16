var express = require('express');
var router = express.Router();
var request = require('request');
var parser = require('xml2json');

var Movie = require('../models/movie');
var Trailer = require('../models/trailer');

// variables to use with xml2json
var myJson;
var options = {
  object: true,
};

// search youtube - just enter search term, have appended trailer already
router.get('/:search', function(req, res){

  var youtubeServerKey = process.env.YOUTUBE_SERVER_API_KEY;
  var searchTerm = encodeURIComponent(req.params.search);

  request('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+searchTerm+' trailer&type=video&key='+youtubeServerKey, function(err, response, youtube){

    if (!err && response.statusCode == 200) {
      var data = JSON.parse(youtube); 
      res.status(200).json(data);
      console.log("this is youtube data");
    } else {
      console.log(err);
    }
  });
});

// request.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=ambient&type=video&key='+ACCESS_TOKEN,function(err,header,body){
//     if (err) throw err
//     console.log(body);
// })


//search for trailers from traileraddict api - working and parsing json
// router.get('/:search', function(req, res){
//   //console.log(req.params.search);

//   var trailerAddict = 'http://api.traileraddict.com/?film=';
//   var searchTerm = encodeURIComponent(req.params.search);

//   request(trailerAddict+searchTerm+"&count=5&width=640&width=000", function(err, response, trailer){
//     myJson = parser.toJson(trailer, options);

//     if(!err && response.statusCode === 200){
//       res.send(myJson);
//     } else {
//       console.log(err);
//     }
//   });
// });

//get list of all trailers - test
router.get('/', function(req, res){
  Trailer.find().populate('movieId similarId').exec(function(err, trailers){
    // myJson = parser.toJson(trailers, options);

    if (err) {
      res.send({ err: err, message: 'Something went wrong there are no trailers.!'});
    } else {
      res.send(trailers);
    }
  });
});

//get single trailer by id - test
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