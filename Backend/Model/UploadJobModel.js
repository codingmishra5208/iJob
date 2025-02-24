const mongoose = require('mongoose');

const UploadJobSchema = mongoose.Schema({
    jobtitle:{
        type:String,
        required:true
    },
    company:{
         type:String,
         required:true
    },
    experience:{
         type:String,
         required:true
    },
     location:{
         type:String,
         required:true
     },
     jobtype:{
        type:String,
        required:true
     },
     salary:{
        type:String,
        required:true
     },
      skill:{
        type:String,
        required:true
      },
},
  {
    timestamps:true,
  })

  const UploadJob = mongoose.model('upladjob',UploadJobSchema);

  module.exports = UploadJob;
  
