var mongoose = require('mongoose');
var crypto = require('crypto');

var MenuSchema = new mongoose.Schema({
	name: String,
	category: String,
	price: Number,
	description: String,
	imageUrl: String,
	imageDate: Buffer
}, { collection: 'menu' });


exports = module.exports = mongoose.model('Menu', MenuSchema);