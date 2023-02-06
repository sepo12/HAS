import { Card, FormGroup, Navbar, NavItem } from "react-bootstrap";
import './AdminDashboard.css';
import {Button,Container,Nav,Form,FormLabel,} from "react-bootstrap";
import {Row ,Col} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { useState,useEffect} from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";





function AdminDashboard(){
  const [doctors,setDoctors]=useState([]);
  const[goToDoc,setGoToDoc]=useState(false);
  const getDoctors = async () => {
    try {
        const response=await fetch("http://localhost:5000/users/doctor");
        const jsonData= await response.json();
        setDoctors(jsonData);
    } catch (error) {
        console.error(error.message);
        
    }
};
useEffect(()=>{
    getDoctors();
},[]);
if(goToDoc){
  return <Navigate to ="/Doctor"/>
}

    return (
     

<div  className="container ">
  <div className="container-2 text-center" >
        <h4>Hosipital Appointment Module<br/>Admin Dashboard</h4>
      <div className="ADD" >
       <p id="form-label me-2" className=" d-flex">PROVIDERS(DOCTORS):</p> 
        <Button type="button" className="btn d-flex btn-primary btn-sm" onClick={() => {
                setGoToDoc(true);}}>ADD</Button>
      </div>
      <div className="logout mb-3"> 
        <p className='form-label2 d-flex me-2'>SEPISO:</p>
        <Button className="btn-2 btn-primary d-flex" type="button" as={Link} to={"/"}>LOGOUT</Button>
      </div>
  </div>



  <Table bordered> 

   <thead>
    <tr>
      
      <th scope="col">First name</th>
      <th scope="col">Last name </th>
      <th scope="col">specialization</th>
    </tr>
  </thead>

  
  <tbody>
  {doctors.map((doctor) => (
              <tr key={doctor.id}>
                    
                    <td>DR. {doctor.first_name}</td>
                    <td>{doctor.last_name}</td>
                    <td>{doctor.specialization}</td>
                   
         
    </tr>
  ))}
      
  </tbody>
 
</Table> 
     </div>


 );
}
export default AdminDashboard;