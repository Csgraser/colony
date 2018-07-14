import React, { Component } from 'react';
import { connect } from 'react-redux';
import './gameConnections.styl';


class MainLanding extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		console.log(this.props, 'main landing props');
	}

	handleClick(event) {
		event.preventDefault();
		const code = this.props.connection[0].room.data.roomCode;
		// const name = this.refs.name;
		console.log('code', code);
		// const {name,code} = event.target;
		this.props.startGame(code);
	}

	render() {
		let haveSocket = this.props.socket[0].socket;
		if (haveSocket === 0){haveSocket = []}
		console.log('some socket',haveSocket);
		return (
			<div>
				<div className="linkEnter">
					<div id="linkcode">Game Code: {this.props.connection[0].room.data.roomCode}</div>

				</div>
				<button className="startGameButton" onSubmit={this.handleClick} onClick={this.handleClick}>Start Game</button>

				<div >
					<br/>
					<div className="players linkEnter" >Players in Lobby: 				{haveSocket.map((name,index)=>{
						return <span className="playerList" key={index}>{name.user.name}</span>
					})}
					</div>
					{console.log("Tyler props", this.props.connection[0].room)};
				</div >
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		connection: state.connections
	}
}

//Higher order component
export default connect(mapStateToProps)(MainLanding);


