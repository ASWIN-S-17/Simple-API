const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//gets all post

router.get('/',async(req,res)=>{
    try {
        const posts = await Post.find();
        res.send(posts);
    } 
    catch (err) {
        res.json({message:err});
    }
   
});
//get by id
router.get('/:id',async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
    } 
    catch (err) {
        res.json({message:err});
    }
   
});
//delete by id

router.delete('/:id',async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);
        post.delete()
    } 
    catch (err) {
        res.json({message:err});
    }
   
});
//update
router.patch('/:id',async(req,res)=>{
    try{
       
        await Post.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Succesfully Updated"})


    }
    catch (err) {
        res.json({message:err});
    }
})

// post
router.post('/',async(req,res)=>{
        
        try {
            const savedPost = await Post.create(req.body);
            res.json(savedPost)
        } catch (err) {
            res.json({message:err})
            
        }
        
        
})


module.exports = router