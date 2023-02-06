
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import  Button  from 'react-bootstrap/Button';
// import LinkContainer from "react-router-bootstrap/LinkContainer";
import './Admin.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';



function Admin(){
  const [gotoAdmin,setGoToAdmin] = useState(false);
  if(gotoAdmin){
    return <Navigate to = "/AdminDashboard"/>
  }
return(
  <Container id="A-main-container " className='d-grid w-300 h-200 mt-5 mb-5 d-flex align-items-center justify-content-center w-100'>
  <Form className="h-100 w-250 p-10" id ="A-form">
  <h1 id="admin-login">Hosipital Appointment Module </h1>
  <h1 id="admin-login">Admin Login</h1>

  <Form.Group controlId='Username'>
    <Form.Label>username:
           <Form.Control type="username" placeholder="input username" autoComplete="username" size="lg" className='position-relative mb-3' required />
    </Form.Label>
  </Form.Group>
      
  <Form.Group controlId='passsword'>
        <Form.Label>password:
           <Form.Control type="password" placeholder="input password" autoComplete="current-password" size="lg" className='position-relative mb-3' required />
           </Form.Label>
  </Form.Group>
        
  {/* <LinkContainer to="/Admin-Dashboard/AdminDashboard"> */}
   <Button id="A-login"className="primary" onClick={() => {
            setGoToAdmin(true);}
            }>LOGIN</Button> <br/><br/><br/>
   {/* </LinkContainer>    */}
   

      
  <Form.Group controlId='check-box' className='d-flex mb-4'>
    <Form.Check className='mt-20 pt-10'  label="LOGIN AS ADMIN"/>       
  </Form.Group>
  <div className="create-account">
          <a href='/create-account'  className='text-decoration-none mt-5'>create Account</a>
  </div>  
  <div className='forgot-password'>
          <a href='/forgot-password' id='forgot-password' className='text-decoration-none mt-5'>forgot Password?</a>
  </div>
  </Form>
  
 
  </Container>
);
}
export default Admin;