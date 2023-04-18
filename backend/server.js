const express = require('express')
const app = express()
const cors = require ('cors');
const port = 4064;
app.use(cors());
 app.use(express.json())
const studentlist = require('./models/UserScheema')

// mongodb connection //
const mongoose=require("mongoose")
const mongodbURl="mongodb://0.0.0.0:27017/studentproject";
mongoose.connect(mongodbURl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
   console.log("connection successful")
})
.catch(()=>[
    console.log("no connection")
])



const data ={
    title: "welcome to react full stack project",
    meta: {
         descripction:"Some description",
    },
     pageHeading: "Welcome to React Fullstack",

 };

//  console.log(data)

const studentRouter = require("./routes/students");
app.get('/', (req , res)=>{
      res.json(data);   
})
  


app.use("/student", studentRouter);

app.listen(port,()=>{
    console.log(`server this started at http://localhost:${port}`)
})