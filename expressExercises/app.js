// Here we are calling our installed modules and assigning them to variable express and bodyParser respectively
var express = require("express"); // call express
var app = express(); // define our app using express
var router = express.Router(); // get an instance of the express Router
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; // set port

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/api/calculator/*', function(req, res) {
  app.send(calculatorRequest);
});

app.use("/api/log", function(req,res,next){
  console.log(req.headers);
  res.json(req.headers);
  next();
})

app.use("/api/calculator/:operation/:n1/:n2",function(req,res,next){
  var calculatorRequest = {
    operation: req.params.operation,
    n1: Number(req.params.n1),
    n2: Number(req.params.n2),
    result: (Number(req.params.n1) + Number(req.params.n2))
  }
  console.log(calculatorRequest);
  res.send(calculatorRequest);
  next();
})

// Here we defined the port where our server should be running on
app.listen(port,function(){
  console.log("Server started, listening on: "+ port);
})

