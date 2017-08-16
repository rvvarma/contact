
var request = require('request');
var express = require('express');
var constants=require('../../constants/constants').con();
var log=require ('../../logs/log').logs();
var router = express.Router();

// get list of companies


router.get('/Companyfiles', function(req, res) {

    var options = { headers: {
        'Authorization': constants.auth,
        'x-myobapi-version':constants.myobv
    },
        url: "http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
log.info({respose:body},response.statusCode);

          //  console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);
        } else {
          //  console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);
log.error({respose:body},response.statusCode);
        }
    });
})
//all contacts in a perticular company
router.get('/contacts/:cid', function(req, res) {
    var cid = req.params.cid;
    var options = { headers: {
      'Authorization': constants.auth,
      'x-myobapi-version':constants.myobv


    },
        url: "http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Contact/Customer/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {

          //  console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);
            log.info({respose:body},response.statusCode);
            log.info({respose:body},response.statusCode);


        } else {
            //console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);
          log.error({respose:body},response.statusCode);

        }
    });
})
// to get perticular contact details
router.get('/contacts/:cid/:id', function(req, res) {
    var id = req.params.id;
    var cid = req.params.cid;
    console.log("Request param id: "+id);
    var options = { headers: {
      'Authorization': constants.auth,
      'x-myobapi-version':constants.myobv
    },
        url: "http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Customer/"+id+"/?format=json"
    }
    request.get(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
            //console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);
              log.info({respose:body},response.statusCode);


        } else {
          //  console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);
              log.error({respose:body},response.statusCode);

        }
    });
})

router.post('/contacts/new/:cid', function(req, res) {
    var cid = req.params.cid;
    var requestBody = JSON.stringify(req.body);
    console.log("Request body: "+requestBody);
    var options = { headers: {
      'Authorization': constants.auth,
      'x-myobapi-version':constants.myobv
    },
        url: "http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Contact/Customer/?format=json",
        body: requestBody
    }
    request.post(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 201) {
            //console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);
              log.info({respose:body},response.statusCode);


        } else {
          //  console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);
              log.error({respose:body},response.statusCode);

        }
    });
})
router.put('/contacts/:cid/:id', function(req, res) {
      var id = req.params.id;
     var cid = req.params.cid;
    var requestBody = JSON.stringify(req.body);
    //console.log("Request body: "+requestBody);
    var options = { headers: {
      'Authorization': constants.auth,
      'x-myobapi-version':constants.myobv
    },
        url: "http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Customer/"+id+"/?format=json",
        body: requestBody
    }
    request.post(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
          //  console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);
              log.info({respose:body},response.statusCode);


        } else {
          //  console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);
              log.error({respose:body},response.statusCode);

        }
    });
})
router.delete('/contacts/:cid/:id', function(req, res) {
    var id = req.params.id;
    var cid = req.params.cid;
    console.log("Request param id: "+id);
    var options = { headers: {
      'Authorization': constants.auth,
      'x-myobapi-version':constants.myobv
    },
        url: "http://"+constants.myob_ip+":"+constants.myob_port+"/AccountRight/"+cid+"/Customer/"+id+"/?format=json"
    }
    request.delete(options, function(error, response, body) {
        res.set('Content-Type', 'Application/json');
        if (!error && response.statusCode == 200) {
          //  console.log("success response from Myob: "+body);
            res.status(response.statusCode).send(body);
              log.info({respose:body},response.statusCode);


        } else {
          //  console.log("failure response from Myob: "+body);
            res.status(response.statusCode).send(body);
              log.error({respose:body},response.statusCode);

        }
    });
})



//app.listen(3000)
module.exports=router;
