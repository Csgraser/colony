const CreateSession = require('./controllers/createsession');
const VerifyCode = require('./controllers/verifycode');
const CheckSession = require('./controllers/checksession');
const CreateHost = require('./controllers/createHost');
const CreateRoom = require('./controllers/createRoom');
const AddPlayer = require('./controllers/addPlayer');
const CastVote = require('./controllers/castVote');
const path = require('path');
const express = require('express');

module.exports = function(app, io) {
	app.get('/', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../index.html'));
	});

	app.post('/api/create', CreateSession.createSession, function(req, res, next) {
		res.json({ session: req.body.session });
	});

	// NOT GETTING SUCCESSFUL RESPONSE BUT HOST IS BEING CREATED
	// app.post('/api/createHost', CreateHost.createHost, function(req,res){
	// 	res.json({user : req.body.user});
	// });

	app.post('/api/createRoom', CreateRoom.createRoom, function(req, res, next){
		res.json(req.body);
	});

	// app.post('/api/createPlayer/', CreatePlayer.createPlayer, function(req,res){
	// 	res.json(req.body);	
	// });

	app.put('/api/addPlayer/:roomCode', AddPlayer.addPlayer, function(req,res){
		res.json(req.body);
	});

	app.post('/api/castVote/:roomCode/:username', CastVote.castVote, function(req,res){
		res.json(req.body);
	})

	//Keep this at the end - CATCH ALL
	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../index.html'));
	});
}