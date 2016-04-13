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

    var updateRepair = function(repair){

        $http.put('/repairs',repair).then(function(response){
           console.log('updated repair in factory', response.data);
        });
    };

    var updateCustomer = function(customer){
            console.log('before update',customer);
        $http.put('/customers',customer).then(function(response){
           console.log('update customer in factory',response.data);
        });
    };

    return {
      getRepairs:getRepairs,
        repairs : Repairs,
        updateRepair:updateRepair,
        updateCustomer:updateCustomer
    };

}]);