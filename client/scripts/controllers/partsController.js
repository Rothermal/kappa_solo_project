/**
 * Created by JFCS on 4/11/16.
 */
myApp.controller('PartsController',['$scope','CustomerService','PartsService','HomeService',
    function($scope,CustomerService,PartsService,HomeService) {
    var homeService = HomeService;
    var customerService = CustomerService;
    var partsService = PartsService;
    $scope.vendorArray = ['Napa','AutoZone','CarQuest',"O'Reilly's",'Advance','Factory','Dealership','Amazon','Ebay','Red Rooster'];
    //$scope.parts = [];
    $scope.part = {};
    $scope.repairs = [];

    $scope.getRepairs = function(){
        homeService.getRepairs();
        $scope.repairs =  homeService.repairs;
        //$scope.count = $scope.repairs.length;
    };


    $scope.addPart = function(part,repair) {
        console.log('clicked',part,repair);
        // todo need to figure out a better way to handle this.
        // this is a dirty fix for now. have ideas for better ways to track repairs and parts, ran out of time for implementation.
        part.repair_id = repair.charAt(0)+repair.charAt(1)+repair.charAt(2)+repair.charAt(3);
        partsService.postParts(part);
        $scope.part = {};
    };

    //$scope.postParts = function(){
    //    console.log($scope.parts);
    //    for(var i = 0 ;i< $scope.parts.length;i++){
    //        partsService.postParts($scope.parts[i]);
    //    }
    //};

    $scope.getRepairs();

}]);