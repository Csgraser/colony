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
	console.log('join room action: ', name, code);
	return function(dispatch){
		axios.put('/api/addPlayer',{code,name})
		.then( response => {
			console.log('join room action creator response: ', response);
			dispatch({type: 'JOIN_ROOM', payload: response});
			browserHistory.push('/userlanding');
		})
	}
}

//Start Game
export function startGame(code){
	console.log('start game action: ', code);
	return function(dispatch){
		axios.put('/api/startGame/',{code})
		.then( response => {
			console.log('start game action creator response: ', response);
			dispatch({type: 'START_GAME', payload: response});
			browserHistory.push('/gamehost'); 
		})
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
