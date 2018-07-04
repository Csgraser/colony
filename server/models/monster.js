var mongoose = require("mongoose");
// var player = require("./player.js")

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var monsterSchema = new Schema({
  //code for people to use to join game
	roomCode: String,
	activeRoom: Boolean
  // This will be an array of players that will hold all the player information.
  // players: [{type: mongoose.Schema.Types.ObjectId, ref: player}]
});

// This creates our model from the above schema, using mongoose's model method
var Monster = mongoose.model("Monster", monsterSchema);

// Export the monster model
module.exports = Monster;