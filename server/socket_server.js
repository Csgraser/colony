//all server-side sockets functions will be written here;
//initSockets will be exported to server-side index

const io = require('../devServer').io

const { VERIFY_USER, USER_CONNECTED, USER_DISCONNECTED } = require('./Events')

const { createUser } = require('./Factories')

let connectedUsers = []

module.exports = function (socket) {

	
	console.log("Socket Id " + socket.id + ' has connected');

	//Verify Username
	socket.on(VERIFY_USER, (nickname) => {
		console.log('1. verify user hit', nickname);
		//TODO verify if user name has been used
		// if (isUser(connectedUsers, nickname)) {
		// 	callback({ isUser: true, user: null })
		// } else {
			const user = { user: createUser({ name: nickname, socketId:socket.id }) }
		// }
		connectedUsers.push(user)
		// socket.user = user

		io.emit('CONNECTED_USERS', connectedUsers)
		socket.emit('CONNECTED_USER', user)
		console.log('Connected Users:', connectedUsers);
	})

	//User Connects with username
	// socket.on(USER_CONNECTED, (user) => {
	// 	console.log('5. user connected hit', user);
	// 	connectedUsers = addUser(connectedUsers, user)
	// 	socket.user = user

	// 	io.emit('CONNECTED_USERS', connectedUsers)
	// 	console.log('Connected Users:', connectedUsers);

	// })

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

/*
* Adds user to list passed in.
* @param userList {Object} Object with key value pairs of users
* @param user {User} the user to added to the list.
* @return userList {Object} Object with key value pairs of Users
*/
function addUser(userList, user){
	console.log('hit', user);
	let userList = userList.push(user);
	// newList[user.name] = user
	return userList
}

/*
* Removes user from the list passed in.
* @param userList {Object} Object with key value pairs of Users
* @param username {string} name of user to be removed
* @return userList {Object} Object with key value pairs of Users
*/
function removeUser(userList, username){
	let newList = Object.assign({}, userList)
	delete newList[username]
	return newList
}