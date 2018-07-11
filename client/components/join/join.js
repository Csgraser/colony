import React, { Component } from 'react';
import { connect } from 'react-redux';

class Join extends Component {
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
<<<<<<< HEAD
                <input type="button" value="Enter Room" onClick={this.handleClick} />
=======
                <input type="submit" value="Enter Room"  />
>>>>>>> 06bc2a8f9326f6c2bc65af777c20d776afed16c3
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

