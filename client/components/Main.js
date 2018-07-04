import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.props.createRoom();
	}
	render() {
		return (
			<div>
				<h1>
					<Link to="/">The Colony</Link>
				</h1>
				<button className="button" onClick={this.handleClick}>Create Room</button>
				{/* <div className="buttons animated bounceIn">
					<a className="create a" onClick={this.props.createRoom}>Create a Room</a>
				</div> */}
				<button className="button animated bounceIn">
					<Link to="linkverification">
						<a className="create a">Join a Game</a>
					</Link>
				</button>
				{React.cloneElement({ ...this.props }.children, { ...this.props })}
			</div>
		)
	}
};

export default Main;