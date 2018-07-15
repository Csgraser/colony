import io from 'socket.io-client';

var socket = io('http://localhost:7770');

// export const ADD_NEW_USER = 'ADD_NEW_USER';
socket.on('connect', () => {
	console.log('Connected as socket Id: ' + socket.id);
})
// //nearly all client-side socket listeners will be be contained here
// //initSockets will be exported to client-side index
export function initSockets(store){
	// will receive and store all connected user objects
	socket.on('CONNECTED_USERS', function(connectedUsers){
		console.log('set users hit sockets client',connectedUsers);
		store.dispatch({type: 'SET_USERS', users: connectedUsers})
	});
	socket.on('USER_DISCONNECTED', function(connectedUsers){
		console.log('after disconnect, set users hit sockets client',connectedUsers);
		store.dispatch({type: 'SET_USERS', users: connectedUsers})
	});
	// Will store our unique client user object
	socket.on('CONNECTED_USER', function(user){
		console.log('set user sockets client',user);
		store.dispatch({type: 'SET_USER', users: user})
	});


}

//all client-side socket emitters will be contained here


export function verifyNameSocketClient(name) {
	console.log('verify user socket client', name);
	socket.emit('VERIFY_USER',name);
}

function submitUser(user){
	console.log('submitting user: ',user);
}
