
import './App.css';

import Admin from './samples/Admin/Admin';
import Doctor from './samples/Doctor/Doctor';
import Home from './samples/Home/Home';

import Patient from './samples/Patient/Patient';
import Appointment from './samples/Appointment/Appointment';
import AdminDashboard from './samples/Admin-Dashboard/AdminDashboard';
import PatientDashboard from './samples/Patient-Dashboard/PatientDashboard';
import DoctorDashBoard from './samples/Doctor-Dashboard/DoctorDashboard';
import PatientLogin from './samples/Patient/PatientLogin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Notify,Layout,Navbar} from "./components";
import {ROLES} from "./helpers/roles";
import RequireAuth from "./helpers/RequireAuth";

function App() {
  return (
    <>
     
      <Routes>
       
            <Route path="/admin" element={<Admin />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/PatientLogin" element={< PatientLogin/>}/>
       
         
            <Route path="/Patient" element={<Patient />} />
         

          {/* {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home/>}/>
          <Route path="Appointment" element={<Appointment/>} />
          <Route path="AdminDashboard" element={<AdminDashboard />} />
          <Route path="PatientDashboard" element={<PatientDashboard />} /> 
          <Route path="DoctorDashboard" element={<DoctorDashBoard />} /> 
{/* {
          <Route path="*" element={<NotFound />} /> } */}
  
      </Routes>
   {/* <Admin />
   <AdminDashboard />
   <Doctor />
   <DoctorDashBoard />
   <Patient />
   <PatientDashboard />
   <Appointment /> */}

   </>
   );
}

export default App;


   {/* <BrowserRouter>
       <Header/>
       <Switch>
              <Route exact path="/samples/Patient/Patient" component={Patient}/>
              <Route exact path="/samples/Patient-Dashboard/PatientDashboard" component={PatientDashboard}/>
      </Switch>
    </BrowserRouter> */}
 
 
 
  
