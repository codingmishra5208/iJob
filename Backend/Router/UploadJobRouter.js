const express = require('express');
const router = express.Router();
const UploadJob = require('../Model/UploadJobModel');

router.post('/', async(req,res)=>{
     const data  = req.body;
     try{
        const upload = new UploadJob(data);
       const savedjob = await upload.save();
       res.status(200).json(savedjob);

     }catch(error){
         console.log(error.message);
        res.status(400).json({error:err.message});
     }
})

module.exports = router;