/**
 * Created by JFCS on 4/8/16.
 */
myApp.controller('LoginController',['$scope','CustomerService','LoginService',function($scope,CustomerService,LoginService){
    var customerService = CustomerService;
    var loginService = LoginService;
    $scope.User = {};
    $scope.test = customerService.test;
    $scope.title = "This is the login Controller";
    $scope.login ="Log in to continue";
    $scope.loginFunction = function(user){
        loginService.login(user);
        $scope.User = {};
    };
    $scope.goRegister = function() {
    console.log('go register');
        loginService.goRegister();
    };
}]);