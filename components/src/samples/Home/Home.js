import React from "react";
function Home() {
return(
    <div className="text-center">
    <h1 text-align="center">welcome </h1>
    <div className="SignUp">
    <button typeof="dropdownlist">SignUp</button>
    <div className="dropdowncontent">
    <a href="/DoctorDashboard">As a doctor</a><br/>
    <a href="/patient">As a Patient</a><br/>
    <a href="/AdminDashboard">As a Admin</a>
   
    </div>
    </div>
    
    </div>

);}
export default Home;