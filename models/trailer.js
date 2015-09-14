var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var trailerSchema = new mongoose.Schema({
  title: String,
  description: String,
  released: Date,
  //genre: String,
  //actors: Array,
  url: String,
  rating: Number

});

var Trailer = mongoose.model('Trailer', trailerSchemaSchema);

module.exports = Trailer;