var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var CardSchema = new Schema({
	layout: String,
	type: String,
	types: [String],
	colors: [String],
	multiverseid: Number,
	name: String,
	subtypes: [String],
	cmc: Number,
	rarity: String,
	artist: String,
	power: String,
	toughness: String,
	manaCost: String,
	text: String,
	number: String,
	watermark: String,
	imageName: String
});

CardSchema.statics.findByRarity = function(callback) {
  return this.find({rarity: 'Rare' }, callback);
};

mongoose.model('Card', CardSchema, 'commanders');