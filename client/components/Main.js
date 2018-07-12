import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import io from 'socket.io-client';

const socketUrl = "http://localhost:7770";
class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			socket: null,
			user: null
		};
	}

	componentDidMount() {
		this.initSocket();
	}

	// This will allow us to run this once or whenever we need to then store the socket in state.
	initSocket() {
		const socket = io(socketUrl)
		socket.on('connect', () => {
			console.log('Connected as socket Id: ' + socket.id);
		})
		// this.setState({ socket })
		this.addSocketURL(socket);
	}

		/*
	*	Sets the user property in state to null.
	*/
	logout() {
		const { socket } = this.state
		socket.emit("LOGOUT")
		this.setState({ user: null })

	}

	addSocketURL(socketURL){
		this.props.addMainSocketURL(socketURL);
		console.log(this.props);
	}

	// this.props.socket[0].socket

	// const { socket } = this.props.socket[0];
	
	render() {
		return (
			<div>
				<h1>
					<Link to="/">The Colony</Link>
				</h1>

				{React.cloneElement({ ...this.props }.children, { ...this.props })}
			</div>
		)
	}
};

export default Main;