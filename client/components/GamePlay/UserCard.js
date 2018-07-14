import React from 'react';
import { characters } from '../../data/characters';
// import playerImage from `${colonists[0].photo}`;

export default function UserCard(props) {
	return (
		<div className="UserCard">
			<div className="UserCard-image" />
			<span className="UserCard-name">Name: {console.log("usercard props", this)}</span>
			<span className="UserCard-role">Role: {"this should be the assigned user's role infected or colonist"}</span>
		</div>
	)
}


function displayColonistInfo(colonists) {
	let i = colonists.length - 1;
	for (; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = colonists[i];
		colonists[i] = colonists[j];
		colonists[j] = temp;
	}
	return colonists;
};

class RandomCharacter extends React.Component {
  render() {
    const shuffledCharacter = displayColonistInfo(this.props.colonists);
    return (
      <ul>
        {shuffledCharacter.map((colonists, idx) => {
          return (
            <li key={idx}>
              <p>{colonists.name}</p>
              <image>{colonists.photo}</image>
              {/* <Link to={`/blog/post-1/:${post.id}`}>Weiter lesen</Link> */}
            </li>
          );
        })}
      </ul>
    );
  }
}
RandomCharacter.propTypes = {
  colonists: React.PropTypes.colonists,
};


// 	var randomColonist = colonists[Math.floor(Math.random() * colonists.length)];

// 	document.UserCard.innerHTML = randomColonist