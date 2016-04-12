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
            var query = client.query("SELECT repairs.id, type, description, fee, date_of_repair, first_name, phone_number, email, year, make, model, engine, transmission, vin  from repairs INNER JOIN customers ON customers.id = repairs.customer_id INNER JOIN vehicles ON vehicles.id = repairs.vehicle_id;");
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
    console.log('request in vehicles',request.body);
    var repair = {};
    repair.customer_id = request.body.customer_id;
    repair.vehicle_id = request.body.vehicle_id;
    repair.type = request.body.type;
    repair.description = request.body.description;
    repair.date_of_repair= request.body.date;
    repair.fee = request.body.fee;
    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("INSERT INTO repairs(type, description, fee, vehicle_id, date_of_repair, customer_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING id;",[repair.type,repair.description,repair.fee, repair.vehicle_id,repair.date_of_repair,repair.customer_id]);

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