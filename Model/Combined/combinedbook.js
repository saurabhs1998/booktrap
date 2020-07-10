const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const combinedBookSchema=new Schema({
    bookName:{
        type:String,
        required:true
    },
    bookAuthor:{
        type:String,
        required:true,
    },
    bookDescShort:{
        type:String
    },
    bookDescLong:{
        type:String,
    },
    bookRank:Number,
    bookRankLast:Number,
    bookRating:Number,
    bookISBN:String,
    id:String,
    bookPublishedDate:String,
    bookPageCount:Number,
    bookPdfLink:Object,
    bookPurchaseLink:String,
    bookPreviewLink:String,
    bookCategory:String,
    isBookImage:Boolean,
    nytImage:String
})
const CombinedBook=mongoose.model('combinedBooks',combinedBookSchema);
module.exports=CombinedBook;