//Every reducer is going to run whenever their is an action. EVERY REDUCER

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import gameplay from './gameplay_reducer';
import sessions from './session_reducer';

const rootReducer = combineReducers({posts, comments, gameplay, sessions, routing: routerReducer });

export default rootReducer;