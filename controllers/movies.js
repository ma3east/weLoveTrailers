var express = require('express');
var router  = express.Router();
var request = require('request');
var Trailer = require('../models/trailer');
var Movie   = require('../models/movie');
var tmdbAPIKey = process.env.TMDB_API_KEY;
var tmdb = "https://api.themoviedb.org/3/search/movie?query=";


router.get('/:search', function(req, res){
  var searchTerm = encodeURIComponent(req.params.search);
  
  request(tmdb + searchTerm + "&api_key=" + tmdbAPIKey, function(err, response, theMovie){

    if (!err && response.statusCode == 200) {
      var data = JSON.parse(theMovie); 
      res.status(200).json(data);
      console.log("this is tmdb data");
    } else {
      console.log(err + "there was an error with tmdb request");
    }
  });
});

// MOVIES INDEX -> /movies/
router.get('/', function(req, res) {
  if (!req.query.search) {
    Movie.find(function(err, movies) {
      if (err) {
        res.json({ err: err, message: 'Something went wrong - where are the movies!' });
      } else {
        res.json(movies);
      }
    });
  } else {
    console.log(req);
    // var url = "http://www.omdbapi.com/?t=";
    // var tmdb = "http://api.themoviedb.org/3/search/movie?query=";
    var searchTerm = encodeURIComponent(req.query.search);

    request(tmdb + searchTerm + "&api_key=" + tmdbAPIKey, function(err, response, theMovie){
      if (!err && response.statusCode == 200) {
        var data = JSON.parse(theMovie); 
        res.status(200).send(data);
      } else {
        res.status(500).send({ message: err });
      }
    });
  }
});

//find a single movie - working
router.get('/:movie_id', function(req, res){
  Movie.findById(req.params.movie_id, function(err, movie) {
    if (err) {
      res.send(err);
    } else {
      console.log('movie id ' + req.params.movie_id + ' received');
      res.json(movie);
    }
  });
});

// create new movie - working
router.post('/', function(req, res) {
  var movie = new Movie(req.body);

  movie.save(function(err) {
    if (err) {
      res.send(err);
      console.log('Movie was NOT added', err);
    } else {
      console.log(req.body.title + ' added!');
      res.json(movie);
    }  
  });
});

// update a movie - working
router.put('/:movie_id', function(req,res) {
  Movie.findById(req.params.movie_id, function(err, movie) {
    if (err) {
      console.log(err);
      res.send(err);
    }

    for (var property in req.body) {
      movie[property] = req.body[property];
    }

    // save the updated movie
    movie.save(function(err) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        console.log("Movie updated for movie_id " + req.params.movie_id);
        res.json(movie);
      }
    });
  });
});

// delete a movie - working
router.delete('/:movie_id', function(req, res) {

  Movie.findByIdAndRemove(req.params.movie_id, function(err, movie) {
    if (err) {
      res.json(err);
      console.log("There was an error, deleting the movie, please check the request.");
      
    } else {
      console.log('Movie has been deleted');
      res.json({ message: 'Movie has been deleted - result!' } );
    }
  });
});

module.exports = router;