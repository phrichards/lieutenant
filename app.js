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

app.controller('MainCtrl', ['$scope', 'cardsFactory', function ($scope, cardsFactory) {

	$scope.colors = ['White', 'Blue', 'Black', 'Red', 'Green'];
    $scope.cards = [];
    $scope.name = '';
    $scope.nums = 2;
    $scope.colorResult = ["White", "Blue"];
    
    $scope.colorModels = {
        White: false,
        Blue: false,
        Black: false,
        Red: false,
        Green: false
    }

    $scope.chosenColors = [];

    $scope.displayCards = function(color) {
        $scope.chosenColors = [];
        angular.forEach($scope.colorModels, function(obj, key, val){
            if ($scope.colorModels.hasOwnProperty(key) && $scope.colorModels[key]) {
                $scope.chosenColors.push(key);
            }
        });

        $scope.chosenColors.sort();
        $scope.cards = [];

        cardsFactory.getCards($scope.chosenColors[0]).then(function(result){
            angular.forEach(result, function(val, key){
                if (val.colors.length == 1) {
                    var resultColors = val.colors;
                } else {
                    var resultColors = val.colors.sort();    
                }

                if (angular.equals($scope.chosenColors, resultColors)) {
                    $scope.cards.push(val);
                }
            });
            var prop = color.toString();
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