'use strict'
const express		= require('express');
const bodyParser	= require('body-parser');
const app			= express();
const port			= process.env.PORT || 3000;
// const db			= require('./models');

// app.use(bodyParser.urlenconded({extended: true}));
app.use(bodyParser.json());



//Serve static files from Public//
app.use(express.static(__dirname + '/public'));




//Start Server//
app.listen(port, function(){
	console.log('Server starting on, ' + port);
});