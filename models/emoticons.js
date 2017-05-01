var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var EmoticonSchema = new Schema({
	image: String,
	name: String,
	status: String
});

var Emoticon = mongoose.model('Emoticon', EmoticonSchema);
module.exports = Emoticon;
