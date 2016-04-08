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
        //.when('/', {
        //    templateUrl: 'assets/views/index.html',
        //    controller: 'MainController'
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