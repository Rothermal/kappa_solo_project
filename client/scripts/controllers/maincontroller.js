/**
 * Created by JFCS on 4/6/16.
 */
var bob = null;
myApp.controller('MAinController',['$scope',function($scope){
    if(bob === null) {
        console.log('grunt is working');
    }
    $scope.title = "WELCOME TO THE HALL OF PRESIDENTS";



}]);