/**
 * Created by JFCS on 4/11/16.
 */
myApp.controller('PartsController',['$scope','CustomerService','PartsService',function($scope,CustomerService,PartsService) {
    var customerService = CustomerService;
    var partsService = PartsService;
    $scope.lastRepair_id = customerService.lastRepair;
    $scope.parts = [];
    $scope.part = {};

    $scope.addPart = function(part) {
       var holderObject = $scope.lastRepair_id;
        $scope.part.repair_id = holderObject.object.id;
        console.log('clicked');
        $scope.parts.push(part);
        $scope.part = {};
    };

    $scope.postParts = function(){
        console.log($scope.parts);
        for(var i = 0 ;i< $scope.parts.length;i++){
            partsService.postParts($scope.parts[i]);
        }
    };


}]);