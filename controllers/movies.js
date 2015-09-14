var express = require('express');
var router = express.Router();

var Trailer = require('../models/trailer');
var Movie = require('../models/movie');

//get list of movies
router.get('/', function(req, res) {
  Movie.find(function(err, movies) {
    if (err) {
      res.json({ err: err, message: 'Something went wrong - where are the movies!' });
    } else {
      res.json(movies);
    }
  });
});

//find a single movie
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

// create new movie
router.post('/', function(req, res) {
  var movie = new Movie(req.body);

  movie.save(function(err) {
    if (err) {
      res.send(err);
      console.log('Movie was NOT added', err);
    } else {
      console.log(req.body.name + ' added!');
      res.json(movie);
    }  
  });
});

// update a movie
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

// delete a movie
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