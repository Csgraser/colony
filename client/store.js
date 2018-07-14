import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { initSockets } from './sockets_client';

// import the root reducer
import rootReducer from './reducers/index';

import { colonists } from './data/characters';

// create an object for the default data
const defaultState = {
	colonists,
	socket: ''
};

//persistant state settings
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer, defaultState)

const store = createStore(
	// defaultState,
	persistedReducer,
	//adding redux thunk to help handle async requests
	composeEnhancers(
		applyMiddleware(
			reduxThunk
		)
	)
);
let persistor = persistStore(store)
initSockets(store);

export const history = syncHistoryWithStore(browserHistory, store, persistor);

if (module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
