import React from 'react';
// import { colonists, infected } from '../data/characters';
// import playerImage from `${colonists[0].photo}`;

export default function GameHostCard(props) {
	return (
		<div className="GameHostCard">
			<div className="GameHostCard-image" />
			<span className="GameHostCard-timer linkEnter">Timer Here</span>

			<button className="button">End Game</button>
		</div>
	)
}