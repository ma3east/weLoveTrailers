var express = require('express');
var router  = express.Router();
var request = require('request');
var Trailer = require('../models/trailer');
var Movie   = require('../models/movie');

// example omdbi req via browser - "http://www.omdbapi.com/?t=superman&y=&plot=short&r=json";

//omdbapi movie search - not working
// router.get('/:search', function(req, res) {
//   var url = "http://www.omdbapi.com/?t=";
//   var searchTerm = encodeURIComponent(req.params.search);

//   //use t for single title, s for search (but dont get the plot/actors/poster etc if using s!)
//   request(url + searchTerm + "&plot=short&r=json", function(err, response, omdb){
//     if (!err && response.statusCode == 200) {
//       var data = JSON.parse(omdb); 
//       res.status(200).json(data);
//       console.log("this is omdb data");
//       } else {
//         console.log(err);
//       }
//     });
// });

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
    var url = "http://www.omdbapi.com/?t=";
    var searchTerm = encodeURIComponent(req.query.search);

    //use t for single title, s for search (but dont get the plot/actors/poster etc if using s!)
    request(url + searchTerm + "&plot=short&r=json", function(err, response, omdb){
      if (!err && response.statusCode == 200) {
        var data = JSON.parse(omdb); 
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