import React from 'react';
import { colonists, infected } from '../../data/characters';
// import playerImage from `${colonists[0].photo}`;

export default function UserCard(props) {
	return (
		<div className="UserCard">
			<div className="UserCard-image" />
			<span className="UserCard-name">Name: {console.log("usercard props",this)}</span>
			<span className="UserCard-role">Role: {"this should be the assigned user's role infected or colonist"}</span>
		</div>
	)
}