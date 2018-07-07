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
				<button className="" onClick={this.handleClick}>Create Room</button>
			

				<button>
					<Link className="button" to="linkverification">

				<button className="button">
					<Link className="buttonName" to="linkverification">

						Join a Game
					</Link>
				</button>
			</div>
		
		)
	}
}

export default GameGrid;