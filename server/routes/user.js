var express = require('express');
var router = express.Router();
var passport = require('passport');

// Handles Ajax request for user information if user is authenticated
//router.get('/', function(req, res) {
//    // check if logged in
//    if(req.isAuthenticated()) {
//        // send back user object from database
//        res.send(req.user);
//    } else {
//        // failure best handled on the server. do redirect here.
//        res.send(false);
//    }
//});

router.get("/", function(req,res,next){
    res.json(req.isAuthenticated());
});

router.get("/name", function(req,res,next){
    console.log("Hi class! ", req.isAuthenticated());
    var resUser = {
        username: req.user.username
        //firstname: req.user.firstname,
        //lastname: req.user.lastname,
        //datecreated: req.user.lastlogin
    };
    res.json(resUser);
});



module.exports = router;