import React, { Component } from 'react';
import { connect } from 'react-redux';

class Join extends Component {
    constructor(props) {
				super(props)
			  this.handleClick = this.handleClick.bind(this);
        console.log(this.props, 'join props');
		}
		
		handleClick(event) {
			event.preventDefault;
			this.props.joinRoom();
		}

    render() {

        return (
            <form className="join">
                <label>
                Code
                <input type="text" name="code" />
                </label>
                <label>
                Name
                <input type="text" name="name" />
                </label>
                <input type="button" value="Enter Room" onClick={this.handleClick} />
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

