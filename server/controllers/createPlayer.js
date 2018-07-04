const Player = require('../models/player');

exports.createPlayer = function(req, res) {
	Player.create(req.body)
	.then(function(dbUser){
		console.log(dbUser);
	})
	.catch(function(err){
		return res.json(err);
	});
}