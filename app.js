var myapp = angular.module('myapp',[])

myapp.controller('MyCtrl', ['AppService', 
    function(AppService){
        var self = this;
        self.greeting = 'Hi SG';
        self.onQueryChange = function(){
            var filterPromise =  AppService.getFilteredUsers(self.query)
            filterPromise.then(function(res){
                self.users = res;
            });
        };

        self.sayHello = function(){
            self.greeting = 'MODIFIED VALUE';
        };

        var userPromise = AppService.getUsers();
        
        userPromise.then(function(result){
            console.log(result);
            self.users = result.data;
        });

        self.onViewBtnClick = function(userDetails){
            self.selectedUser = userDetails;
        };

}]);