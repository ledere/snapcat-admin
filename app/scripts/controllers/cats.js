'use strict';

angular.module('snapcatAdminApp')
  .controller('CatsCtrl', function ($scope) {
	
	$http({method: 'GET', url: 'http://localhost:3000/cats/'}).
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
		$scope.cats = data.cats;
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
		$scope.cats = [];
	  });
  });
