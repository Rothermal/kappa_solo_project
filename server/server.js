/**
 * Created by JFCS on 4/6/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var db = require('./modules/createdb');
var port = process.env.PORT || 3000;
var index = require('./routes/index');

app.use(express.static('server/public'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));











app.use('/',index);

var server = app.listen(port,function(){
   var port = server.address().port;
    console.log('now open on port',port);
});