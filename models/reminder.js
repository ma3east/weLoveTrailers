var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reminderSchema = new mongoose.Schema({
  name: String,
  description: String,
  amazon: Boolean,
  book: Boolean,
  cinema: Boolean,
  date: Date
});

var Reminder = mongoose.model('Reminder', reminderSchema);

module.exports = Reminder;