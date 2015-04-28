var express = require('express');
var mongoose = require('mongoose');
fs = require('fs');
var bodyParser = require('body-parser');

var mongoUri = 'mongodb://localhost/cards';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function(){
	throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();
var collection = db.collection('allcards');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

require('./models/card');
require('./routes')(app);

// app.get('/', function(req, res){
// 	res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });

// routes to serve the static HTML files
// app.get('/', function(req, res) {
//     res.sendfile('index.html');
// });

// app.get('/cards/rarity', function(req, res){
//   db.collection('allcards').find('rarity': 'Rare'}, function(err, items) {
//           if(err) {
//               return console.log('findOne error:', err);
//           }
//           else {
//             res.json(items);
//           }
//   	});
// });

app.listen(3001);
console.log('Listening on port 3001...');