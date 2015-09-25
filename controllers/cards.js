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

// exports.add = function(req, res) {
// 	Card.create(req.body, function(err, card){
// 		if (err) return console.log(err);
// 		return res.send(card);
// 	});
// };

// exports.update = function(req, res) {
//   	var id = req.params.id;
//   	var updates = req.body;

//   	Card.update({"_id":id}, req.body,
//     	function (err, numberAffected) {
//       		if (err) return console.log(err);
//       		console.log('Updated %d cards', numberAffected);
//       		return res.sendStatus(202);
//   	});
// };

// exports.delete = function(req, res) {
// 	var id = req.params.id;
// 	Card.remove({'_id':id}, function(result){
// 		return res.send(result);
// 	});
// };