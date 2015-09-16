var mongoose = require('mongoose');

// var Trailer = require('./trailer');

var Schema = mongoose.Schema;

var reminderSchema = new mongoose.Schema({
  name: String,
  description: String,
  amazon: Boolean,
  book: Boolean,
  cinema: Boolean

});

var Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;