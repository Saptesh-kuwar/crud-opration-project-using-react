import React from "react"
import {useForm} from 'react-hook-form';
import { useState } from "react";
import axios from 'axios'


function CreateStudent() {


  const [response, setResponse] = useState();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onFormsubmit = (formdata) => {
    axios.post("http://localhost:4064/student/new", formdata)
      .then((response) => {
        // console.log(response)
        setResponse(response);
        // console.log(response)
        reset();
      })
      .catch((err) => console.log(err));
  }
  

 
  return (
    <>
   <form onSubmit={handleSubmit(onFormsubmit)}>
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
      {...register("fullName",{
        required:"Enter Your Fullname",
        pattern: {
          value: /^[a-z][a-z\s]*$/i,
          message: "Only letters and white space allowed",
        },


    })}
    />
 <p className="text-danger">{errors?.fullName && errors.fullName.message}</p> 
   
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
      {...register("userMail",{
        required:"Enter name Gmail",
        pattern: {
          value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
          message: "Only letters and white space allowed",
        },
    })}
    />

<p className="text-danger">{errors?.userMail && errors.userMail.message}</p>
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
    
      {...register("userPassword",{
        required:"Enter a Strong ",
           pattern:{
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            message:"Enter a Strong Password"
           }
        
    })}
    
    />

<p className="text-danger">{errors?.userPassword && errors.userPassword.message}</p>
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

      {...register("userContact",{
        required:"enter name Contact"
    })}
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

      {...register("userAddress",{
        required:"enter name Address"
    })}
    />
  </div>
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
 

</div>
</form>
    </>
 

  )

}
export default CreateStudent
