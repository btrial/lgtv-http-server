var lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var wol = require('node-wol');
var CONFIG = require('../config')

var turnOn = function(res) {
  wol.wake(CONFIG.lgtvmac, function(error,response) {
    	if (!error) {
	  res.send('success: ' + JSON.stringify(response))
	  return
	} else {
	  res.send('failure: ' + JSON.stringify(response))
	}
  });

};

router.get('/', function (req, res) {
  turnOn(res)
});

module.exports = router;
