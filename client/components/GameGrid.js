import React from 'react';
import { Link } from 'react-router';

class GameGrid extends React.Component {
	constructor(props) {
		super(props);
		this.handleCreateClick = this.handleCreateClick.bind(this);
	}
	handleCreateClick() {
		this.props.createRoom();
	}

	render() {
		return (
			<div className="game-grid">
				<button className="button" onClick={this.handleCreateClick}>Create Room</button>
				<Link className="buttonName" to="joinForm">
					<button className="button">
							Join a Game
					</button>
				</Link>
			</div>
		)
	}
}

export default GameGrid;