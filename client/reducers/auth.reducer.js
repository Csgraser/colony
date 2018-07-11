import { SUCCESSFULL_SIGN_IN } from "../actions/auth.actions.js";

const initialState = {
	isSignedIn: false
}

function authReducer(state = initialState, action) {
	switch (action.type) {
		case SUCCESSFULL_SIGN_IN:
			console.log('auth reducer sign in worked');
			return {isSignedIn: true};
		default:
			return state;
	}
}

export default authReducer;