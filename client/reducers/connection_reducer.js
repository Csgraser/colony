function createRoom(state = [], action){
	switch(action.type){
		case 'CREATE_ROOM':
			console.log('create room reducer');
			return [
				...state,
				{room: action.payload}
			];

		default: 
			return state;
	}
}

export default createRoom;
