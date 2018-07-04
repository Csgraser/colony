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
					<button onClick={this.handleClick}>Create Room</button>
				{/* <div className="buttons animated bounceIn">
					<a className="create a" onClick={this.props.createRoom}>Create a Room</a>
				</div> */}
				<div className="btm animated bounceIn">
					<Link to="linkverification">
						Join a Game
					</Link>
				</div>
			</div>
		)
	}
}

export default GameGrid;