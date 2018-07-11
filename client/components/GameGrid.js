import React from 'react';
import { Link } from 'react-router';
<<<<<<< HEAD
import UserLanding from './game_connections/users_landing'

class GameGrid extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);

	}


	handleClick() {
		this.props.createRoom();
	}

=======
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
>>>>>>> master

	render() {
		return (
			<div className="game-grid">
<<<<<<< HEAD
				<button className="button" onClick={this.handleClick}>Create Room</button>

				<Link className="buttonName" to="/joinRoom" >
					<button className="button">
						Join a Game
				</button>
				</ Link>
			</div>

=======

			{!this.props.auth.isSignedIn && (

				<GoogleLogin 
				clientId="368878887068-dqo0j4ru3m1uk6jgsjuvh823lq0871d2.apps.googleusercontent.com"
				buttonText="Login"
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
			
>>>>>>> master
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