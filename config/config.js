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
//app.use(haltOnTimedout);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/customer',customer);
app.use('/employe',employe);
app.use('/supplier',supplier);

//handling 404 error

app.use(function(req, res, next){
var err = new Error ('Not Found');
err.status = 404;
//next(err);
res.status(404);
res.send({"status":"not found"});
});
//handling timeout error
function haltOnTimedout(req, res, next){
  res.status(503);
res.send({"status":"Server timeout"});
}

app.use(function(err, req, res, next) {

    var responseData;

    if (err.name === 'JsonSchemaValidation') {
        // Log the error however you please
        console.log(err.message);
        // logs "express-jsonschema: Invalid data found"

        // Set a bad request http response status or whatever you want
        res.status(400);

        // Format the response body however you want
        responseData = {
           statusText: 'Bad Request',
           jsonSchemaValidation: true,
           validations: err.validations  // All of your validation information
        };

        // Take into account the content type if your app serves various content types
        if (req.xhr || req.get('Content-Type') === 'application/json') {
            res.json(responseData);
        } else {
            // If this is an html request then you should probably have
            // some type of Bad Request html template to respond with
            res.render('badrequestTemplate', responseData);
        }
    } else {
        // pass error to next error middleware handler
        next(err);
    }
});
process.on('uncaughtException', function (err) {
    console.log(err);
}); 
module.exports=app
