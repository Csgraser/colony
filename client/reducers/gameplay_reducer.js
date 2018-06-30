import { ACTIVATE_GAME } from '../actions/actionCreators';
import { ADD_NEW_USER } from '../sockets_client';

export default function(state = {
  isGameActive: false,
  activeClue: {},
  activeUser: '',
	users: {},
}, action){
	switch(action.type){
		case ACTIVATE_GAME:
			return {...state, isGameActive: action.payload};
		case ADD_NEW_USER:
      var stateUsersCopy = {...state.users};
      stateUsersCopy = action.payload.users;
      var stateCopy = {...state, users: stateUsersCopy};
			return stateCopy;
		default:
      return state;
	}
}