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