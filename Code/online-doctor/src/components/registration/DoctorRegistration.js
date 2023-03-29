import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

export default function DoctorRegistration() {
     
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [age, setAge] = useState("");
     const [gender, setGender] = useState("");
     const [email, setEmail] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("");
     const [fatherName, setFatherName] = useState("");
     const [motherName, setMotherName] = useState("");
     const [photo, setPhoto] = useState("");
     const [doctorRegNumber, setDoctorRegNumber] = useState("");
     const [doctorDegree, setDoctorDegree] = useState("");
     const [specialization, setSpecialization] = useState("");
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [notification, setNotificaiton] = useState("");


     const register = (e) => {
     
     e.preventDefault();
     Axios.post("http://localhost:3001/doctorRegister", {
          firstName: firstName,
          lastName: lastName,
          age: age,
          gender: gender,
          email: email,
          phoneNumber: phoneNumber,
          fatherName: fatherName,
          motherName: motherName,
          photo: photo,
          doctorRegNumber: doctorRegNumber,
          doctorDegree: doctorDegree,
          specialization: specialization,
          username: username,
          password: password
     }).then((response) => {
          // setRegisterStatus(response);
          // console.log(response);
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
                    <h3>Your Account has been successfully created</h3>
               </div>
               )
          }
     })
}



     return (
     <div className="container">
          <div>
               <p className='card-title text-center pb-0 fs-1'>Create an Account</p>
               <p className='text-center pb-4'>Enter your personal details to create account</p>
          </div>

          <form id="regForm" className="row g-3 needs-validation" novalidate>
               {/* <--- Input Name ---> */}
               <div className="col-md-6">
                    <label for="firstName" className="form-label">First Name</label>
                    <input type="text" name="firstName" className="form-control" id="firstName" onChange={(e) => {setFirstName(e.target.value);setNotificaiton("")}} required  />
               </div>

               <div className="col-md-6">
                    <label for="lastName" className="form-label">Last Name</label>
                    <input type="text" name="lastName" className="form-control" id="lastName" onChange={(e) => {setLastName(e.target.value);setNotificaiton("")}} required  />
               </div>


               {/* <--- Input Email & Phone Number ---> */}
               <div className="col-md-6">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" onChange={(e) => {setEmail(e.target.value);setNotificaiton("")}} required  />
               </div>
               <div className="col-md-6">
                    <label for="phoneNumber" className="form-label">Phone Number</label>
                    <input type="tel" name="phoneNumber" className="form-control" id="phoneNumber" onChange={(e) => {setPhoneNumber(e.target.value);setNotificaiton("")}} required  />
               </div>


               {/* <--- Input Father and Mother Name ---> */}
               <div className="col-md-6">
                    <label for="fatherName" className="form-label">Father Name</label>
                    <input type="text" name="fatherName" className="form-control" id="fatherName" onChange={(e) => {setFatherName(e.target.value);setNotificaiton("")}} required  />
               </div>
               <div className="col-md-6">
                    <label for="motherName" className="form-label">Mother Name</label>
                    <input type="text" name="motherName" className="form-control" id="motherName" onChange={(e) => {setMotherName(e.target.value);setNotificaiton("")}} required  />
               </div>


               {/* <--- Input Gender and Age ---> */}
               <div className="col-md-6">
                    <label for="gender" className="form-label">Gender</label>
                    <select className="form-control" id="gender" name='gender' onChange={(e) => {setGender(e.target.value);setNotificaiton("")}} required>
                         <option value=""></option>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="other">Other</option>
                    </select>

               </div>
               <div className="col-md-6">
                    <label for="age" className="form-label">Age</label>
                    <input type="number" name="age" className="form-control" id="age" onChange={(e) => {setAge(e.target.value);setNotificaiton("")}} required />
               </div>


               {/* <--- Input Photo & Registration Number ---> */}
               <div className="col-md-6">
                    <label for="photo" className="form-label">Select Your Photo</label>
                    <input type="file" name="photo" className="form-control" id="photo" onChange={(e) => {setPhoto(e.target.value);setNotificaiton("")}} required />
               </div>
               <div className="col-md-6">
                    <label for="regNumber" className="form-label">Doctor Registration Number</label>
                    <input type="text" name="regNumber" className="form-control" id="regNumber" onChange={(e) => {setDoctorRegNumber(e.target.value);setNotificaiton("")}} required />
               </div>


               {/* <--- Input Specialization and Doctor's degree ---> */}
               <div className="col-md-6">
                    <label for="specialization" className="form-label">Specialization</label>
                    <input type="text" name="specialization" className="form-control" id="specialization" onChange={(e) => {setSpecialization(e.target.value);setNotificaiton("")}} required />
               </div>
               <div className="col-md-6">
                    <label for="degree" className="form-label">Doctor Degree(pdf)</label>
                    <input type="file" name="degree" className="form-control" id="degree" onChange={(e) => {setDoctorDegree(e.target.value);setNotificaiton("")}} required />
               </div>


               {/* <--- Input Username ---> */}
               <div className="col-md-12">
                    <label for="yourUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                         <span className="input-group-text" id="inputGroupPrepend">@</span>
                         <input type="text" name="username" className="form-control" id="yourUsername" onChange={(e) => {setUsername(e.target.value);setNotificaiton("")}} required />
                    </div>
               </div>

               
               {/* <--- Input Password ---> */}
               <div className="col-md-6">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" onChange={(e) => {setPassword(e.target.value);setNotificaiton("")}} required />
               </div>
               {/* <div className="col-md-6">
                    <label for="confirmpassword" className="form-label">Confirm Password</label>
                    <input type="password" name="confirmpassword" className="form-control" id="confirmpassword" onChange={(e) => {setConfirmPassword(e.target.value);setNotificaiton("")}} required />
               </div> */}

               {notification}

               <div className="col-md-12">
                    <button className="btn btn-primary w-100" type="submit" onClick={register}>Create Account</button>
               </div>

               {/* <--- If already login ---> */}
               <div className="col-md-12">
                    <p className="medium pb-4">Already have an account? <Link to="/login">Log in</Link></p>
               </div>
          </form>
     </div>
     )
}
