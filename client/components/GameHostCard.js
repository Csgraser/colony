import React from 'react';
// import { colonists, infected } from '../data/characters';
// import playerImage from `${colonists[0].photo}`;

export default function GameHostCard(props) {
	return (
		<div className="GameHostCard">
			<div className="GameHostCard-image" />
			<span className="GameHostCard-name">HardCodedUser</span>
			<span className="GameHostCard-role">colonist or infected</span>
		</div>
	)
}