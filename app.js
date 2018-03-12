var myapp = angular.module('myapp',[])

myapp.controller('MyCtrl', ['$scope', 'AppService', 
    function($scope, AppService){
        $scope.greeting = 'Hi SG';

        $scope.sayHello = function(){
            $scope.greeting = 'MODIFIED VALUE';
        };

        $scope.users = AppService.getUsers();

        $scope.onViewBtnClick = function(userDetails){
            $scope.selectedUser = userDetails;
        };

}]);

