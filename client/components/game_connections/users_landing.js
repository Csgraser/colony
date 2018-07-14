import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserCard from '../GamePlay/UserCard';


class UsersLanding extends Component {
	constructor(props) {
		super(props);
		console.log('user landing props: ',this.props);
	}


	render() {

		return (
			<div className="userImage">
			<div>
				
				<UserCard name={this.props}/>
	
    </div>
		</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

//Higher order component
export default connect(mapStateToProps)(UsersLanding);

