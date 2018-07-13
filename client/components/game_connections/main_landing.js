import React, { Component } from 'react';
import { connect } from 'react-redux';


class MainLanding extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		console.log(this.props,'main landing props');
	}

	handleClick(event) {
		event.preventDefault();
		const code = this.props.connection[0].room.data.roomCode;
		// const name = this.refs.name;
		console.log('code', code);
		// const {name,code} = event.target;
		this.props.startGame(code);
	}

	render() {

    return (
			<div>
      <div className="linkEnter">
        <div id="linkcode">Game Code: {this.props.connection[0].room.data.roomCode}</div>
      
			</div>
			<button className="startGameButton" onSubmit={this.handleClick} onClick={this.handleClick}>Start Game</button>
			
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

