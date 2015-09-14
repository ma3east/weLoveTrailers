var mongoose = require('mongoose');

// var Trailer = require('./trailer');

var Schema = mongoose.Schema;

var movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  released: Date,
  genre: String,
  duration: String,
  actors: Array,
  plot: String,
  image: String

});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;