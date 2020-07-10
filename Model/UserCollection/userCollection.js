const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const UserCollectionSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    }
  

})
const UserCollection=mongoose.model('collection',UserCollectionSchema);

module.exports=UserCollection;