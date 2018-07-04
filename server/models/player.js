var mongoose = require("mongoose");
// var Monster = require("./monster.js");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object

var playerSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  character: {
    type: String,
    required: false
	},
	
	vote: {
		type: String,
		required: false
	},
	roomCode: {
		type: String,
		ref: "Monster",
		required: false
	}
	
});

// This creates our model from the above schema, using mongoose's model method
var Player = mongoose.model("Player", playerSchema);

// Export the host model
module.exports = Player;
