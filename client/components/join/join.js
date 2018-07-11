import React, { Component } from 'react';
import { connect } from 'react-redux';

class Join extends Component {
<<<<<<< HEAD
	constructor(props) {
		super(props)
		console.log(this.props, 'join props');

		this.state = {
			nickname: "",
			gameCode: "",
			error: ""
		};
	}


	// This will set the username provided or provide an error to the user that the name is already taken.
	setUser({ user, isUser }) {
		console.log('3', user, isUser);
		if (isUser) {
			this.setError("User name taken")
		} else {
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
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	setError(error) {
		this.setState({ error })
	}



	render() {

		return (
			<form className="join">
				<label>
					Code
                <input type="text" name="gameCode" onClick={this.handleChange} />
				</label>
				<label>
					Name
                <input type="text" name="nickname" onClick={this.handleChange} />
				</label>
				<input type="submit" value="Enter Room" onClick={this.handleSubmit} />
			</form>

		);
	}
}

function mapStateToProps(state) {
	return {
		connection: state.connections
	}
=======
    constructor(props) {
				super(props)
				this.handleClick = this.handleClick.bind(this);
				// this.handleChange = this.handleChange.bind(this);

				// this.state = {
				// 	code: '',
				// 	name: ''
				// }
        console.log(this.props, 'join props');
		}
		
		handleClick(event) {
			event.preventDefault();
			
			const code = this.refs.code.value;
			const name = this.refs.name.value;
			console.log('refs', code, ' : ', name);
			// const {name,code} = event.target;
			this.props.joinRoom(name,code);
		}

		// handleChange(event) {
		// 	const {name,value} = event.target;
		// 	this.setState({
		// 		[name]: value
		// 	})
		// }

    render() {

        return (
            <form className="join" onSubmit={this.handleClick} >
                <label>
                Code
                <input type="text" ref="code" onChange={this.handleChange}/>
                </label>
                <label>
                Name
                <input type="text" ref="name" />
                </label>
                <input type="submit" value="Enter Room"  />
            </form>

        );
    }
}

function mapStateToProps(state) {
    return {
				connection: state.connections
    }
>>>>>>> master
}

//Higher order component
export default connect(mapStateToProps)(Join);

