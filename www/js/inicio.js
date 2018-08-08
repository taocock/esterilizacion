
		var app = angular.module('myApp', []);
		app.controller('myCtrl', function($scope) {
    	$scope.name = "John Doe";
    	$scope.test = function(){
    		$scope.name = "echo click test";
    	}
		});



		alert("fin");  