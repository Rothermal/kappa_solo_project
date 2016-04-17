/**
 * Created by JFCS on 4/6/16.
 */
var pg = require('pg');
var connection = require('./connection.js');
var connectionString = connection;

pg.connect(connectionString, function(err, client, done){
    if (err){
        console.log("Error connecting to DB!", err);
    } else {

        var query = client.query('CREATE TABLE IF NOT EXISTS "public"."users" ("id" serial, "username" text,"password" text,"email" text,PRIMARY KEY ("id"),UNIQUE ("user_name"));');

        query.on('end', function(){
            console.log("Successfully checked user table");
            done();
        });

        query.on('error', function(){
            console.log("Error creating new user table");
            done();
        });
        //Check Second table
        query = client.query('CREATE TABLE IF NOT EXISTS "public"."customers" ("id" serial,"first_name" text,"last_name" text,"phone_number" text,"email" text,PRIMARY KEY ("id"));');
        query.on('end', function(){
            console.log("Successfully checked customers table");
            done();
        });

        query.on('error', function(){
            console.log("Error creating new customer table");
            done();
        });
        //Check Third table
        query = client.query('CREATE TABLE IF NOT EXISTS "public"."vehicles" ("id" serial,"year" integer,"make" text,"model" text,"engine" float,"transmission" text,"vin" text,"customer_id" integer,PRIMARY KEY ("id"),CONSTRAINT "customers.id" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id"));');

        query.on('end', function(){
            console.log("Successfully checked vehicles table");
            done();
        });

        query.on('error', function(){
            console.log("Error creating new vehicles table");
            done();
        });
        //Check Fourth table
        query = client.query('CREATE TABLE IF NOT EXISTS "public"."repairs" ("id" serial,"type" text,"description" text,"date" date,"fee" integer,"mileage" integer,"vehicle_id" integer,"customer_id" integer, PRIMARY KEY ("id"),CONSTRAINT "vehicles.id" FOREIGN KEY ("vehicle_id") REFERENCES "public"."vehicles"("id"), CONSTRAINT "customers.id" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id"));');

        // todo dont forget to update this create table for heroku.
        //ALTER TABLE "public"."repairs"
        //ADD COLUMN "customer_id" integer,
        //    ADD CONSTRAINT "customers.id" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id");
        //ALTER TABLE "public"."repairs" ADD COLUMN "mileage" integer;


        query.on('end', function(){
            console.log("Successfully checked repairs table");
            done();
        });

        query.on('error', function(){
            console.log("Error creating new repairs table");
            done();
        });
        //Check Fifth table
        query = client.query('CREATE TABLE IF NOT EXISTS "public"."parts" ("id" serial,"part_name" text,"description" text,"vendor" text,"cost" float,"repair_id" integer,PRIMARY KEY ("id"),CONSTRAINT "repairs.id" FOREIGN KEY ("repair_id") REFERENCES "public"."repairs"("id"));');

        query.on('end', function(){
            console.log("Successfully checked parts table");
            done();
        });

        query.on('error', function(){
            console.log("Error creating new parts table");
            done();
        });

    }
});