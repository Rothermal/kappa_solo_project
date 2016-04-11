/**
 * Created by JFCS on 4/11/16.
 */
myApp.factory('PartsService',['$http',function($http){

    var postParts = function(parts) {
     console.log(parts);
        $http.post('/parts', parts).then(function (response) {
        console.log(response);
        });
    };

    return {
        postparts:postParts
    };

}]);