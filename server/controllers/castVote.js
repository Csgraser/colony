const Room = require('../models/room');

exports.castVote = function(req,res,next){
	Room.update({gameCode: req.gameCode},{$push: {players: req.players.vote}},next);
};