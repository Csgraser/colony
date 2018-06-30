// A reducer takes in two things

//1. the action (info about what happened)
//2. copy of current state

//set post state to empty array 
function posts(state = [], action ) {
	switch(action.type){
		case 'INCREMENT_VOTES' :
			console.log("increment votes");
			const i = action.index;
			return [
				...state.slice(0,i), // before the one we are updatiing
				{...state[i], votes: state[i].votes + 1},
				...state.slice(i + 1), // after the one we are updating
			]
		default:
			return state;
	}
}

export default posts;