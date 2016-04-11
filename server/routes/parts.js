/**
 * Created by JFCS on 4/11/16.
 */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var connection = require('../modules/connection.js');
var connectionString = connection;



router.post('/',function(request,response){
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













module.exports = router;