import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./join.styl"

class Join extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);
		// this.handleChange = this.handleChange.bind(this);

		this.state = {
			user: '',
			error: ''
		}
		console.log(this.props, 'join props');
	}

	// This will set the username provided or provide an error to the user that the name is already taken.
	checkUser({ user, isUser }) {
		console.log('3', user, isUser);
		if (isUser) {
			this.setError("User name taken")
		} else {
			this.setError("")
			this.setUser(user)
		}
	}

	setError(error) {
		this.setState({ error })
	}

	/*
* 	Sets the user property in state 
*	@param user {id:number, name:string}
*/
	setUser(user) {
		const { socket } = this.props.socket[0].socket
		console.log('4. layout setuser hit', { socket }, user);
		socket.emit("USER_CONNECTED", user);
		this.setState({ user })
	}

	handleClick(event) {
		event.preventDefault();
		const socket = this.props.socket[0].socket
		console.log(socket);
		const code = this.refs.code.value;
		const name = this.refs.name.value;
		console.log('refs', code, ' : ', name);
		// const {name,code} = event.target;
		this.props.joinRoom(name, code);
		socket.emit("VERIFY_USER", name, this.checkUser)
	}


    render() {

        return (
            <form className="join" onSubmit={this.handleClick} >
                <label>
                Code
                <input type="text" name="code" ref="code"/>
                <br/>
                </label>
                <label>
                Name
                <input type="text" name="name" ref="name"/>
                <br/>
                </label>
                <br/>
                <input type="submit" className="submitButton" value="Enter Room"  />
                
               
            </form>

		);
	}
}

function mapStateToProps(state) {
	return {
		connection: state.connections
	}
}

//Higher order component
export default connect(mapStateToProps)(Join);

