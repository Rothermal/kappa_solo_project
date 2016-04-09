/**
 * Created by JFCS on 4/8/16.
 */
myApp.factory('LoginService',['$http','$location','$window',function($http,$location,$window){
    test = ' login injection is real';
    var User = {};

    var goRegister = function(){
        // client side redirect.
          $window.location.href = '/register';
    };

    var loginUser = function(user){
        $http.post('/',user).then(function(response){
        console.log('response in factory login user.',response.data);

            if (response.data === false) {
                console.log('it didnt work out');
                $location.path('/');
            } else {
                console.log('redirect to index');
                $window.location.href = '/index';
                //$location.path('/index');

            }
        });
    };

    var registerUser = function(user){
        $http.post('/register',user).then(function(response){
        console.log('response in register user',response);
        });
    };

    //
    //$http.get('/user').then(function(response) {
    //    if(response.data) {
    //        $scope.userName = response.data.username;
    //        console.log('User Data: ', $scope.userName);
    //    } else {
    //        $window.location.href = '/index.html';
    //    }
    //});

    return {
        test:test,
        login:loginUser,
        register:registerUser,
        user:User,
        goRegister:goRegister
    };

}]);