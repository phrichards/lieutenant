'use strict';

/* jshint ignore:start */

var app = angular.module('commanderApp', ['ngRoute']);

app.factory('cardsFactory', ['$http', '$q', function($http, $q){
    return {
        getCards: function(color) {
            var deferred = $q.defer();
            $http.get('/cards/color/' + color)
            .success(function(result){
                deferred.resolve(result);
            });
            return deferred.promise;
        }
    };
}]);

app.controller('MainCtrl', ['$scope', '$http', 'cardsFactory', function ($scope, $http, cardsFactory) {

	$scope.colors = ['White', 'Blue', 'Black', 'Red', 'Green'];
    $scope.cards = [];
    $scope.name = '';
    $scope.card = {};

    $scope.displayCards = function(color) {
        cardsFactory.getCards(color).then(function(result){
            console.log(result);
            $scope.cards.push(result);
            console.log($scope.cards);
        });
    };





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