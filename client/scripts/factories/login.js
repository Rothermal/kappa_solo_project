/**
 * Created by JFCS on 4/8/16.
 */
myApp.factory('LoginService',['$http',function($http){
    test = ' login injection is real';
    var user = {};
    //$scope.userName;


    var loginUser = function(user){

    };

    var registerUser = function(user){
        $http.post('/register',user).then(function(response){

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
        user:user
    };

}]);