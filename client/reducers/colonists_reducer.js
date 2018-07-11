function colonists(state = [], action){
	switch(action.type){
		case 'ASSIGN_COLONIST':
			console.log('set colonist reducer');
			return [
				...state,
				{colonists: action.payload}
			]
		default: 
			return state;
	}
}

export default colonists;
