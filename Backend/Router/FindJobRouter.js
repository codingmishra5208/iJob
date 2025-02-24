const express = require('express');
const router = express.Router();
const findjob = require('../Model/FindJobModel');
const {jwtAuthMiddleware} = require('../Utils/Jwt');

 router.post("/",async(req,res)=>{
        const data = req.body;
        try{ 
            const job = new findjob(data);
            const savedjob = await job.save();
            res.status(200).json(savedjob);
        }
        catch(err){
            res.status(400).json({error:err.message});
        }

 }) 

 router.get('/', jwtAuthMiddleware , async(req,res)=>{
      try{
         const data = await findjob.find();
         res.status(200).json(data);
      }
      catch(err){
         res.status(500).json({error: err.message});
       }
 })

module.exports = router;
