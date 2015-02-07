var mongoose = require('mongoose');
var crypto = require('crypto');

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	salt: String,
	name: String
});

function encryptPassword (password, salt) {
	return crypto.pbkdf2Sync(password, salt, 1000, 64).toString('base64'); 	
}


UserSchema.methods = {
	authenticate: function (password) {
		return encryptPassword(password, this.salt) == this.password;
	}
};

UserSchema.options.toJSON = {
	transform: function (doc, ret, options) {
  		delete ret._id;
  		delete ret.password
  		delete ret.salt
  	}
}

exports = module.exports = mongoose.model('User', UserSchema);