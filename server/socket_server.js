//all server-side sockets functions will be written here;
//initSockets will be exported to server-side index

const io = require('../devServer').io

const { VERIFY_USER, USER_CONNECTED, USER_DISCONNECTED } = require('./Events')

const { createUser } = require('./Factories')

let connectedUsers = {}

module.exports = function (socket) {

	
	console.log("Socket Id " + socket.id + ' has connected');

	//Verify Username
	socket.on(VERIFY_USER, (nickname, callback) => {
		console.log('1. verify user hit', nickname);
		if (isUser(connectedUsers, nickname)) {
			callback({ isUser: true, user: null })
		} else {
			callback({ isUser: false, user: createUser({ name: nickname, socketId:socket.id }) })
		}
	})

	//User Connects with username
	socket.on(USER_CONNECTED, (user) => {
		console.log('5. user connected hit', user);
		connectedUsers = addUser(connectedUsers, user)
		socket.user = user

		sendMessageToChatFromUser = sendMessageToChat(user.name)
		sendTypingFromUser = sendTypingToChat(user.name)

		io.emit(USER_CONNECTED, connectedUsers)
		console.log('Connected Users:', connectedUsers);

	})

	//User disconnects. 'disconnect' is a standard socket event, similiar to 'connect'
	socket.on('disconnect', () => {
		if ("user" in socket) {
			connectedUsers = removeUser(connectedUsers, socket.user.name)

			io.emit(USER_DISCONNECTED, connectedUsers)
			console.log("Disconnect", connectedUsers);
		}
	})

}

function isUser(userList, username){
	return username in userList
}