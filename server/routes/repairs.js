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
            var query = client.query("SELECT repairs.id, type, description, fee, date_of_repair, first_name, last_name, phone_number, email, year, make, model, engine, transmission, vin, mileage  from repairs INNER JOIN customers ON customers.id = repairs.customer_id INNER JOIN vehicles ON vehicles.id = repairs.vehicle_id;");
        }
        query.on('row',function(row){
            //console.log(row);
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
    //console.log('request in vehicles',request.body);
    var repair = {};
    repair.customer_id = request.body.customer_id;
    repair.vehicle_id = request.body.vehicle_id;
    repair.type = request.body.type;
    repair.description = request.body.description;
    repair.date_of_repair= request.body.date;
    repair.fee = request.body.fee;
    repair.mileage = request.body.mileage;
    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("INSERT INTO repairs(type, description, fee, vehicle_id, date_of_repair, customer_id, mileage) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING id;",[repair.type,repair.description,repair.fee, repair.vehicle_id,repair.date_of_repair,repair.customer_id,repair.mileage]);

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
    //console.log(request.body);
    var updateRepair = {};
    updateRepair.id = request.body.id;
    updateRepair.fee = request.body.fee;
    updateRepair.description = request.body.description;
    updateRepair.date_of_repair = request.body.date_of_repair;
    updateRepair.type = request.body.type;
    updateRepair.mileage = request.body.mileage;

    //console.log('repair update',updateRepair);

    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("UPDATE repairs SET type = $5, description = $1 , fee = $2 ,  date_of_repair = $3 , mileage = $6 WHERE id = $4 ;",[ updateRepair.description, updateRepair.fee, updateRepair.date_of_repair, updateRepair.id, updateRepair.type, updateRepair.mileage]);
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

router.delete('/:id',function(request,response){

    console.log('repair id in delete repair',request.params.id);
    var repair_id = request.params.id;
    //response.send(repair_id);


    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("DELETE FROM repairs WHERE id = $1;",[repair_id]);
        }
        query.on('row',function(row){
            //console.log(row);
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