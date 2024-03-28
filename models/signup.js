const mongoose=require("mongoose");


 const signupSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    age:{
      type:String,
     required:true
    },
    gender:{
       type:String,
       required:true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

  module.exports=mongoose.model('User',signupSchema);