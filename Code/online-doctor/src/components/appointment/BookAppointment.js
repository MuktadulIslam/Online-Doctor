import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

export default function BookAppointment() {
     const [password, setPassword] = useState("");
     const [doctor, setDoctor] = useState("");
     const [timeDate, setTimeDate] = useState("");
     const [notificaiton, setNotificaiton] = useState("");


     const bookAppointment = (e) => {
     
          e.preventDefault();
          console.log(timeDate);
          Axios.post("http://localhost:3001/bookAppointment", {
               password: password,
               doctor: doctor,
               timeDate: timeDate

          }).then((response) => {
               if(response.data.message){
                    setNotificaiton(
                    <div className="col-md-12">
                         <h3>Failed to create a new Account</h3>
                    </div>
                    )
               
               }else{
                    document.getElementById("regForm").reset();
                    setNotificaiton(
                    <div className="col-md-12">
                         <h3>Appointment has been booked successfully</h3>
                    </div>
                    )
               }
          })
     }


     return (
     <div className="container">
          <div>
               <p className='card-title text-center pb-0 fs-1'>Book an Appointment</p>
               <p className='text-center pb-4'>Enter your password and appointment details to book an appointment</p>
          </div>

          <form id = "regForm" className="row g-3 needs-validation" novalidate>


               {/* <--- Input Specialist & Doctor's Name ---> */}
               <div className="col-md-6">
                    <label for="gender" className="form-label">Choose Specialist</label>
                    <select className="form-control" id="gender" name='gender'  onChange={(e) => {setNotificaiton("")}} required>
                         <option value=""></option>
                         <option value="">Ophthalmologists</option>
                         <option value="">Cardiologists</option>
                         <option value="">Endocrinologists</option>
                         <option value="">Gastroenterologists</option>
                    </select>
               </div>
               <div className="col-md-6">
                    <label for="gender" className="form-label">Choose A Doctor</label>
                    <select className="form-control" id="gender" name='gender'  onChange={(e) => {setDoctor(e.target.value);setNotificaiton("")}} required>
                         <option value=""></option>
                         <option value="ranaAhmed">Rana Ahmed</option>
                         <option value="anwerhossain">Anwer Hossain</option>
                         <option value="mohsinIslam">Mohsin Islam</option>
                    </select>

               </div>





               {/* <--- Input Time and Date ---> */}
               <div className="col-md-12">
                    <label for="photo" className="form-label">Select Time & Date</label>
                    <input type="datetime-local" name="photo" className="form-control" id="photo"  onChange={(e) => {setTimeDate(e.target.value.toISOString());setNotificaiton("")}} required/>
               </div>

               
               {/* <--- Input Password ---> */}
               <div className="col-md-6">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password"  onChange={(e) => {setPassword(e.target.value);setNotificaiton("")}} required />
               </div>

               
               
               {notificaiton}


               <div className="col-md-12">
                    <button className="btn btn-primary w-100" type="submit"onClick={bookAppointment}>Book an Appointment</button>
               </div>
          </form>
     </div>
     )
}

