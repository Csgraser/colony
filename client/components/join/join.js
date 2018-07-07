import React, { Component } from 'react';
import { connect } from 'react-redux';

class Join extends Component {
    constructor(props) {
        super(props)
        console.log(this.props, 'join props');
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
                <input type="submit" value="Enter Room" />
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

