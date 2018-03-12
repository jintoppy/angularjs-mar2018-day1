angular.module('myapp')
    .service('AppService', ['$http', 
    function($http){
            this.getUsers = function(){
                return $http.get('/db/users.json');
            };

            this.getFilteredUsers = function(query){
                var userPromise = this.getUsers();
                return userPromise.then(function(result){
                    var users = result.data;
                    return users.filter(function(item){
                        return item.name
                                    .toLowerCase()
                                    .includes(query.toLowerCase());
                    });
                });
                
            };

    }]);
