import React from 'react';

import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import App from './components/App';
import GameGrid from './components/GameGrid';
import PlayerDetail from './components/PlayerDetail';
import UserLanding from './components/game_connections/users_landing';
import MainLanding from './components/game_connections/main_landing';
import LinkVerification from './components/game_connections/link_verification';
import JoinForm from './components/join/join';


// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

//Error Tracking
import Raven from 'raven-js';
import { sentry_url, logException } from "./data/config";

Raven.config(sentry_url
		, 	{
		tags: {
			git_commit: 'asdfasdf',
			userLevel: 'editor'
		}
	}
).install();

//The below two lines would be for capturing errors
// Raven.captureMessage('Something bad happened'); //fake an error
// Raven.showReportDialog(); //report the error to user and allow feedback

const router = (
	<Provider store={store}>
		<Router history={history}>
			
			<Route path="/" component={App}>
				<Route path="/view/:postId" component={PlayerDetail}></Route>
				<Route path="/userlanding" component={UserLanding}></Route>
				<Route path="/mainlanding" component={MainLanding}></Route>
				<Route path="/linkverification" conponent={LinkVerification}></Route>
				<Route path="/joinForm" component={JoinForm}></Route>
				<IndexRoute exact component={GameGrid}>
				</IndexRoute>
			</Route>
		</Router>
	</Provider>
);

render(router, document.getElementById('root')); 