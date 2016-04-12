/**
 * Created by JFCS on 4/11/16.
 */
myApp.factory('HomeService',['$http',function($http){
    var Repairs = {};

    var getRepairs = function(){

        $http.get('/repairs').then(function (response){
           console.log ( 'repairs in home factory get',response.data);
            Repairs.object = response.data;
        });
    };

    return {
      getRepairs:getRepairs,
        repairs : Repairs
    };

}]);