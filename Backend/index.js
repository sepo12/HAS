import express from 'express';
import cors from 'cors';
import client from './Server.cjs'
const router = express.Router();
const app = express();


//middleware
app.use(cors());
app.use(express.json());//req.body



//Routes


connect();
 async function connect() {
    try {
        await client.connect();
        console.log("connected");
    } 
    catch (e) {
        console.error(`connection failed ${e}`);
    }
}

//login


//creating a patient user
app.post("/users/patient", async (req, res) => {
  try{
      const{first_name,last_name,email,password}=req.body;
      const newUser= await client.query(
          `INSERT INTO public.user (first_name,last_name,email,password,role_id) VALUES ($1,$2,$3,$4,1) RETURNING*`  ,[first_name,last_name,email,password]
       );
       res.json(newUser.rows);
      //  res.json({status: "success"});
  }catch (e){
      console.error(e.message); 
      // res.send("there was an error");
  }

});
//create a doctor
app.post("/users/doctor", async (req, res) => {
  try{
      const{first_name,last_name,email,password,specialization}=req.body;
      const newUser= await client.query(
          `INSERT INTO public.user (first_name,last_name,email,password,specialization,role_id) VALUES ($1,$2,$3,$4,$5,2) RETURNING*`  ,[first_name,last_name,email,password,specialization]
       );
       res.json(newUser.rows);
      //  res.json({status: "success"});
  }catch (e){
      console.error(e.message); 
      // res.send("there was an error");
  }

});
//create an admin
app.post("/users/admin", async (req, res) => {
  try{
      const{first_name,last_name,email,password}=req.body;
      const newUser= await client.query(
          `INSERT INTO public.user (first_name,last_name,email,password,role_id) VALUES ($1,$2,$3,$4,0) RETURNING*`  ,[first_name,last_name,email,password]
       );
       res.json(newUser.rows);
      //  res.json({status: "success"});
  }catch (e){
      console.error(e.message); 
      // res.send("there was an error");
  }

});
//login 







//create an appointment
app.post("/users/Appointment", async (req, res) => {
  try{
      const{date,approval,details,patient_id}=req.body;
      const newAppointment= await client.query(
          `INSERT INTO public.appointment (date,approval,details,patient_id) VALUES ($1,$2,$3,$4) RETURNING*`  ,[date,approval,details,patient_id]
       );
       res.json(newAppointment.rows);
      //  res.json({status: "success"});
  }catch (e){
      console.error(e.message); 
      // res.send("there was an error");
  }

});



//view appointments a patient
app.get("/users/appointment", async(req,res)=>{
  try {
    const allAppointmnets = await client.query("SELECT * FROM public.appointment")
   res.json(allAppointmnets.rows);
    
  } catch (error) {

    console.error(error.message)
    
  }
})

//get all doctors as ana admin
app.get("/users/doctor", async(req,res)=>{
  try {
    const allUsers = await client.query("SELECT * FROM public.user WHERE role_id=2")
   res.json(allUsers.rows);
    
  } catch (error) {

    console.error(error.message)
    
  }
})
//get all users(patient,doctor,admin)

app.get("/users", async(req,res)=>{
  try {
    const allUsers = await client.query("SELECT * FROM public.user")
   res.json(allUsers.rows);
    
  } catch (error) {

    console.error(error.message)
    
  }
})

//getting a user based on the role_id

app.get("/users/:role_id",async(req,res)=>{
  try {
    const{role_id} = req.params;
    const user = await client.query("SELECT * FROM public.user WHERE role_id = $1",[role_id])
    res.json(user.rows)
    
  } catch (err) {
    console.error(err.message);
  }
})


app.listen(5000,()=>{

  console.log("started running on port 5000")
})
