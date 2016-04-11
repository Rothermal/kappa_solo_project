/**
 * Created by JFCS on 4/6/16.
 */
var myApp = angular.module('myApp',['ngRoute', "ngMaterial", "ngAnimate"]);


myApp.config(['$routeProvider','$locationProvider',  function($routeProvider,$locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'assets/views/templates/home.html',
            controller: 'HomeController'
        })
        .when('/addcustomer', {
            templateUrl: 'assets/views/templates/addcustomer.html',
            controller: 'CustomerController'
        })
        .when('/addrepair', {
            templateUrl: 'assets/views/templates/addrepair.html',
            controller: 'RepairController'
        })
        .when('/addvehicle', {
            templateUrl: 'assets/views/templates/addvehicle.html',
            controller: 'VehicleController'
        })
        .when('/addparts', {
            templateUrl: 'assets/views/templates/addparts.html',
            controller: 'PartsController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);