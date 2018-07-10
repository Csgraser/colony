const Room = require('../models/room');

exports.createRoom = function (req, res, next) {
	Room.create({

			roomCode: null,
			activeRoom: true,
			running: false
		})
		.then(dbResponse => Room.findOneAndUpdate({
			_id: dbResponse._id
		}, {
			roomCode: dbResponse._id.toString().slice(-5)
		}, (err,doc) => console.log(doc)))

		.then(dbResponse => res.json(dbResponse))
		.catch(err => res.status(500).send('create room error: ' + err))
};
