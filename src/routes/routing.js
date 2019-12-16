const express = require('express') ;
const router = express.Router();
const GraphorService = require('../service/graphor.js') ;
const fs = require('fs') ;



router.get( "/getjson" , (req, res , next ) => {
  var data = [{"food":"Hotdogs","quantity":24},{"food":"Tacos","quantity":15},{"food":"Pizza","quantity":3},{"food":"Burger","quantity":2},{"food":"Omelets","quantity":30},{"food":"Falafel","quantity":21},{"food":"Soylent","quantity":13}]
  res.json({ "message" : data }) ;
} )

router.post( "/postjson" , ( req, res, next ) => {
  const ob = req.body.jsonOb ; 
  console.log("json object=",ob);  
  GraphorService.insertEntry( ob ).then( result => {
    res.json( { "message" : result } );
  }).catch(err=>next(err));
} )

router.get( "/" , ( req , res , next ) => {
  res.json( { "message" : "service route running fine!" } ) ;
} )

module.exports = router ;