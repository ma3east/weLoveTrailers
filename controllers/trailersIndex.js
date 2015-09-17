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

//search for trailers from traileraddict api - working and parsing json
router.get('/:search', function(req, res){
  //console.log(req.params.search);
  var trailer6 = 'http://api.traileraddict.com/?featured=yes&count=6';
  // var trailerAddict = 'http://api.traileraddict.com/?film=';
  // var searchTerm = encodeURIComponent(req.params.search);

  request("http://api.traileraddict.com/?featured=yes&count=6&width=640&width=000", function(err, response, trailer){
    myJson = parser.toJson(trailer, options);

    if(!err && response.statusCode === 200){
      res.send(myJson);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;