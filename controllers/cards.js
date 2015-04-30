var mongoose = require('mongoose'),
Card = mongoose.model('Card');

exports.findAll = function(req, res) {
	Card.find({}, function(err, results){
		return res.send(results);
	});
};

exports.findById = function(req, res) {
	var id = req.params.id;
	console.log(id);
	Card.findOne({'_id':id}, function(err, result){
		return res.send(result);
	});
};

exports.findByRarity = function(req, res) {
	var rarity = req.params.type;
	console.log(rarity);
	Card.find({"rarity": rarity}, function(err, result){
		return res.send(result);
	});
};

exports.findMythic = function(req, res) {	
	Card.find({rarity: 'Mythic Rare'}, function(err, result){
		if (err) return console.log(err);
		return res.send(result);
	});
};

exports.findRare = function(req, res) {	
	Card.find({rarity: 'Rare'}, function(err, result){
		if (err) return console.log(err);
		return res.send(result);
	});
};

exports.findUncommon = function(req, res) {	
	Card.find({rarity: 'Uncommon'}, function(err, result){
		if (err) return console.log(err);
		return res.send(result);
	});
};

exports.findCommon = function(req, res) {	
	Card.find({rarity: 'Common'}, function(err, result){
		if (err) return console.log(err);
		return res.send(result);
	});
};

exports.add = function(req, res) {
	Card.create(req.body, function(err, card){
		if (err) return console.log(err);
		return res.send(card);
	});
};

exports.update = function(req, res) {
  	var id = req.params.id;
  	var updates = req.body;

  	Card.update({"_id":id}, req.body,
    	function (err, numberAffected) {
      		if (err) return console.log(err);
      		console.log('Updated %d cards', numberAffected);
      		return res.sendStatus(202);
  	});
};

exports.delete = function(req, res) {
	var id = req.params.id;
	Card.remove({'_id':id}, function(result){
		return res.send(result);
	});
};

exports.import = function(req, res){
	Card.create({
		"layout":"normal","type":"Creature — Dragon","types":["Creature"],"colors":["Black"],"multiverseid":394485,"name":"Acid-Spewer Dragon","subtypes":["Dragon"],"cmc":6,"rarity":"Uncommon","artist":"James Zapata","power":"3","toughness":"3","manaCost":"{5}{B}","text":"Flying, deathtouch\nMegamorph {5}{B}{B} (You may cast this card face down as a 2/2 creature for {3}. Turn it face up any time for its megamorph cost and put a +1/+1 counter on it.)\nWhen Acid-Spewer Dragon is turned face up, put a +1/+1 counter on each other Dragon creature you control.","number":"86","watermark":"Silumgar","imageName":"acid-spewer dragon"
		},
		function(err) {
			if (err) return console.log(err);
			return res.sendStatus(202);
	});
};