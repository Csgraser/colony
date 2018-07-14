const Room = require('../models/room');

exports.createRoom = function (req, res, next) {
	Room.create({

			roomCode: null,
			activeRoom: true,
			running: false
		})
		.then(dbResponse => {
			const result = Room.findOneAndUpdate({
				_id: dbResponse._id
			}, {
				roomCode: dbResponse._id.toString().slice(-5)
			}, (err,doc) => console.log("doc: " + doc));
			return result;
		})
		.then(dbResponse => {
			console.log('dbResponse', dbResponse);
			res.json(dbResponse)
		})
		.catch(err => res.status(500).send('create room error: ' + err))
};
