angular.module('RapidPrototype', ['ngRoute'])
.controller('PrototypeController', PrototypeController)
.config(routeStuff);


routeStuff.$inject = ['$routeProvider'];
function routeStuff($routeProvider){
	$routeProvider
	.when('/', {
		template:'<h1>HEY THERE WELCOME TO THE EMOTICON PARTY WANNA JOIN? (ツ)_/¯</h1>'
	})
	.when('/cool', {
		templateUrl: '/templates/coolTemplate.html',
		controller: 'PrototypeController'
	})
	.when('/bangin', {
		templateUrl: '/templates/banginTemplate.html',
		controller: 'PrototypeController'
	});
}

PrototypeController.$inject = ['$http'];
function PrototypeController($http){
	var vm = this;
	vm.hello = "THE EMOTICON PARTY PLACE";
	//***************//
	//COOL__FUNCTIONS//
	//***************//
	vm.allCool = [];
	vm.newCoolEmoticon = {};
	vm.getCoolEmoticons = getCoolEmoticons;
	vm.addCoolEmoticon = addCoolEmoticon;

	
	//*****************//
	//BANGIN__FUNCTIONS//
	//*****************//
	vm.allBangin = [];
	vm.newBanginEmoticon = {};
	vm.getBanginEmoticons = getBanginEmoticons;
	vm.addBanginEmoticon = addBanginEmoticon;
	
	



	//GET'S EMOTICONS W/STATUS 'COOL'//
	getCoolEmoticons();
	function getCoolEmoticons(){
		$http
		.get('http://localhost:3000/cool')
		.then(function(response){
			vm.allCool = response.data;
		});
	}

	//GET'S EMOTICONS W/STATUS 'BANGIN'//
	getBanginEmoticons();
	function getBanginEmoticons(){
		$http
		.get('http://localhost:3000/bangin')
		.then(function(response){
			vm.allBangin = response.data;
		});
	}

	//POST COOL EMOTICON//
	
	function addCoolEmoticon(){
		$http
		.post('http://localhost:3000/cool', vm.newCoolEmoticon)
		.then(function(response){
			vm.allCool.push(response.data);
		});
		vm.newCoolEmoticon = {};
	}

	//POST BANGIN EMOTICON//
	function addBanginEmoticon(){
		$http
		.post('http://localhost:3000/bangin', vm.newBanginEmoticon)
		.then(function(response){
			vm.allBangin.push(response.data);
		});
		vm.newBanginEmoticon = {};
	}



}