const express = require('express');
const CombinedBook=require('../../Model/Combined/combinedbook');
const router =  express.Router();
const axios=require('axios');
const User = require('../../Model/USER_PROFILE/userProfile');
const IndCollection =require('../../Model/Collection/collection');
const AllCollection =require( '../../Model/UserCollection/userCollection');

router.post('/owner/:userId',async(req,res)=>{
    const {userId}=req.params;

    const {bookReview,bookAuthor,bookTitle}=req.body;

    const newIndCollection=new IndCollection({
        bookAuthor,bookTitle,bookReview
    });
   
    const userProfile=await User.findById(userId);
    
    newIndCollection.owner=userProfile;
    await newIndCollection.save();

    userProfile.ownerCollection.push(newIndCollection);
    await userProfile.save().then((num)=>{
        res.status(200).json(num)
    });
    
})


router.get('/owner/:userId',async(req,res)=>{
    const {userId}=req.params;
    const userProfile=await User.findById(userId).populate('ownerCollection');
    res.status(200).send(userProfile.ownerCollection);
  
})

router.delete('/owner/update/:collectionId',async(req,res)=>{
    const {collectionId}=req.params;
    const deletedCollection= await IndCollection.findByIdAndDelete(collectionId);
    res.status(200).send(deletedCollection);
})


//@update colletion 
router.patch('/owner/update/:collectionId',async(req,res)=>{
    const {collectionId}=req.params;
    const updatedCollection= await IndCollection.findByIdAndUpdate(collectionId,req.body,{new:true,runValidators:true});
    res.status(200).send(updatedCollection);
})

//@update profile 

router.patch('/owner/updateuser/:userId',async(req,res)=>{
    const {userId}=req.params;
    const updatedUserProfile =await User.findByIdAndUpdate(userId,req.body,{new:true,runValidators:true})
    res.status(200).send(updatedUserProfile);
})

router.get('/showCollection',async(req,res)=>{
    const allCollection=await AllCollection.find();
    
    res.status(200).send(allCollection);
})

router.get('/bookcollectionlist',async(req,res)=>{
    const bookcollectionlist=await CombinedBook.find();
  
    res.status(200).send(bookcollectionlist);
})


//@getindividualbookdetails

module.exports=router;
