'use strict';

/* jshint ignore:start */

console.log('hi');

var app = angular.module('commanderApp', [require('angular-route')]);

app.controller('MainCtrl', ['$scope', function ($scope) {

	$scope.cardNames = [];

	console.log('test');
    $scope.tests = ['one', 'two', 'three'];

    $http({method: 'GET', url: '/cards'}).
    	success(function(data, status, headers, config){
    		// console.log('cards: ' + data);
    		console.log('success');
    	}).
    	error(function(data, status, headers, config){
    		console.log('error');
    	});

}]);



/* jshint ignore:end */
