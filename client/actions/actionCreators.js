import axios from 'axios';
import { browserHistory } from 'react-router';
//increment
//Todo add author
export function increment(index) {
	return {
		type: 'INCREMENT_VOTES',
		index
	}
}

//add comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT' ,
		postId,
		author,
		comment
	}
}

//remove comment
export function removeComment(postId, i) {
	return {
		
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}

//Create room
// export function createRoom() {
// 	return {
// 		type: 'CREATE_ROOM'
// 	}
// }

// //Create room async
// export function asyncCreateRoom() {
// 	return dispatch => dispatch(createRoom());
// }
export function createRoom() {
  return function(dispatch){
    axios.post('/createRoom')
      .then( response => {
				console.log(response);
        dispatch({type: 'CREATE_ROOM', payload: response});
        browserHistory.push('/mainlanding');
      })
  }
}
