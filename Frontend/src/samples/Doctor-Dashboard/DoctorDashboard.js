import { Table,Container,Button} from "react-bootstrap";
import './DoctorDashBoard.css';
import { useState,useEffect} from "react";
import { Navigate } from "react-router-dom";

function DoctorDashBoard(){
    const [appointments,setAppointments]=useState([]);
    const [gotoHome,setGoToHome] = useState(false);
    
    

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
    if(gotoHome){
        return <Navigate to = "/"/>
    }

    return (
        <Container>
            <div className="Doctordashboard mb-3">
                <p className="d-head text-center mb-2">Hosipital Appointment Module <br/> <span className="d-subhead">Doctor Dashboard</span></p>
                <div className="D-ADD">
                    <p>APPOINTMENTS</p>
                </div>
                <div className="D-LOGOUT">
                    <p>SEPISO@GMAIL.COM:</p>
                    <Button className="D-logout" type="button" onClick={() => {
    setGoToHome(true);}}>LOGOUT</Button>
                </div>
            </div>

            <Table>
            <thead>
                    <tr>
                        
                        <th>
                            DoctorId
                        </th>
                        <th>
                            PatientId
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
                        <th>
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>    
               {appointments.map((appointment) => (
                
                <tr key={appointment.id}>
                    <td>{appointment.doctor_id}</td>
                    <td>{appointment.patient_id}</td>
                    <td>{appointment.details}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.approval}</td> 
                    <td>Edit | Accept</td>
                </tr>  
            ))}
        </tbody>
                
            </Table>
        </Container>

    );
}
export default DoctorDashBoard;