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
		template: '<h1>THIS IS WHERE BANGIN EMOTICONS GO</h1'
	});
}

PrototypeController.$inject = ['$http'];
function PrototypeController($http){
	var vm = this;
	vm.hello = "YO WUDUP WE GON DO THIS";
	vm.all = [];
	vm.getEmoticons = getEmoticons;


	getEmoticons();
	function getEmoticons(){
		$http
		.get('http://localhost:3000/cool')
		.then(function(response){
			vm.all = response.data;
			console.log(vm.all);
		});
	}
}