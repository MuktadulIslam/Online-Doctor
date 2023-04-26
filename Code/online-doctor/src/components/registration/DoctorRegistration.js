import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SuccessPopup from '../../popView/SuccessPopup';
import ErrorPopup from '../../popView/ErrorPopup';
import Axios from 'axios';
import Constants from '../../Constants';

export default function DoctorRegistration() {
     
     const [firstName, setFirstName] = useState("");
     const [lastName, setLastName] = useState("");
     const [age, setAge] = useState(0);
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
     const [confirmPassword, setConfirmPassword] = useState("");

     const [notification, setNotification] = useState(false);
     const [showPopupComponent, setShowPopupComponent] = useState(true);


     const register = (event) => {
          event.preventDefault();
          setShowPopupComponent(true);

          if(password !== confirmPassword) {
               setNotification(<ErrorPopup message="Password and Confirm Password Doesn't match!"/>)
               document.getElementById('password').value='';
               document.getElementById('confirmPassword').value='';
               setPassword('');
               setConfirmPassword('');
               return;
          }
     
          event.preventDefault();
          Axios.post(Constants.SERVER_IP + "doctorRegister", {
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
               if(response.data.message){
                    console.log(response.data.message);
                    if(response.data.message.startsWith(Constants.DUPLICATE_ERROR)) {
                         setNotification(<ErrorPopup message='Username must be Unique'/>)
                    }
                    else {
                         setNotification(<ErrorPopup message='Failed to Create an Account'/>)
                    }
               
               }else{
                    setNotification(<SuccessPopup message='Your account has been successfully  created. Now you login in your profile '/>);
               }
          }).catch((error) => {
               if(error.message.startsWith(Constants.NETWORK_ERROR)) {
                    setNotification(<ErrorPopup message='Failed to connect with Backend Database Server'/>)
               }
               else {
                    setNotification(<ErrorPopup message='Failed to connect with Backend Database Server for Unknown reason'/>)
               }
          });

          setFirstName('');
          setLastName('');
          setAge(0);
          setGender('');
          setEmail('');
          setPhoneNumber('');
          setFatherName('');
          setMotherName('');
          setPhoto('');
          setDoctorRegNumber('');
          setDoctorDegree('');
          setSpecialization('');
          setUsername('');
          setPassword('');
          setConfirmPassword('');
          document.getElementById("regForm").reset();
     }



     return (
     <div className="container">
          {/* For popup */}
          {showPopupComponent && notification}

          <div>
               <p className='card-title text-center pb-0 fs-1'>Create a Doctor Account</p>
               <p className='text-center pb-4'>Enter your personal details to create account</p>
          </div>

          <form id = "regForm" className="row g-3 needs-validation" onSubmit={register}>
               {/* <--- Input Name ---> */}
               <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input required type="text" name="firstName" className="form-control" id="firstName" onChange={(e) => {setFirstName(e.target.value);setShowPopupComponent(false);}}/>
               </div>

               <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" name="lastName" className="form-control" id="lastName" onChange={(e) => {setLastName(e.target.value);setShowPopupComponent(false);}}/>
               </div>


               {/* <--- Input Email & Phone Number ---> */}
               <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input required type="email" name="email" className="form-control" id="email" onChange={(e) => {setEmail(e.target.value);setShowPopupComponent(false);}}/>
               </div>
               <div className="col-md-6">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input required type="tel" name="phoneNumber" className="form-control" id="phoneNumber" onChange={(e) => {setPhoneNumber(e.target.value);setShowPopupComponent(false);}} />
               </div>


               {/* <--- Input Father and Mother Name ---> */}
               <div className="col-md-6">
                    <label htmlFor="fatherName" className="form-label">Father Name</label>
                    <input type="text" name="fatherName" className="form-control" id="fatherName" onChange={(e) => {setFatherName(e.target.value);setShowPopupComponent(false);}}/>
               </div>
               <div className="col-md-6">
                    <label htmlFor="motherName" className="form-label">Mother Name</label>
                    <input type="text" name="motherName" className="form-control" id="motherName" onChange={(e) => {setMotherName(e.target.value);setShowPopupComponent(false);}}/>
               </div>


               {/* <--- Input Gender and Age ---> */}
               <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select required className="form-control" id="gender" name='gender' onChange={(e) => {setGender(e.target.value);setShowPopupComponent(false);}}>
                         <option value=""></option>
                         <option value="male">Male</option>
                         <option value="female">Female</option>
                         <option value="other">Other</option>
                    </select>

               </div>
               <div className="col-md-6">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input required type="number" name="age" className="form-control" id="age" onChange={(e) => {setAge(e.target.value);setShowPopupComponent(false);}}/>
               </div>


               {/* <--- Input Photo & Registration Number ---> */}
               <div className="col-md-6">
                    <label htmlFor="photo" className="form-label">Select Your Photo</label>
                    <input required type="file" name="photo" className="form-control" id="photo" onChange={(e) => {setPhoto(e.target.value);setShowPopupComponent(false);}}/>
               </div>
               <div className="col-md-6">
                    <label htmlFor="regNumber" className="form-label">Doctor Registration Number</label>
                    <input required type="text" name="regNumber" className="form-control" id="regNumber" onChange={(e) => {setDoctorRegNumber(e.target.value);setShowPopupComponent(false);}}/>
               </div>


               {/* <--- Input Specialization and Doctor's degree ---> */}
               <div className="col-md-6">
                    <label htmlFor="specialization" className="form-label">Specialization</label>
                    <input required type="text" name="specialization" className="form-control" id="specialization" onChange={(e) => {setSpecialization(e.target.value);setShowPopupComponent(false);}}/>
               </div>
               <div className="col-md-6">
                    <label htmlFor="degree" className="form-label">Doctor Degree(pdf)</label>
                    <input required type="file" name="degree" className="form-control" id="degree" onChange={(e) => {setDoctorDegree(e.target.value);setShowPopupComponent(false);}} />
               </div>


               {/* <--- Input Username ---> */}
               <div className="col-md-12">
                    <label  htmlFor="yourUsername" className="form-label">Username</label>
                    <input required type="text" name="username" className="form-control"  onChange={(e) => {setUsername(e.target.value); setShowPopupComponent(false);}}/>
               </div>

               
               {/* <--- Input Password ---> */}
               <div className="col-md-6">
                    <label  htmlFor="password" className="form-label">Password</label>
                    <input required type="password" name="password" className="form-control" onChange={(e) => {setPassword(e.target.value); setShowPopupComponent(false);  setNotification('');}}  id='password' />
               </div>
               <div className="col-md-6">
                    <label  htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                    <input required type="password" name="confirmpassword" className="form-control"  onChange={(e) => {setConfirmPassword(e.target.value); setShowPopupComponent(false);  setNotification('');}}   id='confirmPassword'/>
               </div>


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
