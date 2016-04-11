/**
 * Created by JFCS on 4/9/16.
 */
myApp.controller('RepairController',['$scope','CustomerService',function($scope,CustomerService){
    var customerService = CustomerService;
    $scope.repairTypeArray = ['Consultation','Engine Diagnostics','Engine Electrical','Engine Mechanical',
        'Steering and Suspension','Heating and Cooling', 'Brakes', 'Maintenance'];
    $scope.customers = [];
    $scope.vehicles = [];
    $scope.repair = {};
    $scope.test = customerService.test;
    $scope.title = "This is the Repair Controller";

    $scope.getCustomers = function(){
        customerService.customerList();
    };

    $scope.getVehicles = function(id){
      console.log('clicked',id);
        customerService.vehicleList(id);
        setCustomerId(id);
    };

    $scope.setVehicleid= function(id){
        console.log('vehicle id', id);
        $scope.repair.vehicle_id = id;
    };

    function setCustomerId(id){
        console.log('customer id', id);
        $scope.repair.customer_id = id;
    }

    $scope.postRepair = function(repair){
      console.log(repair);
        customerService.postRepair(repair);
        $scope.repair = {};
    };
    $scope.customers =  customerService.customers;
    $scope.vehicles = customerService.vehicles;
    $scope.getCustomers();


}]);