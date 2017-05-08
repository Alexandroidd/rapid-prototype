var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || "mongodb://localhost/rapid-prototype");

 
module.exports.Emoticon = require('./emoticons.js');