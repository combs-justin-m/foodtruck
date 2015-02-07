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

exports = module.exports = mongoose.model('User', UserSchema);