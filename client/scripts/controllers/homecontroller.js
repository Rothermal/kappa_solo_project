/**
 * Created by JFCS on 4/6/16.
 */

myApp.controller('HomeController',['$scope','$http','CustomerService','HomeService','$mdDialog','$mdMedia',
    function($scope,$http,CustomerService,HomeService,$mdDialog,$mdMedia){

    var customerService = CustomerService;
    var homeService = HomeService;
    $scope.test = customerService.test;
    $scope.title = "This is the Home Controller";
    $scope.count = 0;
    $scope.repairs = [];
    $scope.repair = {};

    $scope.getRepairs = function(){
        homeService.getRepairs();
        $scope.repairs =  homeService.repairs;
        $scope.count = $scope.repairs.length;
    };

    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


    //$scope.showPrompt = function(ev,repair) {
    //    console.log(repair);
    //    // Appending dialog to document.body to cover sidenav in docs app
    //    var confirm = $mdDialog.prompt()
    //        .title('Edit this Repair')
    //        .textContent('all adjustments are final ')
    //        .placeholder(repair.type)
    //        .ariaLabel('Dog name')
    //        .targetEvent(ev)
    //        .ok('Save Changes')
    //        .cancel('Cancel Edit');
    //    $mdDialog.show(confirm).then(function(result) {
    //        $scope.status = ' Repair was Saved  ' + result + '.';
    //    }, function() {
    //        $scope.status = ' No Changes Made';
    //    });
    //};


    //$scope.reverse = false;
    //$scope.sort = function(){
    //    if( $scope.reverse === true){
    //        $scope.reverse = false;
    //    }  else{
    //        $scope.reverse = true;
    //    }
    //    console.log('reversed??',$scope.reverse);
    //};

//Edit
        $scope.edit = function(ev, repair) {
            $scope.repair = repair;
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'assets/views/templates/editRepair.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose:true,
                    fullscreen: useFullScreen,
                    scope: $scope,
                    preserveScope: true
                })
                .then(function(answer) {
                    $scope.status = $scope.getRepairs();
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
            $scope.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
        };
        function DialogController($scope, $mdDialog) {
            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(response, repair) {
                $mdDialog.hide(response);
                //HomeService.editRepair(repair);
            };
        }

    /// stuff for testing md tables
    $scope.selected = [];

    $scope.query = {
        order: 'id',
        limit: 10,
        page: 1
    };
    //
    //function success(desserts) {
    //    $scope.desserts = desserts;
    //}

    //$scope.getDesserts = function () {
    //    $scope.promise = $scope.repairs.get($scope.query,  $scope.getRepairs).$promise;
    //};



    $scope.getRepairs();

}]);