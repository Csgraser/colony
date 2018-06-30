import axios from 'axios';
import { browserHistory } from 'react-router';

function createRoom(state = [], action){
	switch(action.type){
		case 'CREATE_ROOM':
			console.log('create room reducer');
			// return [
			// 	...state,
			// 	{
			// 		roomCode: 'asdf',
			// 		players: []
			// 	}
			// ];
			return function(dispatch){
				axios.post('/createRoom')
					.then( response => {
						console.log(response);
						response;
						browserHistory.push('.linklanding');
					});
					
			}
		default: 
			return state;
	}
}

export default createRoom;
