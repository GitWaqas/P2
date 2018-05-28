var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        linkToRandom: 'See random joke',
        linkToAll: 'See all jokes',
        linkAddJoke: 'Add new joke'
    });
    next();
});

router.get('/joke', function(req, res, next) {
    res.render('joke', {title: "Random joke", insert_joke: jokes.getRandomJoke});
    next();
});

router.get('/all-jokes', function(req, res, next) {
    res.render('all-jokes', {title: "All jokes", insert_jokes: jokes.allJokes});
    next();
});

router.get('/add-joke', function(req, res, next) {
    res.render('add-joke', {title: "Add new joke"});
    next();
});

router.post('/store-joke', function(req, res, next) {
    jokes.addJoke(req.body.joke);
    res.redirect('/add-joke');
});


module.exports = router;