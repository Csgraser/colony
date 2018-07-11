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
		this.onSignIn = this.onSignIn.bind(this);
		this.createThisDangRoom = this.createThisDangRoom.bind(this);
	}
	createThisDangRoom() {
		this.props.createRoom();
	}

	onSignIn(response) {
		console.log("success", response);
		this.createThisDangRoom();
	}
	onFailedSignIn(response) {
		console.log("failure", response);
	}

	render() {
		return (
			<div className="game-grid">

			{!this.props.auth.isSignedIn && (

				<GoogleLogin 
				className="button"
				clientId="368878887068-dqo0j4ru3m1uk6jgsjuvh823lq0871d2.apps.googleusercontent.com"
				buttonText="Login & Create Game Room"
				onSuccess={this.onSignIn}
				onFailure={() => console.log("LOGIN FAILURE")}
				/>
			)}
				<Link className="buttonName" to="joinForm">
					<button className="button">

							Join a Game
						
					</button>
				</Link>
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