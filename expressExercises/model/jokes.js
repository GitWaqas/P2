var _jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
  ];

var _addJoke = function(joke){
    _jokes.push(joke);
}

var _getRandomJoke = function(){
    return _jokes[Math.floor( Math.random() * _jokes.length )];
}

module.exports = {
allJokes : _jokes,
getRandomJoke : _getRandomJoke,
addJoke : _addJoke
}
