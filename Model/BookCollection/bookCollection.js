const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookCollectionSchema=new Schema({
    rank:Number,
    title:String,
    author:String,
    description:String,
    book_image:String,
    tags:[]
})
const BookCollection=mongoose.model('bookcollection',bookCollectionSchema);

module.exports=BookCollection