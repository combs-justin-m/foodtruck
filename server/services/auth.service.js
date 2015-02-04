'use strict';

var INVALID_MSG = 'Invalid username or password';

var crypto = require('crypto');
var mongo = require('mongodb');

var config = require('../../config.js').mongo

var MongoClient = mongo.MongoClient

function connect(fn) {
	MongoClient.connect(config.url, function(err, db) {
		if (err) throw err;
		fn(db);
	});
}

function users(db) { 
	return db.collection('users');
}

exports.auth = function (username, password, fn) {
	connect(function (db) {
 		users(db).find({username: username}).toArray(function (err, results) {
 			try {
	 			if (err) throw err;
	 			if (!results.length) return fn({ error: INVALID_MSG });

	 			var result = results[0];
				var hash = crypto.pbkdf2Sync(password, result.salt, 1000, 64).toString('base64'); 	
				
				if (result.password == hash) {
					fn({ token: '1234' })
				} else {
					fn({ error: INVALID_MSG });
				}
			} finally {
				db.close();			
			}
 		});
	});
}