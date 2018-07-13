import React from 'react';
import { Link } from 'react-router';
import GameHostCard from '../GamePlay/GameHostCard'
// import Avatar from 'material-ui/Avatar';


const GameHost = (props) => {
	return (
		<div className="game">
						<Link className="buttonName" to="/">
					<button className="button">

						Back to Start
						
					</button>
				</Link>
			<div>
				<GameHostCard />
	
    </div>
		</div>
	);
}

export default GameHost;