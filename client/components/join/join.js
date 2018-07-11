import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./join.styl"

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
                <br/>
                </label>
                <label>
                Name
                <input type="text" name="name" />
                <br/>
                </label>
                <br/>
                <input type="submit" className="submitButton" value="Enter Room" onClick={this.handleClick} />
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

