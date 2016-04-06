/**
 * Created by JFCS on 4/6/16.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;



var server = app.listen(port,function(){
   var port = server.address().port;
    console.log('now open on port',port);
});