const Monster = require('../models/monster');

exports.castVote = function(req,res,next){
	Monster.update({gameCode: req.gameCode},{$push: {players: req.players.vote}},next);
};