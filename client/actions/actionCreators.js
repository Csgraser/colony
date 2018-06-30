import axios from 'axios';
import { browserHistory } from 'react-router';
import { joinRoom, createUserSockets, startGame, hostJoins } from '../sockets_client';

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

//Create a game room
export function createSession() {
  return function(dispatch){
    axios.post('/create')
      .then( response => {
        dispatch({type: 'CREATE_SESSION', payload: response.data.session.code});
        browserHistory.push('/userlanding');
      })
  }
}