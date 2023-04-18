import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';



const ApiUrl='http://localhost:4064/student/showdata';
function AllStudent() {
  const[Students , setAllStudents,]=useState([]);
    const getUser = async()=>{
     const res =  await axios.get(ApiUrl)
     console.log(res)
     setAllStudents(await res.data)
     
    }

    const deletedata =async(id)=>{
      // console.log(id)
     const res = await axios.delete(`http://localhost:4064/student/deleteuser/${id}`)
      console.log(res)
       
       getUser() ; 
  
    }
      
   useEffect(()=>{
    getUser();
   },[]) 

    
          
  
  
  return (
    <>

<div className=" py-5 d-flex justify-content-center col- ">
  <div className="row">
  <>
  {/* Hello world */}
  <div className='table-responsive'>
  <table className="table ">
    <thead>
      <tr className='table-dark text-center'>
        <th>NO.</th>
        <th scope="col">NAME</th>
        <th scope="col">EMAIL</th>
        <th scope="col">PASSWORD</th>
        <th scope="col">CONTACT</th>
        <th scope="col">ADDRESS</th>
        <th scope="col"> </th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    {/* {console.log(Students)} */}
    {Students.map((student, index)=>{
      return(
        <>
           <tbody>
      <tr className='text-center'>
     <td>{index}</td>
      <td>{student.fullName}</td>
      <td>{student.userMail}</td>
      <td>{student.userPassword}</td>
      <td>{student.userContact}</td>
      <td>{student.userAddress}</td>
     <td><NavLink to={`/view/${student._id}`}><button type="button" class="btn btn-info border btn-sm rounded-pill">View</button></NavLink></td>
     <td><NavLink to={`/update/${student._id}`}><button type="button" class="btn btn-success btn-sm rounded-pill">Update</button></NavLink></td>
     <td><button  type="button" class="btn btn-danger btn-sm rounded-pill " onClick={()=>deletedata(student._id)}>Delete</button></td>
        {/* <th scope="row"></th> */}
      </tr>
     
    </tbody>
        </>
      )
    })}
   
  </table>
  </div>
 
</>
  </div>


</div>
    </>
  )
}

export default AllStudent;