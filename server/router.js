const VerifyCode = require('./controllers/verifycode');
const CreateHost = require('./controllers/createHost');
const StartGame = require('./controllers/startGame');
const GetPlayerData = require('./controllers/getPlayerData');
const CreateRoom = require('./controllers/createRoom');
const AddPlayer = require('./controllers/addPlayer');
const CastVote = require('./controllers/castVote');
const path = require('path');
const express = require('express');

module.exports = function(app, io) {
	app.get('/', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../index.html'));
	});

	app.get('/api/getPlayerData/:roomCode', GetPlayerData.getPlayerData, function(req, res) {
	  res.json(res);
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

	// PUT player into room
	app.put('/api/addPlayer', AddPlayer.addPlayer, function(req,res,next){
		res.json(req.body);
	});

	// PUT toggles 'running' property in Room to true
	app.put('/api/startGame/:roomCode', StartGame.startGame, function(req,res){
		res.json(req.body);
	});
  
  
	app.put('/api/castVote/:roomCode/:username', CastVote.castVote, function(req,res){
		res.json(req.body);
	})

	//Keep this at the end - CATCH ALL
	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../index.html'));
	});
}