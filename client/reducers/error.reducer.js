function socket(state = [], action){
	switch(action.type){
		case 'SET_ERROR':
			console.log('you set an error', action.error);
			return [
				...state,
				{socket: action.error}
			]
		default: 
			return state;
	}
}

export default socket;
