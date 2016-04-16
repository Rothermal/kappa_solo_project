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
            '50': '#965836',
            '100': '#834d2f',
            '200': '#704228',
            '300': '#5e3721',
            '400': '#4b2c1b',
            '500': '#382114',
            '600': '#25160d',
            '700': '#120b07',
            '800': '#000000',
            '900': '#000000',
            'A100': '#a9633c',
            'A200': '#bc6f43',
            'A400': '#c27d56',
            'A700': '#000000'
        };
        $mdThemingProvider
            .definePalette('customPrimary',
                customPrimary);

        var customAccent = {
            '50': '#000000',
            '100': '#000000',
            '200': '#000000',
            '300': '#000000',
            '400': '#120e07',
            '500': '#251c0d',
            '600': '#4b381b',
            '700': '#5e4621',
            '800': '#705428',
            '900': '#83622f',
            'A100': '#4b381b',
            'A200': '382A14',
            'A400': '#251c0d',
            'A700': '#967036'
        };
        $mdThemingProvider
            .definePalette('customAccent',
                customAccent);

        var customWarn = {
            '50': '#345680',
            '100': '#2c4a6e',
            '200': '#253e5b',
            '300': '#1e3249',
            '400': '#162537',
            '500': '0F1925',
            '600': '#080d13',
            '700': '#000001',
            '800': '#000000',
            '900': '#000000',
            'A100': '#3b6392',
            'A200': '#426fa4',
            'A400': '#4a7bb6',
            'A700': '#000000'
        };
        $mdThemingProvider
            .definePalette('customWarn',
                customWarn);

        var customBackground = {
            '50': '#ab9080',
            '100': '#a18270',
            '200': '#957562',
            '300': '#866958',
            '400': '#765d4e',
            '500': '675144',
            '600': '#58453a',
            '700': '#483930',
            '800': '#392d26',
            '900': '#2a211b',
            'A100': '#b59d8f',
            'A200': '#bfab9e',
            'A400': '#c9b8ae',
            'A700': '#1a1511'
        };


    $mdThemingProvider
        .definePalette('customBackground',
            customBackground);

    $mdThemingProvider.theme('default')
        .primaryPalette('customPrimary')
        .accentPalette('customAccent')
        .warnPalette('customWarn');
        //.backgroundPalette('customBackground');





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