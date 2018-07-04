const Room = require('../models/room');

exports.createRoom = function(req, res, next) {
	Room.create({roomCode: null,activeRoom: true})
	.then(dbResponse => Room.update({_id : dbResponse._id}, {roomCode : dbResponse._id.toString().slice(-5)}))
	.then(dbResponse => res.json(dbResponse))
	.catch(err => res.status(500).send('create room error: ' + err))
};