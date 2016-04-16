/**
 * Created by JFCS on 4/11/16.
 */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var connection = require('../modules/connection.js');
var connectionString = connection;



router.post('/',function(request,response){
    console.log('length of repair id string',request.body.repair_id.length);
    var name = request.body.name;
    var description = request.body.description;
    var vendor = request.body.vendor;
    var cost = request.body.cost;
    var repair_id = request.body.repair_id;


    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("INSERT INTO parts(part_name, description, vendor, cost, repair_id) VALUES($1,$2,$3,$4,$5) RETURNING id;",[name,description,vendor,cost,repair_id]);
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

router.get('/:id',function(request,response){

    var repair_id = request.params.id;


    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("SELECT * FROM parts WHERE repair_id = $1;",[repair_id]);
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
    //console.log('parts in put',request.body);


    var name = request.body.part_name;
    var description = request.body.description;
    var vendor = request.body.vendor;
    var cost = request.body.cost;
    var id = request.body.id;


    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("UPDATE  parts SET part_name = $1, description = $2, vendor = $3, cost = $4 WHERE id = $5;",[name,description,vendor,cost,id]);
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