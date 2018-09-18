var http = require('http');
var finalHandler = require('finalhandler');
var queryString = require('querystring');
var Router = require('router');
var bodyParser   = require('body-parser');
const fs = require('fs');

fs.readFile("incomedata.json", 'utf8', (err, data) => {
    if (err) throw err;
    data = JSON.parse(data);
});

var age = {};
var sex = {};
var race = {};
var occupation = {};

http.createServer(function (request, response) {
    myRouter(request, response, finalHandler(request, response))
  }).listen(4001);

myRouter.get('/age');