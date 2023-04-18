  
  // userScheema //
  
  const mongoose=require("mongoose")
const studentlistSchema= new mongoose.Schema({
     fullName:{
        type:String,
        require:true
    },
    userMail:{
        type:String,
        require:true
    },

    userPassword:{
        type:String,
        require:true
    },

    userContact:{
        type:Number,
        require:true
    },
    userWork:{
        type:String,
        require:true
    },
    userAddress:{
        type:String,
        require:true
    }
})


const studentlist =new mongoose.model("User",studentlistSchema)
module.exports=studentlist;