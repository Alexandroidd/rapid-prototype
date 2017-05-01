var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/rapid-prototype");

module.exports.Emoticon = require('./emoticons.js');