import {Route,Routes} from 'react-router-dom'
 import Navbar from './Navbar'
import Home from './Home'
import Service from './Service'
import AllStudents from './students/AllStudents'
import CreateStudent from './students/Createstudent'
import UserDetails from './component/UserDetails'
import Update from './component/Update'





function App() {


  return (
  <>
     <Navbar/>  
   <Routes>
    <Route path ='/' element={<Home/>}></Route>
    <Route path ='/Students' element={<AllStudents/>}></Route>
    <Route path ="/Student/new" element={<CreateStudent/>}></Route>
    <Route path ='/Service' element={<Service/>}></Route>
    <Route path ='/view/:id' element ={<UserDetails/>}></Route>
    <Route path ='/update/:id' element ={<Update/>}></Route>
 

  
   </Routes>
  </>
  )
}

export default App
