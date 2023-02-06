import { useState } from "react";
import { Button, Container, FormGroup, FormLabel } from "react-bootstrap";
import { Form,FormControl} from "react-bootstrap";
import './Appointment.css';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Appointment (){
    const [goToAppointment,setGoToAppointment] = useState(false);
    const [date, setDate] = useState();
    
     const [details, setDetails] = useState();
    const [patient_id, setPatient_id] = useState();
   
    async function createAppointment(e) {
        e.preventDefault();
        try{
        const body = { date,details,patient_id };
         const response = await fetch('http://localhost:5000/users/Appointment', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'},
            body:JSON.stringify(body)
          });
          
              setDate(body);
             
              setDetails(body);
              setPatient_id(body);
              console.log(response);
        //  res.json(response.rows)
        window.location="/PatientDashboard";
        
         } catch(err){
          console.error(err.message);
         }
         
        };
        if(goToAppointment){
            return <Navigate to = "/PatientDashboard"/>
        }
    return (
        <Container className=" wrapper d-flex justify-content-center align-items-center ">
            <Form className="form"  onSubmit={createAppointment}>
                 <FormGroup className="form-group">
                   <FormLabel className="form-label">Date</FormLabel>
                   <FormControl type="text"  className="form-control form-control mb-2" onChange={e => setDate(e.target.value)}  required/>
                 </FormGroup>

             

                 <FormGroup className="form-group">
                    <FormLabel className="form-label ">Details:</FormLabel>
                    <FormControl type="text" className="form-control mb-4" onChange={e => setDetails(e.target.value)} required/>
                 </FormGroup>
                 <FormGroup className="form-group">
                    <FormLabel className="form-label ">Patient_Id:</FormLabel>
                    <FormControl type="text" className="form-control mb-4" onChange={e => setPatient_id(e.target.value)} required/>
                 </FormGroup>

                 <h1 id='head' className="mb-4 text-center">An available doctor will take up this appoinment after submission</h1>
                 <div className="line mb-3"></div>
                 <Button variant="secondary" id="close" type="button" onClick={() => {
    setGoToAppointment(true);}}>CLOSE</Button>
                 <Button variant="primary" type="submit" id="submit">SUBMIT</Button>
            </Form>

        </Container>

    );
    
    
}
export default Appointment;


// onClick={() => {
    // setGoToAppointment(true);}