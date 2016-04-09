/**
 * Created by JFCS on 4/9/16.
 */
var express = require('express');
var router = express.Router();
var pg = require('pg');
var connection = require('../modules/connection.js');
var connectionString = connection;

router.get('/:id',function(request,response){
    console.log('request in vehicles',request.params.id);
    var id = {};
    id.number = request.params.id;
    pg.connect(connectionString,function(err,client,done){
        if(err){
            done();
            console.log("error connecting to database",err);
            response.status(500).send(err);
        } else{
            var results = [];
            var query = client.query("SELECT * FROM vehicles WHERE customer_id  = $1 ",[id.number]);
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