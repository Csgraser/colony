import React from 'react';
import { Link } from 'react-router';

class GameGrid extends React.Component{
	constructor(props){
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
			

			
				<button className="button">
					<Link className="buttonName" to="joinRoom" />
						Join a Game
				</button>
			</div>
		
		)
	}
}

export default GameGrid;