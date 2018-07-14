function socket(state = [], action){
	switch(action.type){
		case 'MAIN_SOCKET':
			console.log('you set the main socket', action.socketURL);
			return [

				{socket: action.socketURL}
			]
		case 'SET_USER':
		console.log('you set user: ',action.user)
			return [

				{socket: action.user}
			]
		case 'SET_USERS':
			console.log('socket users',action.users);
			return [

				{socket: action.users}
			]
		default: 
			return state;
	}
}

export default socket;
