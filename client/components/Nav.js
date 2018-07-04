import React from 'react';
import { Link } from 'react-router';

export default function Nav(props) {

	function handleClick(event) {
		console.log('create a room was clicked');
	}
	return (
		<nav>
			<button onClick={props.handleClick}>Create Room</button>
				{/* <div className="buttons animated bounceIn">
					<a className="create a" onClick={this.props.createRoom}>Create a Room</a>
				</div> */}
				<div className="btm animated bounceIn">
					<Link className="create a" to="/linkverification">
						Join a Game
					</Link>
				</div>
		</nav>
	);
}