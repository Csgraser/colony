import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import {createRoom,joinRoom,addMainSocketURL} from '../actions/actionCreators';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp,faThumbsDown,faComment);

function mapStateToProps(state) {
  return {
		connection: state.connections,
		socket: state.socket,
		colonists: state.colonists
  }
}

function mapDispachToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
	// return {
	// 	createRoom: () => dispatch(createRoom()),
	// 	joinRoom: () => dispatch(joinRoom()),
	// 	addMainSocketURL: () => dispatch(addMainSocketURL())
	// }
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;

