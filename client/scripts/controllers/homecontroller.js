/**
 * Created by JFCS on 4/6/16.
 */

myApp.controller('HomeController',['$scope','CustomerService',function($scope,CustomerService){
    var customerService = CustomerService;
    $scope.test = customerService.test;
    $scope.title = "This is the Home Controller";



}]);