import { useState } from 'react';
import {Container,Form,Button} from 'react-bootstrap'
import './Doctor.css';
import { Link } from 'react-router-dom';


function Doctor(){
    
    const [first_name, setFirst_name] = useState();
    const [last_name, setLast_name] = useState();
    const [email, setEmail] = useState();
    const[specialization,setSpecialization]= useState();
     const [password, setPassword] = useState();
    
        
        async function createDoctor(e) {
            e.preventDefault();
            try{
            const body = { first_name,last_name,specialization,email,password };
             const response = await fetch('http://localhost:5000/users/doctor', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'},
                body:JSON.stringify(body)
              });
              
                  setFirst_name(body);
                  setLast_name(body);
                  setEmail(body);
                  setPassword(body);
                  setSpecialization(body);
                //   console.log(response);
                window.location="/AdminDashboard";
            //  res.json(response.rows)
            
             } catch(err){
              console.error(err.message);
             }
             
            };
    
    return(

    
<Container id= "D-main-container"className="d-grid h-100 -flex align-items-center justify-content-center w-100">
<Form className='h-100 w-250 mb-3' id='D-form' onSubmit={createDoctor}>
 <div className='text-bold'> <h1 className='D-head text-center'>Add Provider (Doctor)</h1></div>

    <Form.Group>
        <label htmlFor="FloatingInput mt-4">First Name</label>
        <Form.Control type="text" className="form-control mb-4 " id="FloatingInput" placeholder="First Name"  onChange={e => setFirst_name(e.target.value)} required/>
    </Form.Group>
    <Form.Group>
        <label htmlFor="FloatingInput">Last Name</label>
        <Form.Control type="text" className="form-control mb-4" id="FloatingInput" placeholder="Last Name" onChange={e => setLast_name(e.target.value)}  required />
    </Form.Group>
    <Form.Group>
        <label htmlFor="FloatingInput">Specialist</label>
        <Form.Control type="text" className="form-control mb-4" id="FloatingInput" placeholder="Specialist"  onChange={e => setSpecialization(e.target.value)} required/>
    </Form.Group>
    <Form.Group>
        <label htmlFor="FloatingInput">Email Address</label>
        <Form.Control type="text" className="form-control mb-4" id="FloatingInput" placeholder="Email Address" onChange={e => setEmail(e.target.value)} required />
    </Form.Group>
    <Form.Group>
        <label htmlFor="FloatingInput">Password</label>
        <Form.Control type="text" className="form-control mb-4" id="FloatingInput" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
    </Form.Group>
    <Form.Group>
        <label htmlFor="FloatingInput ">Confirm Password</label>
        <Form.Control type="text" className="form-control mb-4 " id="FloatingInput" placeholder="Confirm Password" />
    </Form.Group>

    <Button type="button" variant="secondary" id='close' as={Link} to={"/AdminDashboard"}>CLOSE</Button>
    <Button  type="submit" variant="primary" id='submit'>SUBMIT</Button>
    </Form>
</Container>
);
}

 export default Doctor;

//  as={Link} to={"/DoctorDashboard"}
 