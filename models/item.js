const mongoose = require('mongoose'); //brings in mongoose 
const schema= mongoose.Schema; // assings mongoose.schema(exists in mongoose for this reason)to variable schema 

//create schema 

const Itemschema= new schema ({    //new schema is part of mongoose 
    name: {                         // object called name with two fields 
        type : String,
        required: true,
    },
    date: {
        type: Date, 
        default: Date.now
    }
}); 

//gives excess to other files  , tells mogoose that Itemschema definied above is the called 'item' model 
module.exports= Item = mongoose.model('item', Itemschema ); 

