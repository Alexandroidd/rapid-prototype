'use strict'
const express		= require('express');
const bodyParser	= require('body-parser');
const app			= express();
const port			= process.env.PORT || 3000;
const db			= require('./models');

// app.use(bodyParser.urlenconded({extended: true}));
app.use(bodyParser.json());



//Serve static files from Public//
app.use(express.static(__dirname + '/public'));

//INDEX ROUTE//
app.get('/api', function(req,res){
	db.Emoticon.find({}, function(err, emoticons){
		res.json(emoticons);
	});
});

//SHOW ROUTE FOR COOL//
app.get('/cool', function getCoolEmoticons(req, res){
	db.Emoticon.find({'status': 'cool'}, function(err, emoticons){
		console.log('this is working');
		res.json(emoticons);
	});
});

//SHOW ROUTE FOR BANGIN//
app.get('/bangin', function getBanginEmoticons(req,res){
	db.Emoticon.find({'status': 'bangin'}, function(err,emoticons){
		res.json(emoticons);
	});
});

//POST ROUTE FOR COOL//
app.post('/cool', function makeCoolEmoticon(req,res){
	var newEmoticon = new db.Emoticon({
		image: req.body.image,
		name: req.body.name,
		status: 'cool'
	});
	console.log(newEmoticon);
	newEmoticon.save(function(err, emoticon){
		if(err){return console.log('save error ' + err);}
		res.json(emoticon);
	});
});


//POST ROUTE FOR BANGIN//
app.post('/bangin', function makeBanginEmoticon(req,res){
	var newEmoticon = new db.Emoticon({
		image: req.body.image,
		name: req.body.name,
		status: 'bangin'
	});
	console.log(newEmoticon);
	newEmoticon.save(function(err, emoticon){
		if(err){return console.log('save error ' + err);}
		res.json(emoticon);
	});
});

//DELETE ROUTE FOR ALL//
app.delete('/delete/:id', function deleteEmoticon(req,res){
	let status;
	db.Emoticon.findOne({_id: req.params.id}, function find(err, emoticonToDelete){
		status = emoticonToDelete.status;
		db.Emoticon.remove(emoticonToDelete, function destory(err, destroyedOne){
			res.json(status);
		});
	});

});





//Start Server//
app.listen(process.env.PORT || 3000, function(){
	console.log('Server starting on, ' + port);
});