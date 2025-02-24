const express = require('express');
const router = express.Router();
const User = require('../Model/userSchema');
const bcrypt = require('bcrypt');
const {generateToken} = require('../Utils/Jwt');


router.post('/',async(req,res)=>{
    const {email,password} = req.body;
     try{
         const user = await User.findOne({email});
          if(!user){
             return res.status(401).json({message : "User does not exist"});
          }
          const isMatch = await bcrypt.compare(password, user.password);
          if(!isMatch){
            return res.status(401).json({message : "Incorrect username or password"});
          }
           
          const token = generateToken(user);
           return res.status(200).json({
            message:"Login Successful",
            user,
            token
           })
     } 
      catch(err){
         console.log(err);
         res.status(500).json({error : err.message});
      }
})

module.exports = router;

