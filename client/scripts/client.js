/**
 * Created by JFCS on 4/6/16.
 */
var myApp = angular.module('myApp',['ngRoute']);


myApp.config(['$routeProvider','$locationProvider',  function($routeProvider,$locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController'
        })
        //.when('/petform', {
        //    templateUrl: '/views/templates/pet-form.html',
        //    controller: 'FormController'
        //})
        //.when('/petlist', {
        //    templateUrl: '/views/templates/pet-view.html',
        //    controller: 'PetListController'
        //})
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);