var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var customer = require('../api/customer/customer');
var employe = require ('../api/employe/employe');
var supplier = require ('../api/supplier/supplier');
var app = express();
//var timeout = express.timeout // express v3 and below
var timeout = require('connect-timeout'); //express v4

app.use(timeout(12000));
app.use(haltOnTimedout);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use('/customer',customer);
app.use('/employe',employe);
app.use('/supplier',supplier);

//handling 404 error

app.use(function(req, res, next){
var err = new Error ('Not Found');
err.status = 404;
//next(err);
res.send({"status":"not found"});
});
//handling timeout error
function haltOnTimedout(req, res, next){
res.send({"status":"Server timeout"});
}

module.exports=app
