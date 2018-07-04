import React from 'react';
import Photo from './Photo';
import Nav from './Nav';

const GameGrid = React.createClass({
	render() {
		return (
			<div className="game-grid">
				{/* {this.props.posts.map((post,i) => <Photo {...this.props} key={i} i={i} post={post}/>)} */}
				<Nav handle />
			</div>
		)
	}
});

export default GameGrid;