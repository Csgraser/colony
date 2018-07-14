//Every reducer is going to run whenever their is an action. EVERY REDUCER

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import colonists from './colonists_reducer';
import socket from './socket_reducer';
import authReducer from './auth.reducer';
import gameplay from './gameplay_reducer';
import connections from './connection_reducer';

const rootReducer = combineReducers({
	colonists,
	socket,
	gameplay, 
	connections, 
	routing: routerReducer,
	auth: authReducer
});

export default rootReducer;