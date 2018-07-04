var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var gameroomSchema = new Schema({
  //code for people to use to join game
	roomCode: String,
	activeRoom: Boolean,
  // This will be an array of players that will hold all the player information.
  players: { type : Array, "default" : []}
});

// This creates our model from the above schema, using mongoose's model method
var Gameroom = mongoose.model("Gameroom", gameroomSchema);

// Export the gameroom model
module.exports = Gameroom;