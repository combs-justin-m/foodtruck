'use strict';

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
			callback(null, { token: '1234' });
		} else {
			invalid();
		}
	});
}