/**
 * Created by JFCS on 4/6/16.
 */
var express = require('express');
var router = express.Router();
var path = require('path');








router.get('/',function (request,response){
    var file = req.params[0] || "/views/index.html";
    response.sendFile(path.join(__dirname, '../public' + file ));
});

router.get('/*', function(request, response){
    response.redirect('/');
});


module.exports = router;