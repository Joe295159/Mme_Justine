var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var URL = 'mongodb://localhost:27017/blog';



/* GET */
/*ALL POSTS*/

router.get('/', function(req, res, next) {

  var startFrom = req.query.first;
  
  MongoClient.connect(URL, function(err, db) {
  	if (err) return
  
  	var collection = db.collection('blog');

    collection.ensureIndex([['_id', -1]]);

    if (startFrom === '0') {


      collection.find().sort({_id: -1}).limit(10).toArray(function(err, docs) {
      res.json({"badge": docs});

      db.close();

    });

    }
    else{
      
      collection.find({ _id: {$gt: startFrom}}).sort({_id: -1}).limit(10).toArray(function(err, docs) {
      res.json({"badge": docs});

      db.close();
    });
    }
    

  })

});

/*ALL FILES*/

router.get('/file', function(req, res, next) {
  var startFrom = req.query.first;

  MongoClient.connect(URL, function(err, db) {
    
    if (err) return
  
    var collection = db.collection('blog');

    collection.ensureIndex([['_id', -1]]);

    if (startFrom === '0') {

      collection.find({type:"file"}).sort({_id: -1}).limit(10).toArray(function(err, docs) {
      res.json({"badge": docs});

      db.close();

    });

    }
    else{
      
      collection.find({type:"file"}, { _id: {$gt: startFrom}}).sort({_id: -1}).limit(10).toArray(function(err, docs) {
      res.json({"badge": docs});

      db.close();
    });
    }
    
    

  })

});

/*ALL LINKS*/

router.get('/link', function(req, res, next) {
  var startFrom = req.query.first;

  MongoClient.connect(URL, function(err, db) {
   if (err) return
  
    var collection = db.collection('blog');

    collection.ensureIndex([['_id', -1]]);

    if (startFrom === '0') {


      collection.find({type:"link"}).sort({_id: -1}).limit(10).toArray(function(err, docs) {
      res.json({"badge": docs});

      db.close();

    });

    }
    else{
      
      collection.find({type:"link"}, { _id: {$gt: startFrom}}).sort({_id: -1}).limit(10).toArray(function(err, docs) {
      res.json({"badge": docs});

      db.close();
    });
    }

  })

});

/* POST */

/*NEW POST*/
router.post('/', function(req, res) {
  
  MongoClient.connect(URL, function(err, db) {

  	if (err){ 
  		res.status(500).send('Database error');
  		return
  	}
  
  		var collection = db.collection('blog');


  	collection.save(req.body, function(err, saved) {
 	 if( err || !saved ){ 

 	 	res.status(500).send('Database error');
 	}
  	else{
  	 res.end("Written to dba");
  	}
	});

  })
  

});

/*EDIT POST*/
router.post('/edit', function(req, res) {
  
  MongoClient.connect(URL, function(err, db) {

  	if (err){ 
  		res.status(500).send('Database error');
  		return
  	}
  
  		var collection = db.collection('blog');

  		console.log({ id: req.body.id});


  	collection.update({ id: req.body.oTitle}, req.body.newValue[0], function(err, updated) {
 	 if( err || !updated ){ 
 	 	res.status(500).send('Database error');
 	}
  	else{
  	 res.end("Updated dba");
  	}
	});

  })
  

});

/*DELETE POST*/
router.post('/delete', function(req, res) {
  
  MongoClient.connect(URL, function(err, db) {

  	if (err){ 
  		res.status(500).send('Database error');
  		return
  	}
  
  		var collection = db.collection('blog');


  	collection.remove({ id: req.body.oTitle}, function(err, removed) {
 	 if( err || !removed ){ 

 	 	res.status(500).send('Database error');
 	}
  	else{
  	 res.end("Deleted from dba");
  	}
	});

  })
  

});

module.exports = router;
