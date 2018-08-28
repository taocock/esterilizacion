
		var app = angular.module('myApp', []);
		app.controller('myCtrl', function($scope,$http) {

    	$scope.name = "John Doe";
    	$scope.test = function(){
    		$scope.name = "echo click test";
    		var url = "http://10.138.50.47/esterilizacion/indexapk.php/apk/getServicios";
    		var url = "http://10.138.50.47/apkdemo.html"
        var url = "http://192.168.1.33/hospital/esterilizacion/indexapk.php/apk/getServicios";
  	    $http({method: 'GET', url: url}
        ).success(function(data, status, headers, config) {

          //callback(data);        
          alert(data);
        }).
        error(function(data, status, headers, config) {
          alert("status :" + status);          
          alert("error");    

        });      		

    	};

		});



		alert("fin");  