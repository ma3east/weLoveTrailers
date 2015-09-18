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

//get 6 feature trailers - will show on home page

router.get('/', function(req, res){
  //console.log(req.params.search);
  var trailer6 = "http://api.traileraddict.com/?featured=yes&count=6&width=640&width=000";

  request(trailer6, function(err, response, trailer){
    console.log(response);

    var json = parser.toJson(trailer, options);
    if(!err && response.statusCode === 200){
      res.send(json);
    } else {
      console.log(err);
    }
  });
});

module.exports = router;