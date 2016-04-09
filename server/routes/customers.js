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





module.exports = router;