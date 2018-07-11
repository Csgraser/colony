const Room = require('../models/room');

exports.castVote = function (req, res) {
	Room.findOneAndUpdate({
			"roomCode" : req.params.roomCode, 
			"players" : {
				"$elemMatch": {
					"username" : req.params.username
				}
			}
		}, {
			"$set": { "players.$.vote" : req.body.vote}
		})
		.then(response => res.json(response))
		.catch(err => res.status(500).send('there was an error in castVote: ' + err))
}