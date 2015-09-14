var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var trailerSchema = new mongoose.Schema({
  movieId: { type: Schema.Types.ObjectId, ref: 'Movie' },  // id for actual movie trailer belongs to
  similarId: { type: Schema.Types.ObjectId, ref: 'Movie' },  // id for movies similar to the movie
  name: String,
  description: String,
  released: Date,
  image: String,
  url: String,
  rating: Number // your own rating for the trailer

});

var Trailer = mongoose.model('Trailer', trailerSchema);

module.exports = Trailer;