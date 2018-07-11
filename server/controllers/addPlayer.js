const Room = require('../models/room');

exports.addPlayer= function(req, res){
	// var alias = req.body;
	console.log('add player controllers', req.body);
	Room.update({roomCode : req.body.code}, {$push: {players: req.body.name}})
	.then(response => res.json(response))
	.catch(err => res.status(500).send('there was an error in addPlayer: ' + err))
};

// players object should have properties USERNAME: string, CHARACTER: string, VOTE: string