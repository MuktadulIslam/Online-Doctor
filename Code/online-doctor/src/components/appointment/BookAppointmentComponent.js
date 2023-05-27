import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Constants from '../../Constants';
import ErrorPopup from '../../popView/ErrorPopup';
import SuccessPopup from '../../popView/SuccessPopup';

export default function BookAppointmentComponent() {
     const [password, setPassword] = useState("");
     const [doctor, setDoctor] = useState("");
     const [date, setDate] = useState("");
     const [reminder, setReminder] = useState("on");

     const [allDoctorList, setAllDoctorList] = useState([]);
     const [specializations, setSpecializations] = useState();
     const [specialization, setSpecialization] = useState('');

     const [notification, setNotification] = useState(false);
     const [showPopupComponent, setShowPopupComponent] = useState(true);

     let ignore = false;

     const loadSpecializationFromServer = () => {
          Axios.post(Constants.SERVER_IP + "allDoctorSpecialization", {
          }).then((response) => {
               setSpecializations(response.data.message);
          }).catch((error) => {
               console.log('error')
          });
     }

     const loadDoctorListFromServer = () => {
          Axios.post(Constants.SERVER_IP + "allSpecializedDoctorList", { 'specialization': specialization }, {
          }).then((response) => {
               setAllDoctorList(response.data.message);
          }).catch((error) => {
               console.log('error')
          });
     }

     useEffect(() => {
          if (!ignore) { loadSpecializationFromServer(); ignore = true; }

          if (specialization != '') { loadDoctorListFromServer(); }
     }, [specialization]);


     const bookAppointment = (e) => {
          setShowPopupComponent(true);
          e.preventDefault();


          if(password == '' || doctor == '' || date == '') {
               setNotification(<ErrorPopup message='Please all enter details' />)
               return;
          }


          const userInfo = JSON.parse(localStorage.getItem('userData'));
          let r;
          if (reminder == 'on') { r = true; }
          else { r = false; }

          Axios.post(Constants.SERVER_IP + "bookAppointment", {
               password: password,
               doctor: doctor,
               patient: userInfo.username,
               date: date,
               reminder: r

          }).then((response) => {
               if (response.data.message == 'Password does not match') {
                    setNotification(<ErrorPopup message='Password does not match' />)
                    setPassword('');
                    document.getElementById('password').value = '';
                    return;
               }
               else if (response.data.message == 'Booking successfully completed') {
                    setNotification(<SuccessPopup message='Booking successfully completed' />);
                    setAllDoctorList('');
                    setPassword('');
                    setDate('');
                    setDoctor('');
                    setSpecialization('');
                    setReminder('on');
                    document.getElementById("regForm").reset();

               } else {
                    setNotification(<ErrorPopup message='Failed to  book an appointment' />)
                    setAllDoctorList('');
                    setPassword('');
                    setDate('');
                    setDoctor('');
                    setSpecialization('');
                    setReminder('on');
                    document.getElementById("regForm").reset();
               }
          });
     }


     return (
          <div className="container">
               {showPopupComponent && notification}

               <div>
                    <p className='card-title text-center pb-0 fs-1'>Book an Appointment</p>
                    <p className='text-center pb-4'>Enter your password and appointment details to book an appointment</p>
               </div>

               <form id="regForm" className="row g-3 needs-validation" noValidate>


                    {/* <--- Input Specialist & Doctor's Name ---> */}
                    <div className="col-md-6">
                         <label htmlFor="gender" className="form-label">Choose Specialist</label>
                         <select className="form-control" id="gender" name='gender' onChange={(e) => { setShowPopupComponent(false); setSpecialization(e.target.value) }} required>
                              <option value=""></option>
                              {/* <option value="">Ophthalmologists</option>
                              <option value="">Cardiologists</option>
                              <option value="">Endocrinologists</option>
                              <option value="">Gastroenterologists</option> */}

                              {specializations && specializations.map((specialization) => (
                                   <option key={specialization.specialization} value={specialization.specialization}>
                                        {specialization.specialization}
                                   </option>

                              ))}
                         </select>
                    </div>
                    <div className="col-md-6">
                         <label htmlFor="gender" className="form-label">Choose A Doctor</label>
                         <select className="form-control" id="doctorName" name='gender' onChange={(e) => { setDoctor(e.target.value); setShowPopupComponent(false); }} required>
                              <option value=""></option>
                              {allDoctorList && allDoctorList.map((doctor) => (
                                   <option key={doctor.username} value={doctor.username}>
                                        {doctor.firstname + ' ' + doctor.lastname}
                                   </option>

                              ))}
                         </select>
                    </div>


                    {/* <--- Input Time and Date ---> */}
                    <div className="col-md-6">
                         <label htmlFor="photo" className="form-label">Select Time & Date</label>
                         <input type="date" name="photo" className="form-control" id="photo" onChange={(e) => { setDate(e.target.value); setShowPopupComponent(false); }} required />
                    </div>

                    <div className="col-md-6">
                         <label htmlFor="reminder" className="form-label">Set Reminder</label>
                         <select className="form-control" id="reminder" onChange={(e) => { setShowPopupComponent(false); setReminder(e.target.value) }} required>
                              <option value="on">On</option>
                              <option value="off">Off</option>
                         </select>
                    </div>


                    {/* <--- Input Password ---> */}
                    <div className="col-md-6">
                         <label htmlFor="password" className="form-label">Password</label>
                         <input type="password" name="password" className="form-control" id="password" onChange={(e) => { setPassword(e.target.value); setShowPopupComponent(false); }} required />
                    </div>


                    <div className="col-md-12">
                         <button className="btn btn-primary w-100" type="submit" onClick={bookAppointment}>Book an Appointment</button>
                    </div>
               </form>
          </div>
     )
}

