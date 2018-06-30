const Host = require('../models/host');

exports.createHost = function(req, res) {
	Host.create(req.body)
	.then(function(dbUser){
		console.log(dbUser);
	})
	.catch(function(err){
		return res.json(err);
	});
}