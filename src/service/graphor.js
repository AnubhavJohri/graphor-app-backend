const GraphorModel = require('../model/Graphor') ;
let GraphorService = {} ;


GraphorService.insertEntry = ( ob ) => {
    
    if( !ob ){
        let e = new Error();
        e.message = "Object can't be null , Please send an Object";
        e.status = 401 ;
        throw e ;
      }

    return GraphorModel.insertEntry( ob ).then( result => {
        if ( result )
        return result ;
        else{
            let e = new Error() ;
            e.message = "Something went wrong , object didn't add in the DB" ;
            e.status = 501 ;
            throw e ;
        }
    } )

}

module.exports = GraphorService ;