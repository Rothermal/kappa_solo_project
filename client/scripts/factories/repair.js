/**
 * Created by JFCS on 4/6/16.
 */
console.log('grunt is watching');
myApp.factory('CustomerService',['$http',function($http){
    var Customers = {};
    var Vehicles = {};
    var test = 'injection is real';


   var getCustomers = function(){
       $http.get('/customers').then(function(response){
           console.log('customers in factory',response);
           Customers.object = response.data;
       });
   };

    var getVehicles = function(id){
        $http.get('/vehicles/'+id).then(function(response){
           console.log('response in factory, vehicle list',response) ;
            Vehicles.object = response.data;
        });
    };

    return {
        test:test,
        customers:Customers,
        customerList:getCustomers,
        vehicles:Vehicles,
        vehicleList:getVehicles
    };

}]);