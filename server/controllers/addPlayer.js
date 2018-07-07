const Room = require('../models/room');

exports.addPlayer= function(req, res){
	var alias = req.body;
	Room.update({roomCode : req.params.roomCode}, {$push: {players: alias}})
	.then(response => res.json(response))
	.catch(err => res.status(500).send('there was an error in addPlayer: ' + err))
};

// players object should have properties USERNAME: string, CHARACTER: string, VOTE: string