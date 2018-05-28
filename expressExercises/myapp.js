var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var joke = require('./routes/joke');
var allJokes = require('./routes/all-jokes');
var addJoke = require('./routes/add-joke');
var storeJoke = require('./routes/store-joke');

var new_app = express();

var session = require("express-session");

// view engine setup
new_app.set('views', path.join(__dirname, 'views'));
new_app.set('view engine', 'hbs');

new_app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));

new_app.use(bodyParser.json());
new_app.use(bodyParser.urlencoded({extended: false}));
new_app.use(cookieParser());
new_app.use(express.static(path.join(__dirname, 'public')));

new_app.use('/', index);
new_app.use('/users', users);
new_app.use('/joke', joke);
new_app.use('/all-jokes', allJokes);
new_app.use('/add-joke', addJoke);
new_app.use('store-joke', storeJoke);

// catch 404 and forward to error handler
new_app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
new_app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = new_app;