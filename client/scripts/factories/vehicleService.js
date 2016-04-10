/**
 * Created by JFCS on 4/10/16.
 */
myApp.factory('VehicleService',['$http',function($http){
// bring in the edmunds api to populate vehicle lists
    var date = new Date();
    date = date.getFullYear();
    currentYear = date;
    var counter = 27;
    var years = [];
    var Makes = {};

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

    return {
        years:years,
        setYears:setYearList,
        getMakes:getMakesList,
        makes:Makes
    };

}]);