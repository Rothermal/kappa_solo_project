/**
 * Created by JFCS on 4/10/16.
 */
myApp.factory('VehicleService',['$http',function($http){
// bring in the edmunds api to populate vehicle lists
    var date = new Date();
    date = date.getFullYear();
    var currentYear = date;
    var counter = 27;
    var years = [];
    var Makes = {};
    var Engines = {};

    var setYearList = function() {
        while (counter > 0) {
            years.push(currentYear);
            currentYear--;
            counter--;
        }
    };

    var getMakesList = function(year){
        $http.get('/edmunds/'+ year).then(function(response){
            console.log('response in vehicles api get make call',response.data.makes);
            Makes.object = response.data.makes;
        });
    };

    var postVehicle = function(vehicle){
      console.log('vehicle in factory post call',vehicle);
        $http.post('/vehicles',vehicle).then(function(response){
            console.log(response);
        });
    };

    var updateVehicle = function(vehicle){
        console.log('vehicle in factory update call',vehicle);
        $http.put('/vehicles',vehicle).then(function(response){
            console.log(response);
        });
    };

    var getEngineList = function(vehicle){
      console.log(vehicle);
      var  year = vehicle.year;
      var  make = vehicle.make;
      var  model = vehicle.model;
        $http.get('/edmunds/engine/'+ year+'/'+ make+'/'+ model).then(function(response){
            console.log(response.data.styles);
            Engines.object = response.data.styles;
        });
    };

    return {
        years:years,
        setYears:setYearList,
        getMakes:getMakesList,
        makes:Makes,
        postVehicle:postVehicle,
        getEngines:getEngineList,
        engines:Engines,
        updateVehicle:updateVehicle
    };

}]);