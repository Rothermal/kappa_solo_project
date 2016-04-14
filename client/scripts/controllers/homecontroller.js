/**
 * Created by JFCS on 4/6/16.
 */

myApp.controller('HomeController',['$scope','$http','CustomerService','HomeService','PartsService','$mdDialog','$mdMedia',
    function($scope,$http,CustomerService,HomeService,PartsService,$mdDialog,$mdMedia){

        var customerService = CustomerService;
        var homeService = HomeService;
        var partsService = PartsService;

        // should move this to  factory and inject it. running out of time to do things the best way.
        $scope.repairTypeArray = ['Starting and Charging','Engine Diagnostics','Engine Electrical','Engine Mechanical', 'Steering and Suspension','Heating and Cooling', 'Brakes', 'Maintenance'];

        $scope.test = customerService.test;
        $scope.title = "This is the Home Controller";
        //$scope.count = 0;
        $scope.repairs = [];
        $scope.part = {};
        $scope.parts = [];

    $scope.getRepairs = function(){
        homeService.getRepairs();
        $scope.repairs =  homeService.repairs;
        //$scope.count = $scope.repairs.length;
    };

    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.getParts = function(repairId){
        console.log(repairId);


    };

    $scope.getParts = function(repairId){
        partsService.getParts(repairId);
        $scope.parts = partsService.parts;
    };

//Edit
        $scope.edit = function(ev, repair) {
            console.log('hit edit');
            console.log(repair);
            $scope.repair = repair;
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
                    templateUrl:'/assets/views/templates/editRepair.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true,
                    //fullscreen: useFullScreen,
                    scope: $scope,
                    preserveScope: true
                })
                .then(function(answer) {
                   $scope.getRepairs();
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };

        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(response, repair) {
            $mdDialog.hide(response);
            homeService.updateRepair(repair);
            homeService.updateCustomer(repair);
        };



    /// stuff for testing md tables
    /// currently not in use.
    $scope.selected = [];

    $scope.query = {
        order: 'id',
        limit: 10,
        page: 1
    };


    $scope.getRepairs();

}]);

// plan to include a sort feature on my table, some code for reversing the angular filter.
//$scope.reverse = false;
//$scope.sort = function(){
//    if( $scope.reverse === true){
//        $scope.reverse = false;
//    }  else{
//        $scope.reverse = true;
//    }
//    console.log('reversed??',$scope.reverse);
//};