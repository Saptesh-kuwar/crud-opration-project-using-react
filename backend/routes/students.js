const express = require('express');
const studentlist = require('../models/UserScheema');
const studentRouter = express.Router();

studentRouter
.get('/',(req,res)=>{
    res.status(200).send("show all student data");
})

.get('/courses',(req ,res)=>{
    res.status(201).send("load course inforation of students");
   
})

// all student route //

.get("/showdata",async(req ,res)=>{
  try{
     const studentsData =await studentlist.find()
     res.send(studentsData)
  }
  catch(e){
        res.send(e)
  }
})

// induvisual user route //
.get("/:id", async(req, res) => {
  try{
   const {id}  = req.params
  //  console.log(id)
   // res.send(`load info about student ${id}`);
   const studentdata = await studentlist.findById(id)
  //  console.log(studentdata)
  
  res.status(200).json(studentdata)
  
   }catch(e){
     res.send(e)
     console.log(e)
   }})

   // update  user route //
   .patch("/updateuser/:id",async(req,res)=>{
    try{
       const {id} =req.params
      const updateuser =await studentlist.findByIdAndUpdate(id, req.body, 
        { new: true }
      )
     console.log(id)
     res.status(200).send("update data successfull")
     console.log(updateuser)

    }catch(e){
        res.send(e)
        console.log(e)
        res.stutas(404).send("enter full data")
       
    }
   })
   
   // delete user route //

   .delete("/deleteuser/:id", async(req,res)=>{
    try{
      const {id } = req.params
      const deleteuser = await studentlist.findByIdAndDelete(id)
      res.stutas(201).json(deleteuser)
      console.log(id)

    }catch(e){
           res.send(e) 
   
    }
        
     }

  )
     

   // create user route //
studentRouter
.post("/new", (req , res)=>{
 console.log(req.body)
 const user = new studentlist(req.body)
 user.save().then(()=>{
  res.status(201).send(user)
 }).catch((e)=>{
  res.status(404).send(e)
 })


//  res.status(201).send("create a new students here")

})

 



  
module.exports = studentRouter;