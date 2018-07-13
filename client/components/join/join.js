import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./join.styl"

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
<<<<<<< HEAD
			console.log('refs', code, ' : ', name, 'event', event.input);
=======
			console.log('refs', code, ' : ', name);
>>>>>>> master
			// const {name,code} = event.target;
			this.props.joinRoom(name,code);
		}


    render() {

        return (
            <form className="join" onSubmit={this.handleClick} >
                <label>
                Code
<<<<<<< HEAD
                <input type="text" name="code" ref="code" />
=======
                <input type="text" name="code" ref="code"/>
>>>>>>> master
                <br/>
                </label>
                <label>
                Name
<<<<<<< HEAD
                <input type="text" name="name" ref="name" />
=======
                <input type="text" name="name" ref="name"/>
>>>>>>> master
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

