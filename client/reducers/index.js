//Every reducer is going to run whenever their is an action. EVERY REDUCER

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth.reducer';
import posts from './posts';
import comments from './comments';
import gameplay from './gameplay_reducer';
import connections from './connection_reducer';

const rootReducer = combineReducers({
	posts, 
	comments, 
	gameplay, 
	connections, 
	routing: routerReducer,
	auth: authReducer
});

export default rootReducer;