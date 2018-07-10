const Room = require('../models/room');

exports.endGame= function(req, res){
	Room.update({roomCode : req.params.roomCode}, {running : false})
	.then(response => res.json(response))
	.catch(err => res.status(500).send('there was an error in endGame: ' + err))
};