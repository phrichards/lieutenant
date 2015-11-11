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

exports.findByColor = function(req, res){
	if (req.params.type !== undefined) {
		var color = req.params.type;
	}
	console.log(color);
	Card.find({'colors':
			{$eq: color}
		}, function(err, result){
		return res.send(result);
	});
};