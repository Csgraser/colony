import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {createRoom} from '../actions/actionCreators';
import Main from './Main';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsUp,faThumbsDown,faComment);

function mapStateToProps(state) {
  return {
		connection: state.connection
  }
}

function mapDispachToProps(dispatch) {
	// return bindActionCreators(actionCreators, dispatch);
	return {
		createRoom: () => dispatch(createRoom())
	}
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;

