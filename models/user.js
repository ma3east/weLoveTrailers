var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String

});

var User = mongoose.model('User', userSchema);

module.exports = User;
