/**
 * Created by JFCS on 4/9/16.
 */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var connection = require('../modules/connection.js');
var connectionString = connection;

router.get('/',function(request,response){

    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("SELECT * FROM customers");
        }
        query.on('row',function(row){
            console.log(row);
            results.push(row);
        });
        query.on('end',function(){
            done();
            response.send(results);
        });
        query.on('error',function(error){
            console.log('Error returning query', error);
            done();
            response.status(500).send(error);
        });
    });

});

router.post('/',function(request,response){

   var newCustomer = {};
    newCustomer.first_name = request.body.first_name;
    newCustomer.last_name = request.body.last_name;
    newCustomer.email = request.body.email;
    newCustomer.phone = request.body.phone;
    console.log(newCustomer);

    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("INSERT INTO customers(first_name, last_name, phone_number, email) VALUES($1,$2,$3,$4) RETURNING id;",[newCustomer.first_name, newCustomer.last_name,newCustomer.phone ,newCustomer.email]);
        }

        query.on('row',function(row){
            console.log(row);
            results.push(row);
        });
        query.on('end',function(){
            done();
            response.send(results);
        });
        query.on('error',function(error){
            console.log('Error returning query', error);
            done();
            response.status(500).send(error);
        });
    });

});




module.exports = router;