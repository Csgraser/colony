import React, { Component } from 'react';
import { connect } from 'react-redux';


class MainLanding extends Component {
	constructor(props){
		super(props)
		console.log(this.props,'main landing props');
	}

	render() {

    return (
			<div>
      <div className="linkEnter">
        <div id="linkcode">Game Code: {this.props.connection[0].room.data.roomCode}</div>
      
			</div>
			<button className="startGameButton">Start Game</button>
			
		</div>
    );
  }
}

function mapStateToProps(state){
	return {
		connection: state.connections
	}
}

//Higher order component
export default connect(mapStateToProps)(MainLanding);

