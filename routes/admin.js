var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');


/* GET HANDLER*/
router.get('/', function(req, res, next) {
  res.sendFile('authenticate.html', { root: './'});
});


/* POST HANDLER */
router.post('/', function(req, res) {
  
  if(req.body.input == "Mybroisthebest"){
  	var on = {'admin' : "on"};
  	res.cookie('cookie' , 'cookie_on').send(on);
  }
  else{
  	var off = {'admin' : "off"};
  	res.send(off);
  }
  

});

module.exports = router;


