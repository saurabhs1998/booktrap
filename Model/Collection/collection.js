const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const IndCollectionSchema=new Schema({
    bookTitle:{
        type:String,
        require:true
    },
    bookAuthor:{
        type:String,
        require:true
    },
    bookReview:{
        type:String,
        require:true
    },
   

})
const IndCollection=mongoose.model('indcollection',IndCollectionSchema);

module.exports=IndCollection