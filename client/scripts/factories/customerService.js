/**
 * Created by JFCS on 4/6/16.
 */
console.log('grunt is watching');
myApp.factory('CustomerService',['$http',function($http){
    var Customers = {};
    var Vehicles = {};
    var test = '';


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

    var postRepair = function(repair){
        $http.post('/repairs',repair).then(function(response){
            console.log('response in post repairs factory should be repair id.',response);
            lastPostedRepair_id.object = response.data[0];
            console.log(lastPostedRepair_id);
        });

    };

    var postCustomer = function(newCustomer){
        $http.post('/customers',newCustomer).then(function(response){
           console.log('response in post customers factory, should be customer id.',response);
        });
    };

    var deleteRepair = function(id){
        $http.delete('/repairs/'+id).then(function(response){
            console.log('response in factory, delete repair',response) ;
        });
    };


    return {
        test:test,
        customers:Customers,
        customerList:getCustomers,
        vehicles:Vehicles,
        vehicleList:getVehicles,
        postRepair:postRepair,
        postCustomer:postCustomer,
        deleteRepair:deleteRepair
    };

}]);