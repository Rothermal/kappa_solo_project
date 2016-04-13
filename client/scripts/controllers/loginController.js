/**
 * Created by JFCS on 4/8/16.
 */
myApp.controller('LoginController',['$scope','CustomerService','LoginService',function($scope,CustomerService,LoginService){
    var customerService = CustomerService;
    var loginService = LoginService;
    $scope.User = {};
    $scope.newUser = {};
    $scope.test = customerService.test;
    $scope.title = "Melancholy Motors . . .";
    $scope.login ="Log in . . . to continue . . .";
    $scope.loginFunction = function(user){
        loginService.login(user);
        $scope.User = {};
    };
    $scope.goRegister = function() {
    console.log('go register');
        loginService.goRegister();
    };
    $scope.registerUser = function(newUser){
        console.log(newUser);
        if(newUser.password !== newUser.verifyPassword){
            alert('passwords did not match, please try again');
            $scope.newUser.password = '';
            $scope.newUser.verifyPassword = '';
        } else {
            loginService.register(newUser);
            $scope.newUser = {};
        }
    };

}]);