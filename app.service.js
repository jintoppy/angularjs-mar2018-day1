angular.module('myapp')
    .service('AppService', ['$http', 
    function($http){
            this.getUsers = function(){
                return $http.get('/db/users.json');
            };

            this.getFilteredUsers = function(query){
                return users.filter(function(item){
                    return item.name
                                 .toLowerCase()
                                 .includes(query.toLowerCase());
                });
            };

    }]);
