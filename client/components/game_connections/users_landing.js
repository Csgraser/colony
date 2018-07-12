import React from 'react';
import UserCard from '../UserCard';
// import Avatar from 'material-ui/Avatar';


const UsersListEntry = (props) => {
	return (
		<div className="userImage">
			<div>
				<UserCard />
	
    </div>
		</div>
	);
}


{/* {props.photo !== '' ?
	<div>
	<Avatar src= {props.photo} size= {75} disabled= {true}/>
	{props.username}
	</div> :
	<div>{props.username}</div>
} */}