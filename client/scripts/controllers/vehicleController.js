/**
 * Created by JFCS on 4/10/16.
 */
myApp.controller('VehicleController',['$scope','CustomerService','VehicleService',function($scope,CustomerService,VehicleService){
    var vehicleService = VehicleService;
    var customerService = CustomerService;
    $scope.customers = [];
    $scope.years = [];
    $scope.makes = [];
    $scope.models = [];
    $scope.engines = [];
    $scope.vehicle = {};

    $scope.getCustomers = function(){
        customerService.customerList();
    };

   $scope.saveCustomerId = function(id){
        console.log('customer id', id);
        $scope.vehicle.customer_id = id;
        console.log('$scoped id',  $scope.vehicle.customer_id );
    };

    $scope.getYearsArray = function(){
        $scope.years = vehicleService.years;
    };

    $scope.getMakesList = function(year){
        $scope.makes = [];
        $scope.models = [];
        $scope.engines = [];
        $scope.vehicle.make = '';
        $scope.vehicle.model = '';
        $scope.vehicle.engine = '';
        vehicleService.getMakes(year);
        $scope.makes = vehicleService.makes;
    };

    $scope.getModelsList = function(make){
        $scope.models = [];
        $scope.engines = [];
        for(var i = 0; i<make.models.length;i++) {
            $scope.models.push(make.models[i]);
        }

    };
    $scope.getEngine = function(model){
        $scope.vehicle.model = model;
        $scope.engines = [];
        vehicleService.getEngines($scope.vehicle);
        $scope.engines = vehicleService.engines;
    };

    $scope.postVehicle = function(vehicle){
        console.log(vehicle);
        vehicleService.postVehicle(vehicle);
        $scope.vehicle = {};
    };

    $scope.customers =  customerService.customers;

    $scope.getCustomers();
    vehicleService.setYears();
    $scope.getYearsArray();
}]);
