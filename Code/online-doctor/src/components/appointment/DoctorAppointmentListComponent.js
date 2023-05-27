import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Constants from '../../Constants';

export default function DoctorAppointmentListComponent(props) {
    const [allAppointments, setAllAppointments] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem('userData'));
    let ignore = false;

    const loadFromServer = () => {
        console.log('hello')
         Axios.post(Constants.SERVER_IP + "doctorAllAppointments", {doctor: userInfo.username}).then((response) => {
              setAllAppointments(response.data.message);
         }).catch((error) => {
              console.log('error')
         });
     }

    useEffect(() => {
         if (!ignore) {loadFromServer();}
         ignore = true;
     }, []);

    return (
        <>
            <div style={{padding: '20px'}}>
                {/* <button onClick={getAppointments}>Click</button> */}
                <div className="pagetitle">
                    <h1>Data Tables</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">AppointmentList</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}


                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{userInfo.firstname}'s Appointments Datatable</h5>

                        {/* <!-- Table with stripped rows --> */}
                        <table className="table datatable">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Appointment ID</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Patient Name</th>
                                    <th scope="col">Patient's Gender</th>
                                    <th scope="col">Patient's Email</th>
                                    <th scope="col">Patient's Profile</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allAppointments && allAppointments.map((appointment, index) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{appointment.appoinementID}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.patientName} </td>
                                        <td>{appointment.gender} </td>
                                        <td>{appointment.patientEmail} </td>
                                        <td>{appointment.patientID}</td>
                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                        {/* <!-- End Table with stripped rows --> */}

                    </div>
                </div>
            </div>
        </>
    )
}
