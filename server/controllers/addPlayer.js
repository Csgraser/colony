const Monster = require('../models/monster');

exports.addPlayer= function(req,res,next){
	Monster.update({gameCode: req.gameCode},{$push: {players: req.players}},done);
};