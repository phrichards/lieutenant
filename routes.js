module.exports = function(app){
	var cards = require('./controllers/cards');
	app.get('/cards', cards.findAll);
	app.get('/cards/:id', cards.findById);
	app.get('/cards/rarity/:type', cards.findByRarity);
	app.get('/cards/color/:type', cards.findByColor);
	// app.post('/cards', cards.add);
	// app.put('/cards/:id', cards.update);
	// app.delete('/cards/:id', cards.delete);
	// app.get('/', function(req, res){
	// 	res.sendFile(__dirname + '/index.html');
	// });
}