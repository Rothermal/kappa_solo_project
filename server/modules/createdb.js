/**
 * Created by JFCS on 4/6/16.
 */
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/my_side_jobs_db';

if(connectionString = process.env.DATABASE_URL) {
    pg.defaults.ssl = true;
}
 //work in progress
//pg.connect(connectionString, function(err, client, done){
//    if (err){
//        console.log("Error connecting to DB!", err);
//    } else {
//        var query = client.query('CREATE TABLE IF NOT EXISTS tbl_patroni (' +
//            'patronus_id SERIAL PRIMARY KEY,' +
//            'patronus_name varchar(20) NOT NULL );');
//
//        query.on('end', function(){
//            console.log("Successfully checked tbl_patroni");
//            //done();
//        });
//
//        query.on('error', function(){
//            console.log("Error creating new tbl_patroni");
//            done();
//        });
//        //Check Second table
//        query = client.query('CREATE TABLE IF NOT EXISTS tbl_people (' +
//            'person_id SERIAL PRIMARY KEY,' +
//            'first_name varchar(20) NOT NULL,' +
//            'last_name varchar(20) NOT NULL,' +
//            ' patronus_id integer REFERENCES tbl_patroni(patronus_id));');
//        query.on('end', function(){
//            console.log("Successfully checked tbl_people Table");
//            done();
//        });
//
//        query.on('error', function(){
//            console.log("Error creating new tbl_people");
//            done();
//        });
//    }
//});