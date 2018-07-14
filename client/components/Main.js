import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { PersistGate } from 'redux-persist/integration/react'
import persistor from '../store';

const socketUrl = "http://localhost:7770";
class Main extends React.Component {

	constructor(props) {
		super(props);

	}
	
	render() {
		return (
			// <PersistGate loading={null} persistor={persistor}>
			<div>
				<h1>
					<Link to="/">The Colony</Link>
				</h1>

				{React.cloneElement({ ...this.props }.children, { ...this.props })}
			</div>
		//	</PersistGate>
		)
	}
};

export default Main;