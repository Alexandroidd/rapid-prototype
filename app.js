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
		template: '<h1>THIS IS WHERE COOL EMOTICONS GO</h1>'
	})
	.when('/bangin', {
		template: '<h1>THIS IS WHERE BANGIN EMOTICONS GO</h1'
	});
}


function PrototypeController(){
	var vm = this;
	vm.hello = "YO WUDUP WE GON DO THIS";
}