/**
 * Created by JFCS on 4/6/16.
 */
console.log('grunt is watching');
myApp.factory('CustomerService',['$http',function($http){
    test = 'injection is real';

    return {
        test:test
    };

}]);