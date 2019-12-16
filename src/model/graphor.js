const collection = require('../utilities/connection') ;
let GraphorModel = {} ;

GraphorModel.insertEntry = ( ob ) => {
    return collection.getUserCollection().then( db => {
        let newOb = {} ;
        newOb["jsonOb"]=ob ;
        return db.insertMany( newOb ).then( insertResult => {
            if ( insertResult.length > 0 )
            return ob
            else null ;
        } )
    } )
}

module.exports = GraphorModel ;