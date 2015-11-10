var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
fs = require('fs');
var bodyParser = require('body-parser');

var mongoUri = 'mongodb://heroku_ppjzw52v:uYc8YdN=3GPj9NWpLYDGq#{ys@ds031477.mongolab.com:31477/heroku_ppjzw52v';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function(){
	throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();
var collection = db.collection('allcards');
app.use(express.static(path.join(__dirname + '/node_modules')));
app.use(express.static(path.join(__dirname + '/bower_components')));
app.use(express.static('/styles'));
app.use(express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

require('./models/card');
require('./routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');