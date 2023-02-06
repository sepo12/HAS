import { useState,useEffect } from 'react';
import React from 'react';
import {Form,Container,Control,InputGroup, FormLabel, Button} from 'react-bootstrap';
import  './Patient.css';
import { Link } from 'react-router-dom';

import { Navigate } from "react-router-dom";





 function Patient(){
  
const [first_name, setFirst_name] = useState();
const [last_name, setLast_name] = useState();
const [email, setEmail] = useState();
const [password, setPassword] = useState();

  const createPatient = async (e) => {
  e.preventDefault();
  try{
  const body = { first_name,last_name,email,password };
   const response = await fetch('http://localhost:5000/users/patient', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
      body:JSON.stringify(body)
    });
    
        setFirst_name(body);
        setLast_name(body);
        setEmail(body);
        setPassword(body);
        console.log(response);
        window.location="/PatientDashboard";
  //  res.json(response.rows)
  
   } catch(err){
    console.error(err.message);
   }
   
  };

    return (
<Container id="main-container" className='P-wrapper d-flex align-items-center justify-content-center w-100' >
    <Form className='P-form rounded '  onSubmit={createPatient} >
        <h1 className='P-he mt-5 text-center '>NEW PATIENT</h1>
         <Form.Group className='form-group mb-2 mt-2'>
            <FormLabel className='form-label'  >first name:</FormLabel>
            <Form.Control type='text' className='form-control' placeholder='first name' onChange={e => setFirst_name(e.target.value)} required/>
         </Form.Group>
         <Form.Group className='form-group mb-2'>
            <FormLabel className='form-label' >last name:</FormLabel>
            <Form.Control type='text' className='form-control' placeholder='last name' onChange={e => setLast_name(e.target.value)}  required/>
         </Form.Group>
         <FormLabel className='form-label' >email:</FormLabel>
         <Form.Group className='form-group mb-2'>
            <Form.Control type='text' className='form-control' placeholder='email' onChange={e => setEmail(e.target.value)} required/>
         </Form.Group>
         <Form.Group className='form-group mb-2'>
            <FormLabel className='form-label' >password:</FormLabel>
            <Form.Control type='password' className='form-control' placeholder='password' onChange={e => setPassword(e.target.value)} required/>
         </Form.Group>
         <Form.Group className='form-group mb-2'>
            <FormLabel className='form-label' >confirm password:</FormLabel>
            <Form.Control type='password' className='form-control mb-4' placeholder='confirm password'  required/>
         </Form.Group>
         <Button type="submit" variant="secondary" id='P-close' >CLOSE</Button>
         <Button   type="submit" variant="primary" id='submit' >SUBMIT</Button>
    </Form>
     </Container>

    );
}

export default Patient;
// as={Link} to="/PatientDashboard"