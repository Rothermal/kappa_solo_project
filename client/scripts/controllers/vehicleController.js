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
    $scope.vehicle = {};

    $scope.getCustomers = function(){
        customerService.customerList();
    };

    $scope.getYearsArray = function(){
        $scope.years = vehicleService.years;
    };

    $scope.getMakesList = function(year){
        $scope.makes = [];
        $scope.models = [];
        $scope.vehicle.make = '';
        $scope.vehicle.model = '';
        vehicleService.getMakes(year);
        $scope.makes = vehicleService.makes;
    };
    $scope.getModelsList = function(make){
        $scope.models = [];
        for(var i = 0; i<make.models.length;i++) {
            $scope.models.push(make.models[i]);
        }

    };

    $scope.customers =  customerService.customers;

    $scope.getCustomers();
    vehicleService.setYears();
    $scope.getYearsArray();
}]);
