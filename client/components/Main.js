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
				
				{React.cloneElement({ ...this.props }.children, { ...this.props })}
			</div>
		)
	}
};

export default Main;