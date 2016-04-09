/**
 * Created by JFCS on 4/9/16.
 */
myApp.controller('RepairController',['$scope','CustomerService',function($scope,CustomerService){
    var customerService = CustomerService;
    $scope.repairTypeArray = ['Consultation','Engine Diagnostics','Engine Electrical','Engine Mechanical',
        'Steering and Suspension','Heating and Cooling', 'Brakes', 'Maintenance'];
    $scope.test = customerService.test;
    $scope.title = "This is the Repair Controller";



}]);