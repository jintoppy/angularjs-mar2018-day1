var myapp = angular.module('myapp',[])

myapp.controller('MyCtrl', ['$scope', 'AppService', 
    function($scope, AppService){
        $scope.greeting = 'Hi SG';

        $scope.onQueryChange = function(){
            $scope.users = AppService.getFilteredUsers($scope.query)
        };

        $scope.sayHello = function(){
            $scope.greeting = 'MODIFIED VALUE';
        };

        var userPromise = AppService.getUsers();
        userPromise.then(function(result){
            $scope.users = result.data;
        });

        $scope.onViewBtnClick = function(userDetails){
            $scope.selectedUser = userDetails;
        };

}]);

