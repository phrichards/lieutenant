module.exports = function(app){
	var cards = require('./controllers/cards');
	app.get('/cards', cards.findAll);
	app.get('/cards/:id', cards.findById);
	app.get('/cards/:rarity', cards.findByRarity);
	app.get('/mythic/', cards.findMythic);
	app.get('/color', cards.findByRarity);
	app.get('/rare/', cards.findRare);
	app.get('/uncommon/', cards.findUncommon);
	app.get('/common/', cards.findCommon);
	app.get('/import', cards.import);
	app.post('/cards', cards.add);
	app.put('/cards/:id', cards.update);
	app.delete('/cards/:id', cards.delete);
	// app.get('*', function(req, res){
	// 	res.sendFile(path.join(__dirname + '/index.html'));
	// });
}