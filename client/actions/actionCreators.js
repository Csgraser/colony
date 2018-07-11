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
export function addMainSocketURL(socketURL) {
	return {
		type: 'MAIN_SOCKET' ,
		socketURL
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
<<<<<<< HEAD
	return {
		type: 'JOIN_ROOM',
		name,
		code
=======
	console.log('join room action: ', name, code);
	return function(dispatch){
		axios.put('/api/addPlayer',{code,name})
		.then( response => {
			console.log('join room action creator response: ', response);
			dispatch({type: 'JOIN_ROOM', payload: response});
			browserHistory.push('/userlanding');
		})
>>>>>>> 06bc2a8f9326f6c2bc65af777c20d776afed16c3
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
