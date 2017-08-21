

//var app=require("./config/config.js").dep();
//var port=require("./config/config.js").port1();
var request = require('request');
var express = require('express');
var router = express.Router();
var log=require ('../../logs/employeelog').logs();
var constants=require('../../constants/constants').con();
// get list of companies


router.get('/Companyfiles', function(req, res) {
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url: "http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
log.info({respose:body},response.statusCode);
          ///  console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);
        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
//all contacts in a perticular company
router.get('/contacts/:cid', function(req, res) {
    var cid = req.params.cid;
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'


    },
        url: "http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Contact/Employee/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);

        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
// to get perticular contact details
router.get('/contacts/:cid/:id', function(req, res) {
    var id = req.params.id;
    var cid = req.params.cid;
    console.log("Request param id: "+id);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url: "http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Employee/"+id+"/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})

router.post('/contacts/new/:cid', function(req, res) {
    var cid = req.params.cid;
    var requestBody = JSON.stringify(req.body);
    console.log("Request body: "+requestBody);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url:"http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Contact/Employee/?format=json",
        body: requestBody
    }
    request.post(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 201) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
router.put('/contacts/:cid/:id', function(req, res) {
      var id = req.params.id;
     var cid = req.params.cid;
    var requestBody = JSON.stringify(req.body);
    console.log("Request body: "+requestBody);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url:"http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Employee/"+id+"/?format=json",
        body: requestBody
    }
    request.post(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})
router.delete('/contacts/:cid/:id', function(req, res) {
    var id = req.params.id;
    var cid = req.params.cid;
    console.log("Request param id: "+id);
    var options = { headers: {
        'Authorization': 'Basic QWRtaW5pc3RyYXRvcjo=',
        'x-myobapi-version':'v2'
    },
        url:"http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Employee/"+id+"/?format=json"
    }
    request.delete(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
            console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);


        } else {
            console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);

        }
    });
})



//app.listen(3000)
module.exports=router;
