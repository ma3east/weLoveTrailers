var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

//bcrypt stuff
userSchema.pre('save', function(next) {

  var user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // Generate a salt, with a salt_work_factor of 5
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return next(err);

      // Hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // Override the cleartext password with the hashed one
        user.password = hash;
        next();
      });
    });
});

userSchema.methods.authenticate = function(password, callback) {

  bcrypt.compare(password, this.password, function(err, isMatch) {
    callback(null, isMatch);
  });
};

var User = mongoose.model('User', userSchema);

module.exports = User;
