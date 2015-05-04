'use strict';

/* jshint ignore:start */

console.log('hi');

var app = angular.module('commanderApp', ['ngRoute']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

	$scope.colors = ['White', 'Blue', 'Black', 'Red', 'Green'];

    $scope.getCards = function(color) {
        $http({
            method: 'GET',
            url: '/cards/color/' + color,
        }).success(function(data){
            console.log(data);
        });
    }



}]);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/index.html',
        controller: 'MainCtrl'
    }).otherwise({
        redirectTo: "/"
    });
}]);

/* jshint ignore:end */