/**
 * Created by JFCS on 4/9/16.
 */
myApp.controller('CustomerController',['$scope','CustomerService',function($scope,CustomerService){
    var customerService = CustomerService;
    $scope.test = customerService.test;
    $scope.title = "This is the Customer Controller";



}]);