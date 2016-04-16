/**
 * Created by JFCS on 4/11/16.
 */
myApp.factory('PartsService',['$http',function($http){
    var Parts = {};

    var postParts = function(parts) {
     console.log(parts);
        $http.post('/parts', parts).then(function (response) {
        console.log(response);
            //getParts(parts.id);
        });
    };

    var getParts = function(repairId){
      $http.get('/parts/'+repairId).then(function(response){
        console.log(response.data);
          Parts.object = response.data;
      });
    };

    var updatePart = function(parts){
        //console.log('update to send',parts.object);

        for(var i = 0 ;i< parts.object.length;i++) {
             sendUpdate(parts.object[i]);
        }
    };

    var sendUpdate = function(part){
        $http.put('/parts', part).then(function (response) {
            console.log('response in parts factory',response.data);

        });
    };


    return {
        postParts:postParts,
        getParts:getParts,
        parts:Parts,
        updatePart: updatePart
    };

}]);