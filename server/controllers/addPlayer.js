const Monster = require('../models/monster');

exports.addPlayer= function(req,res){
	Monster.update({roomCode : req.params.roomCode},{$push: {players: req.body}});
};

// players object should have properties USERNAME: string, CHARACTER: string, VOTE: string