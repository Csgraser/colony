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

//Join a Room
export function joinRoom(name,code){
	return {
		type: 'JOIN_ROOM',
		name,
		code
	}
}

// Create a room and code for users to enter room then redirect user to main game landing page
export function createRoom() {
  return function(dispatch){
    axios.post('/api/createRoom')
      .then( response => {
				console.log('action creator response: ', response);
        dispatch({type: 'CREATE_ROOM', payload: response});
        browserHistory.push('/mainlanding');
      })
  }
}
