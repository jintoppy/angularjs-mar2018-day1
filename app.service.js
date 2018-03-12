angular.module('myapp')
    .service('AppService', [function(){
            var users = [
                {
                    name: 'Ajith',
                    age: 20
                },
                {
                    name: 'Renju',
                    age: 21
                }
            ];

            this.getUsers = function(){
                return users;
            };

    }]);
