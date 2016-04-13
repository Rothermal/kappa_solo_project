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

router.put('/',function(request,response){

    var updateCustomer = {};
    updateCustomer.first_name = request.body.first_name;
    updateCustomer.last_name = request.body.last_name;
    updateCustomer.email = request.body.email;
    updateCustomer.phone = request.body.phone_number;
    updateCustomer.id = request.body.id;
    console.log('customer in put', updateCustomer);

    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("UPDATE customers SET first_name = $1, last_name =  $2, phone_number = $3, email = $4 FROM repairs WHERE repairs.id = $5 and repairs.customer_id = customers.id RETURNING customers.id;",[updateCustomer.first_name, updateCustomer.last_name,updateCustomer.phone ,updateCustomer.email, updateCustomer.id]);
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