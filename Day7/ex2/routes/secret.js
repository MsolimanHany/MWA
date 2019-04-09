var express = require('express');

var router = express.Router();
//built in middleware
const mongoClient = require ('mongodb').MongoClient;
const client = new mongoClient('mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01')
const simpleEncryptor = require('simple-encryptor');

/* GET users listing. */
router.get('/', function(req, res, next) {

    client.connect(function(){


    client.db("homework01").collection('data').findOne({ }, {projection: {key:true,message:true, _id: false }}
        , function(err, document) {
            console.log(document);
            const encryptor = simpleEncryptor(document.key);
            const result = encryptor.decrypt(document.message);
            res.send(result);



    })

    });
       
        
});




module.exports = router;
