angular.module('myapp')
    .filter('customName', [function(){

        return function(val, user){
            var salutation = 'Senior';
            if(user.age <= 20){
                salutation = 'Junior';
            }
            
            return salutation + ' ' +val.substr(0,2).toUpperCase();
        };

    }]);