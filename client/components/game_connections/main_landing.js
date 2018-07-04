import React, { Component } from 'react';
import { connect } from 'react-redux';


class MainLanding extends Component {
  // componentDidMount(){
  //   joinRoom(this.props.link);
  //   this.props.fetchGame();
	// }

	render() {

    return (
      <div className="linkEnter">
        <div id="linkcode">Link Code: </div>
      </div>
    );
  }
}
export default MainLanding