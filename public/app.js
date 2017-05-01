angular.module('RapidPrototype', ['ngRoute'])
.controller('PrototypeController', PrototypeController)
.config(routeStuff);


routeStuff.$inject = ['$routeProvider'];
function routeStuff($routeProvider){
	$routeProvider
	.when('/', {
		template:'<h1>THIS IS A TEST THIS IS A HUGE TEST</h1>'
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
	vm.hello = "YO WUDUP WE GON DO THIS";
	vm.allCool = [];
	vm.allBangin = [];
	vm.getCoolEmoticons = getCoolEmoticons;
	vm.getBanginEmoticons = getBanginEmoticons;

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



}