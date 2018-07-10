const Room = require('../models/room');

exports.getPlayerData = function (req, res) {
	Room.findOne({
			roomCode : req.params.roomCode
				}, "players", (err, res) => {
					if (err) return res.status(500).send(err)
					return res.status(200).send(res);
				}
	)
}