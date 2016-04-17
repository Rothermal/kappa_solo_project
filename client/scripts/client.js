/**
 * Created by JFCS on 4/6/16.
 */
var myApp = angular.module('myApp',['ngRoute', "ngMaterial", "ngAnimate",'md.data.table']);


myApp.config(['$routeProvider','$locationProvider','$mdThemingProvider',
    function($routeProvider,$locationProvider,$mdThemingProvider) {

    //$mdThemingProvider.theme('default')
    //    .primaryPalette('blue-grey')
    //    .accentPalette('teal');
    //    //.dark();

        var customPrimary = {
            '50': '#388338',
            '100': '#317131',
            '200': '#296029',
            '300': '#214e21',
            '400': '#1a3c1a',
            '500': '122A12',
            '600': '#0a180a',
            '700': '#030603',
            '800': '#000000',
            '900': '#000000',
            'A100': '#409540',
            'A200': '#48a748',
            'A400': '#53b553',
            'A700': '#000000'
        };
        $mdThemingProvider
            .definePalette('customPrimary',
                customPrimary);

        var customAccent = {
            '50': '#0f110f',
            '100': '#1a1f1a',
            '200': '#262d26',
            '300': '#313b31',
            '400': '#3d493d',
            '500': '#485748',
            '600': '#607360',
            '700': '#6b816b',
            '800': '#778e77',
            '900': '#859a85',
            'A100': '#607360',
            'A200': '#546554',
            'A400': '#485748',
            'A700': '#93a593'
        };
        $mdThemingProvider
            .definePalette('customAccent',
                customAccent);

        var customWarn = {
            '50': '#4e764e',
            '100': '#446644',
            '200': '#395739',
            '300': '#2f482f',
            '400': '#253825',
            '500': '#1B291B',
            '600': '#111a11',
            '700': '#070a07',
            '800': '#000000',
            '900': '#000000',
            'A100': '#588558',
            'A200': '#629562',
            'A400': '#6fa06f',
            'A700': '#000000'
        };
        $mdThemingProvider
            .definePalette('customWarn',
                customWarn);

        var customBackground = {
            '50': '#b7c2b7',
            '100': '#aab6aa',
            '200': '#9cab9c',
            '300': '#8e9f8e',
            '400': '#809380',
            '500': '#738773',
            '600': '#677967',
            '700': '#5c6b5c',
            '800': '#505e50',
            '900': '#445044',
            'A100': '#c5cec5',
            'A200': '#d3d9d3',
            'A400': '#e1e5e1',
            'A700': '#384238'
        };

    $mdThemingProvider
        .definePalette('customBackground',
            customBackground);

    $mdThemingProvider.theme('default')
        .primaryPalette('customPrimary')
        .accentPalette('customAccent')
        .warnPalette('customWarn')
        .backgroundPalette('customBackground');





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
            templateUrl: 'assets/views/templates/addParts.html',
            controller: 'PartsController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
}]);