var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var port = process.env.PORT || 9000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var User = require('./models/user');
var Movie = require('./models/movie');

mongoose.connect('mongodb://localhost/weLoveTrailers');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", "./public");

// Serve all js, css, html from the public folder
app.use(express.static(__dirname + '/public'));

// Serving bower_components from root
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(morgan('dev'));

app.use(require('./controllers'));

//development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(port);
console.log("Trail blazing on port " + port);