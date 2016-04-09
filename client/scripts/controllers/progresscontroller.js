/**
 * Created by JFCS on 4/9/16.
 */
myApp.controller('ProgressWheel', ['$interval',
    function($interval) {
        var self = this;
        self.activated = false;
        self.determinateValue = 30;
        // Iterate every 100ms, non-stop and increment
        // the Determinate loader.
        $interval(function() {
            self.determinateValue += 1;
            if (self.determinateValue > 100) {
                self.determinateValue = 30;
            }
        }, 100);
    }
]);