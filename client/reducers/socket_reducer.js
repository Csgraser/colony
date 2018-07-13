function socket(state = [], action){
	switch(action.type){
		case 'MAIN_SOCKET':
			console.log('you set the main socket', action.socketURL);
			return [
				...state,
				{socket: action.socketURL}
			]
		default: 
			return state;
	}
}

export default socket;
