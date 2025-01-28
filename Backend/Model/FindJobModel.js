const mongoose = require('mongoose');

const findJobSchema = new mongoose.Schema({
     jobname:{
         type:String,
         required:true
     },
     jobdesc:{
        type:String,
        required:true
     },
      img:{
        type:String,
        required:true
      },
      jobtitle:{
        type:String,
        required:true
      },
      salary:{
        type:String,
        required:true
      },
      jobdate:{
        type:Date,
        required:true,
      },
      joblocation:{
        type:String,
        required:true
      },
      application:{
        type:Number,
         required:true
      },

},{
    timestamps:true,
});

const FindJob = mongoose.model("FindJob",findJobSchema);

module.exports = FindJob;
