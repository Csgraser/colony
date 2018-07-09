import React from 'react';
import { Link } from 'react-router';

class GameGrid extends React.Component{
	constructor(props){
		super(props);
		this.handleCreateClick = this.handleCreateClick.bind(this);
		// this.handleJoinClick = this.handleJoinClick.bind(this);
	}
	handleCreateClick() {
		this.props.createRoom();
	}
	// handleJoinClick() {
	// 	this.props.joinRoom();
	// }
	render() {
		return (
			<div className="game-grid">
				<button className="button" onClick={this.handleCreateClick}>Create Room</button>

				<button className="button">
					<Link className="buttonName" to="joinRoom">

						Join a Game
					</Link>
				</button>
			</div>
		
		)
	}
}

export default GameGrid;