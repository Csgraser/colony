const Room = require('../models/room');

exports.startGame= function(req, res){
	Room.update({roomCode : req.params.roomCode}, {running : true})
	.then(response => res.json(response))
	.catch(err => res.status(500).send('there was an error in addPlayer: ' + err))
};