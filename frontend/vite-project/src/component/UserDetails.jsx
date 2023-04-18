import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


function UserDetails() {
    const[student, setStudent]=useState([]);
    const {id}=useParams("");
    // console.log(id)
    const singleuser =`http://localhost:4064/student/${id}`;
    const getdata=async()=>{
    const res= await axios.get(singleuser)
    // console.log(res)
    setStudent( await res.data)

}

console.log(student)
useEffect(()=>{

    getdata();
},[])

  return (
<>

<div className="card my-5 mx-5" style={{ width: "20rem" }}>
  <div className="card-body text-center py-5">
    <h5 className="card-title">Name: <span className=' text-danger text-center '>{student.fullName}</span></h5>
    <h6 className="card-subtitle mb-2 ">Gmail: <span className='text-danger text-center'>{student.userMail}</span></h6>
    <h6 className="card-text ">
     Mobile No: <span className='text-danger'>{student.userContact}</span>
    </h6>
    <h6 className="card-text ">
    Address: <span className='text-danger'> {student.userAddress}</span>
    </h6>
    <a href="#" className="card-link">
  
    </a>
  </div>
</div>
</>


  )
}

export default UserDetails