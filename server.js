var express = require('express');
var app = express();

var Client = require('node-rest-client').Client;

var client = new Client();

// Walters API KEY
var apiKey = process.env.WALTERS_API_KEY || require('./walters.json').apiKey;

function getWaltersAPIUrl(endpoint) {
  var baseUrl = 'http://api.thewalters.org/v1';
  var url = baseUrl + endpoint + '?apiKey=' + apiKey;
  return url;
}

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/views/index.html');
});

app.get('/client', function(req, res) {
  res.sendFile(__dirname + '/build/views/client.html');
});

app.get('/collections', function(req, res) {
  var url = getWaltersAPIUrl('/collections');
  client.get(url, function(data, response) {
    res.send(data);
  });
});

app.get('/collections/:id/objects', function(req, res) {
  var id = req.params.id;
  var url = getWaltersAPIUrl('/collections/' + id + '/objects');
  client.get(url, function(data, response) {
    res.send(data);
  });
})

app.use('/static', express.static(__dirname + '/build/bower_components'));
app.use('/js', express.static(__dirname + '/build/js'));
app.use('/views', express.static(__dirname + '/build/views'));
app.use('/styles', express.static(__dirname + '/build/styles'));
app.use('/fonts', express.static(__dirname + '/build/fonts'));

module.exports = app;
