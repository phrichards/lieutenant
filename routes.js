module.exports = function(app){
	var cards = require('./controllers/cards');
	app.get('/cards', cards.findAll);
	app.get('/cards/:id', cards.findById);
	app.get('/cards/rarity/:type', cards.findByRarity);
	app.get('/cards/color/:type', cards.findByColor);
}