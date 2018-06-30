var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object

var hostSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
	},
	
	password: {
		type: String,
		required: false
	}
	
});

// This creates our model from the above schema, using mongoose's model method
var Host = mongoose.model("Host", hostSchema);

// Export the host model
module.exports = Host;
