const Room = require('../models/room');

exports.createRoom = function (req, res, next) {
	Room.create({
<<<<<<< HEAD
		roomCode: null,
		activeRoom: true
	})
		.then(dbResponse => Room.findOneAndUpdate(
			{
				_id: dbResponse._id
			},
			{
				roomCode: dbResponse._id.toString().slice(-5)
			}, (err, doc) => console.log(doc)))
		.then(dbResponse => res.json(dbResponse))
		.catch(err => res.status(500).send('create room error: ' + err))
};
=======
			roomCode: null,
			activeRoom: true
		})
		.then(dbResponse => Room.findOneAndUpdate({
			_id: dbResponse._id
		}, {
			roomCode: dbResponse._id.toString().slice(-5)
		}, (err,doc) => console.log(doc)))
		.then(dbResponse => res.json(dbResponse))
		.catch(err => res.status(500).send('create room error: ' + err))
};
>>>>>>> 430bbd173d4cf9ed7790428e7f662cf493391be5
