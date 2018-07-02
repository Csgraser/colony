const Monster = require('../models/monster');

exports.createRoom = function(req, res, next) {
	const room = new Monster({roomCode: null,activeRoom: true});
	const str = String(room._id);
	room.roomCode = str.slice(-5);

	room.save(function (err) {
		if(err) return console.log(err), undefined;
		console.log(room);
		req.body.room = room;
		next();
	});
};