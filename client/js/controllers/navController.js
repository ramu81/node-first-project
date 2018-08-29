myApp.controller('navController',['$scope','$location',function($scope,$location){
	$scope.isActive = function(dest){
		return dest=== $location.path();
	}
}]);