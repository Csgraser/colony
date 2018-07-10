function createRoom(state = [], action){
	switch(action.type){
		case 'CREATE_ROOM':
			console.log('create room reducer');
			return [
				...state,
				{room: action.payload}
			];
		case 'JOIN_ROOM':
			console.log('you have joined the room');
			return [
				...state,
				{room: action.payload}
			]
		default: 
			return state;
	}
}

export default createRoom;
