/**
 * Created by JFCS on 4/10/16.
 */
var express = require('express');
var needle = require('needle');
var dotenv = require('dotenv').config();
var apiKey = process.env.publicKey;
var apiPrivateKey = process.env.privateKey;
var router = express.Router();

router.get('/:year',function(req,res){
    console.log('req.params in edmunds getcall', req.params);
    var year = req.params.year;
    var results = {};
    var url = 'https://api.edmunds.com/api/vehicle/v2/makes?';
    needle.request('get',url,{
      state:'used',
      year:year,
      view:'basic',
      fmt:'json',
      api_key:apiKey
    },function(error,response) {
        results = response.body;
        console.log(results);
        res.send(results);

    });


});

module.exports = router;