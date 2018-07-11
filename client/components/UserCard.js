import React from 'react';
import { colonists, infected } from '../data/characters';
// import playerImage from `${colonists[0].photo}`;

export default function UserCard(props) {
	return (
		<div className="UserCard">
			<div className="UserCard-image" />
			<span className="UserCard-name">HardCodedUser</span>
			<span className="UserCard-role">colonist or infected</span>
		</div>
	)
}

