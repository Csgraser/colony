import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
require('../../server/controllers/auth.js');
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { handleSignIn } from '../actions/auth.actions';

const responseGoogle = (response) => {
	console.log(response);
}

class GameGrid extends React.Component {
	constructor(props) {
		super(props);
		this.handleCreateClick = this.handleCreateClick.bind(this);
	}
	handleCreateClick() {
		this.props.createRoom();
	}

	onSignIn(response) {
		console.log("success", response);
	}
	onFailedSignIn(response) {
		console.log("failure", response);
	}

	render() {
		return (
			<div className="game-grid">

			{!this.props.auth.isSignedIn && (

				<GoogleLogin 
				clientId="368878887068-dqo0j4ru3m1uk6jgsjuvh823lq0871d2.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={this.props.onSignIn}
				onFailure={() => console.log("LOGIN FAILURE")}
				/>
			)}
				<button className="button">
					<Link className="buttonName" to="linkverification">

						Join a Game
					</Link>
				</button>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		auth: state.auth
	}
}

function mapDispatchToProps(dispatch){
	return {
		onSignIn: () => dispatch(handleSignIn())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameGrid);