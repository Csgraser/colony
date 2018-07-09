const VerifyCode = require('./controllers/verifycode');
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


	// app.post('/join', CreateSession.createSession, function(req, res, next) {
	// 	res.json({ session: req.body.session });
	// });

	// This is working
	app.post('/api/createRoom', CreateRoom.createRoom, function(req, res, next){
		res.json(req.body);
	});

	// app.post('/api/createPlayer/', CreatePlayer.createPlayer, function(req,res){
	// 	res.json(req.body);	
	// });

	// Trying to PUT player into room
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