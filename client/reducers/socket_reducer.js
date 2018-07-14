function socket(state = [], action){
	switch(action.type){
		case 'MAIN_SOCKET':
			console.log('you set the main socket', action.socketURL);
			return [
				...state,
				{socket: action.socketURL}
			]
		case 'SET_USER':
		console.log('you set user: ',action.user)
			return [
				...state,
				{socket: action.user}
			]
		case 'SET_USERS':
			console.log('socket users',action.users);
			return [
				...state,
				{socket: action.users}
			]
		default: 
			return state;
	}
}

export default socket;
