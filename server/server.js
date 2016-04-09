/**
 * Created by JFCS on 4/6/16.
 */
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var db = require('./modules/createdb');
var passport = require('./strategy/user_sql.js');
var port = process.env.PORT || 3000;

var index = require('./routes/index');
var user = require('./routes/user');
var register = require('./routes/register');
var customers = require('./routes/customers');
var vehicles = require('./routes/vehicles');

app.use(express.static('server/public'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Passport Session Configuration //
app.use(session({
    secret: 'secret',
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: {maxage: 60000, secure: false}
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

app.use('/vehicles', vehicles);
app.use('/customers', customers);
app.use('/register', register);
app.use('/user', user);
app.use('/',index);

var server = app.listen(port,function(){
   var port = server.address().port;
    console.log('now open on port',port);
});