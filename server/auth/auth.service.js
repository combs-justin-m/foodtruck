'use strict';

var jwt = require('jsonwebtoken');
var crypto = require('crypto');

var config = requireRoot('config');
var User = requireRoot('user/user.model');

exports.authenticate = function (params, callback) {
	function invalid() {
		callback(null, { error: 'Invalid username or password' });
	}

	if (!params.username || !params.password) return invalid();

	User.find({ username: params.username }, function (err, users) {
		if (err) return callback(err);
		if (!users.length) return invalid();

		var user = users[0];

		if (user.authenticate(params.password)) {
			var token = jwt.sign(user.username, config.secret, {
				expiresInMinutes: 30 * 24 * 60 // 30 days
			});

			var result = {
				token: token,
				principal: user.toJSON()
			}

			callback(null, result);
		} else {
			invalid();
		}
	});
}