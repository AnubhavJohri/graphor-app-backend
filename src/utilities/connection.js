const { Schema  } = require('mongoose');
const Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex' , true);


//THESE URLS ARE WHERE DATABASE IS STORED
//DONT TOUCH THE URLS
//------------------------------------------------------------------------------------------------------------------
//1.)COSMOS MONGODB URL
//OFFLINE ONLY
//FOR OFFLINE USE AND TESTING
const url = "mongodb://localhost:27017/GraphorDB";
//2.)mLab MONGODB URL
//ONLINE ONLY
//FOR DEPLOYEMENT AND CLOUD USE
const MONGOLAB_URI= "mongodb://heroku_nwdh7jqw:glskceqr238p19jkaqrs5n5niu@ds211268.mlab.com:11268/heroku_nwdh7jqw";
//------------------------------------------------------------------------------------------------------------------


//USER COLLECTION SCHEMA
const userSchema = Schema({
    jsonOb : { type : Object ,required:[true,"Object is required"] }
} , { collection : "User" , timestamp : true} );


//process.env.MONGOLAB_URI
//1.)GETS USER OBJECT FROM USER DATABASE
let collection = {};
collection.getUserCollection = () =>{
    return Mongoose.connect( MONGOLAB_URI , { useNewUrlParser: true })
    .then(database =>{
        return database.model('User' , userSchema )
    }).catch(() => {
        let e = new Error();
        e.message = "Could not connect to Database";
        e.status = 500;
        throw e;
    })
}




module.exports = collection;