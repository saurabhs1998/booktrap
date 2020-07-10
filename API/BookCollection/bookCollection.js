const express = require('express');
const router =  express.Router();
const mongoose=require('mongoose');

const axios=require('axios');
const BookCollection=require('../../Model/BookCollection/bookCollection');
const CombinedBook=require('../../Model/Combined/combinedbook');


// router.post('/bookcollection',async(req,res)=>{

  
    
    
//     axios.get("https://api.nytimes.com/svc/books/v3/lists/current/Family?api-key=tSeNjo35fgt58QGVy0ywqC3HGqhPSWhV")
//     .then((response)=>{
//         if(response)
//         {
//             const length=(response.data.results.books.length);
//             const bookdata=response.data.results.books;
//             for(let i=0;i<length;i++)
//             {
//                 const newBookCollection=new BookCollection({
//                     rate:bookdata[i].rate,
//                     title:bookdata[i].title,
//                     author:bookdata[i].author,
//                     book_image:bookdata[i].book_image,
//                     description:bookdata[i].description,
//                     tags:["Family"]
//                 });
//                 newBookCollection.save(); 
//             }
//             res.status(200).send("successful");
//         }
//     }).catch((e)=>console.log(e))
   
  

// });


router.get('/api/:bookId',async(req,res)=>{
    const {bookId}=req.params;
    CombinedBook.findById(bookId).then((result)=>
    res.status(200).send(result)).catch((e)=>console.log(e))
    })



    router.get('/api/external/book',async(req,res)=>{
        const response= await axios.get("https://api.nytimes.com/svc/books/v3/lists/Current/Trade Fiction Paperback.json?api-key=tSeNjo35fgt58QGVy0ywqC3HGqhPSWhV");
        const result1=response.data.results.books;
        
        for(const element of result1)
        {
            const {rank,rank_last_week,primary_isbn10,title,author,amazon_product_url,description,book_image}=element;
           
            const response=await  axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${element.primary_isbn10}&fields=kind,items(id,volumeInfo(description,categories,publishedDate,pageCount,averageRating,previewLink),accessInfo)`);
            
            const items=response.data.items;
               
       
        }
         res.status(200).send({
             "done":"all workd"
         })
         })
 
 

 module.exports=router;