/**
 * Created by JFCS on 4/9/16.
 */
myApp.controller('SidenavController',['$scope','$mdSidenav', function($scope, $mdSidenav) {
    $scope.toggleLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
}]);