import React from 'react';
import "./instructions.styl"
import characters from '../../data/characters';

const Instructions = (props) => (
    <div className="instructions">
        <ol className="heading">How to Play</ol>
        <li className="item">Click on "Login & Create Game Room"</li>
				<li className="item">Users Go to Website on Personal Device</li>
				<li className="item">Click Join a Game and enter Game Code and Name, then press Enter Room  </li>
				<li className="item">Once all Users have joined Room, click Start Game on host device - and let the app do the rest!</li>
				<br/>
				{characters.map((photo, index) => {
			return <div className="photoContainer" key={index} ><img className="photos" src={photo.photo} alt={photo.name}
			/></div>;
		})}
    </div>

);


export default Instructions

