/**
 * Created by JFCS on 4/11/16.
 */
myApp.factory('PartsService',['$http',function($http){
    var Parts = {};

    var postParts = function(parts) {
     console.log(parts);
        $http.post('/parts', parts).then(function (response) {
        console.log(response);
        });
    };

    var getParts = function(repairId){
      $http.get('/parts/'+repairId).then(function(response){
        console.log(response.data);
          Parts.object = response.data;
      });
    };

    return {
        postParts:postParts,
        getParts:getParts,
        parts:Parts
    };

}]);