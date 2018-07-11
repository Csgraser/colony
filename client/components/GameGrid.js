import React from 'react';
import { Link } from 'react-router';
import UserLanding from './game_connections/users_landing'

class GameGrid extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);

	}


	handleClick() {
		this.props.createRoom();
	}


	render() {
		return (
			<div className="game-grid">
				<button className="button" onClick={this.handleClick}>Create Room</button>

				<Link className="buttonName" to="/joinRoom" >
					<button className="button">
						Join a Game
				</button>
				</ Link>
			</div>

		)
	}
}

export default GameGrid;