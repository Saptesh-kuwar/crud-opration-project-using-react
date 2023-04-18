import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Update() {
  const [msg , setmsg ]=useState()
  const [updatestudent, setupdateStudent] = useState({
    fullName: "",
    userMail: "",
    userPassword: "",
    userContact: "",
    userAddress: "",
  });
  
    const Setdata =(e)=>{
       const {name,value}= e.target
       setupdateStudent((updatestudent)=>{
           return{
            ...updatestudent,
            [name]:value
           }
       }

       )
    }
  
    // console.log(updatestudent)
    const { id }=useParams("");
    // console.log(id)
    const singleuser = `http://localhost:4064/student/${id}`;
    const getdata=async()=>{
    const res= await axios.get(singleuser)
    // console.log(res)
    setupdateStudent( await res.data)

}


// console.log(formdata)

const handleChange = (evt) => {
  setupdateStudent({
    ...updatestudent,
    [evt.target.name]: evt.target.value,
  });
};

 const handleSubmit=((e)=>{
    e.preventDefault()
   
 })

// console.log(student)
useEffect(()=>{

  getdata();
},[])


    const updateuser  =  async(e)=>{
      e.preventDefault()
     
       
      const updatedata =await axios.patch(`http://localhost:4064/student/updateuser/${id}`,
              JSON.stringify(updatestudent),
              {
                headers:{
                  "content-Type":"application/json"
                },
              }

              
        );
        // console.log(updatedata)
        const msg = updatedata.data
        console.log(msg)
        setmsg(msg)
        
       }

  return (
 
    <>
     <form onSubmit={handleSubmit}>
<div className="container mb-5 py-5">

<div className="mb-3 ">
    <label htmlFor="exampleInputName" className="form-label" >
      Username
    </label>
    <input
    
      type="text"
      name="fullName"
      className="form-control"
      // id="exampleInputName"
      aria-describedby="emailHelp"
      placeholder="Enter your Name"
      value={updatestudent.fullName}
      onChange={handleChange}
 
    />
 <p className="text-danger"></p> 
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputGmail" className="form-label">
      Gmail
    </label>
    <input
      type="text"
      name="userMail"
      className="form-control"
      // id="exampleInputGmail"
        aria-describedby="emailHelp"
      placeholder="Enter your Gmail"
      value={updatestudent.userMail}
      onChange={handleChange}
    
    />

<p className="text-danger"></p>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputGmail" className="form-label">
      Password
    </label>
    <input
      type="password"
      name="userPassword"
      className="form-control"
      // id="exampleInputGmail"
      placeholder="Enter Password"
      value={updatestudent.userPassword}
      onChange={handleChange}
    
  
    
    />

<p className="text-danger"></p>
  </div>
 <div className="details d-flex">
 <div className="col-4">
    <label htmlFor="exampleInputGmail" className="form-label">
      contact 
    </label>
    <input
      type="Contact"
      name="userContact"
      className="form-control"
      // id="exampleInputGmail"
      placeholder="Enter your Contact"
      value={updatestudent.userContact}
      onChange={handleChange}

    />
  </div>
  {/* <div className="col-8 px-5">
    <label htmlFor="exampleInputGmail" className="form-label">
      Work
    </label>
    <input
      type="Work"
      name="userWork"
      className="form-control"
      // id="exampleInputGmail"
      placeholder="Enter your Work"

      {...register("userWork",{
        required:"enter name work"
    })}
    />
  </div> */}
 </div>
  <div className="mb-3 py-2">
    <label htmlFor="exampleInputGmail" className="form-label">
    Address
    </label>
    <input
      type="Address"
      name="userAddress"
      className="form-control"
      // id="exampleInputGmail"
      placeholder="Enter your Address"
      value={updatestudent.userAddress}
      onChange={handleChange}

    
    />
  </div>
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" onClick={updateuser} className="btn btn-primary">
    Submit
  </button>
         <div className="msg text-center fw-bold text-success"> {msg}</div> 
  
</div>
</form>
   </>
 

  );

}
     
  


export default Update