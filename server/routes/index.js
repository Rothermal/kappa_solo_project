/**
 * Created by JFCS on 4/6/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');








router.get('/',function (request,response){
    var joinedpath = path.join(__dirname, '../public/assets/views/index.html');
    console.log(joinedpath);
    response.sendFile(joinedpath);
});

router.get('/*', function(request, response){
    response.redirect('/');
});


module.exports = router;