/**
 * Created by JFCS on 4/6/16.
 */
var express = require('express');
var passport = require('passport');
var router = express.Router();
var path = require('path');


router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        console.log(user);
        if (err) {
            return next(err);
        }
        if (user === false) {
            res.status(401).send(false);
        } else {
            res.status(200).send(user);
        }
    })(req, res, next);
});

//router.post('/', passport.authenticate('local', {
//        successRedirect: '/index',
//        failureRedirect: '/'
//    })
//);

router.get('/index',function(request,response){
    var joinedpath = path.join(__dirname, '../public/assets/views/index.html');
    console.log(joinedpath);
    response.sendFile(joinedpath);
});


router.get('/',function (request,response){
    var joinedpath = path.join(__dirname, '../public/assets/views/routes/login.html');
    console.log(joinedpath);
    response.sendFile(joinedpath);
});

router.get('/*', function(request, response){
    response.redirect('/');
});


module.exports = router;