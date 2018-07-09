const uuidv4 = require('uuid/v4');

/*
*	createUser
*	Creates a user.
*	@prop id {string}
*	@prop name {string}
*	@param {object} 
*		name {string}
*/
const createUser = ({name = ""} = {})=>(
	console.log('2. create user hit', name),
	{
		id:uuidv4(),
		name
		
	}
)


module.exports = {
	createUser
}