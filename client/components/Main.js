import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">The Colony</Link>
				</h1>
				<div className="buttons animated bounceIn">
					<a className="create a" onClick={this.props.createSession}>Create a Game</a>
				</div>
				<div className="btm animated bounceIn">
					<Link to="linkverification">
						<a className="create a">Join a Game</a>
					</Link>
				</div>
				{React.cloneElement({ ...this.props }.children, { ...this.props })}
			</div>
		)
	}
});

export default Main;