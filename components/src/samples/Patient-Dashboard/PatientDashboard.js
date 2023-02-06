import { useState,useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import './PatientDashboard.css';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";




function PatientDashboard(){

    const [appointments,setAppointments]=useState([]);
    const[goToAppointment,setGoToAppointments]=useState(false);
    
    
    const getAppointments = async () => {
        try {
            const response=await fetch("http://localhost:5000/users/Appointment");
            const jsonData= await response.json();
            setAppointments(jsonData);
        } catch (error) {
            console.error(error.message);
            
        }
    };
    useEffect(()=>{
        getAppointments();
    },[]);
    if(goToAppointment){
        return <Navigate to ="/Appointment"/>
    }
    return (
      
        <Container>
       <div className="patientDashboard mb-2">
        <h1 className="P-head text-center mt-3">Hosipital Appointment Module <br/><span className="P-subhead"> Patient Dashboard</span></h1>
         <div className="P-LOGOUT">
           <p>Sepis@gmail.com:</p>
           <Button className="primary" type="button" as={Link} to="/"
            >LOGOUT</Button>
         </div>

         <div className="P-ADD">
            <p>APPOINTMENT:</p>
            <Button className="primary" type="button" 
             onClick={() => {
                setGoToAppointments(true);}}>ADD</Button>
         </div>
       </div>

       <Table>
    
        <thead>
            <tr>
               
                <th>
                    Patient Id
                </th>
                <th>
                    Appointment Description
                </th>
                <th>
                    Appointment Time
                </th>
                <th>
                    Approval
                </th>
            </tr>
        </thead>
        <tbody>    
        {appointments.map((appointment) => (
              <tr key={appointment.id} >
                    
                    <td>{appointment.patient_id}</td>
                    <td>{appointment.details}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.approval}</td>
                    
                </tr>  
            ))}    
        </tbody>
       </Table>
       </Container>


    );
    }
export default PatientDashboard;