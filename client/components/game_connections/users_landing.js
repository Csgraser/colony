import React, { Component } from 'react';
// import Avatar from 'material-ui/Avatar';

export default class UserLanding extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nickname: "",
			error: ""
		};
	}

	
	// This will set the username provided or provide an error to the user that the name is already taken.
	setUser({user, isUser}) {
		console.log('3', user, isUser);
		if(isUser){
			this.setError("User name taken")
		}else{
			this.setError("")
			this.props.setUser(user)
		}
	}

	handleSubmit(event) {
		event.preventDefault()
		const { socket } = this.props
		const { nickname } = this.state
		socket.emit(VERIFY_USER, nickname, this.setUser)
	}

	handleChange(event) {
		this.setState({nickname:event.target.value})
	}

	setError(error) {
		this.setState({error})
	}


	render() {
		return (
			<div>
				<h1>Hello I am still the user landing page</h1>
			</div>
		);
	}
}


{/* {props.photo !== '' ?
	<div>
	<Avatar src= {props.photo} size= {75} disabled= {true}/>
	{props.username}
	</div> :
	<div>{props.username}</div>
} */}