const VerifyCode = require('./controllers/verifycode');
const CheckSession = require('./controllers/checksession');
const CreateHost = require('./controllers/createHost');
const CreateRoom = require('./controllers/createRoom');
const AddPlayer = require('./controllers/addPlayer');
const path = require('path');
const express = require('express');

module.exports = function(app, io) {
	app.get('/', function(req, res) {
	  res.sendFile(path.resolve(__dirname + '/../index.html'));
	});

	// app.post('/create', CreateSession.createSession, function(req, res, next) {
	// 	res.json({ session: req.body.session });
	// });

	app.post('/createHost', CreateHost.createHost, function(req,res){
		res.json(req.body);
	});

	app.post('/createRoom', CreateRoom.createRoom, function(req, res, next){
		res.json(req.body);
	});

	app.post('/addPlayer', AddPlayer.addPlayer, function(req,res){
		res.json(req.body);
	});

	//Keep this at the end
	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../index.html'));
	});
}