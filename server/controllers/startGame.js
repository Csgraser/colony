const Room = require('../models/room');

exports.startGame= function(req, res){
	Room.findOneAndUpdate({roomCode : req.body.code}, {running : true})
	.then(response => res.json(response))
	.catch(err => res.status(500).send('there was an error in startGame: ' + err))
};