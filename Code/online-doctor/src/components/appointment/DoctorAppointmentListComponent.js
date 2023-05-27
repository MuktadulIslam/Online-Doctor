import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Constants from '../../Constants';
import ErrorPopup from '../../popView/ErrorPopup';
import SuccessPopup from '../../popView/SuccessPopup';

export default function DoctorAppointmentListComponent() {
    const [allAppointments, setAllAppointments] = useState([]);
    const [notification, setNotification] = useState(false);
    const [showPopupComponent, setShowPopupComponent] = useState(true);

    const userInfo = JSON.parse(localStorage.getItem('userData'));
    let ignore = false;

    const cancelAppointment = (appointmentID) => {
        setShowPopupComponent(true);

        const password = window.prompt("Do you want to cancel this appointment?\nIf you want then enter your password for conformation", "password");

        if(password == null) return;

        Axios.post(Constants.SERVER_IP + "cancelAppointment", {
            username: userInfo.username,
            user: userInfo.user,
            password: password,
            appointmentID: appointmentID
        }).then((response) => {
            if (response.data.message == 'Password does not match') {
                setNotification(<ErrorPopup message='Password does not match' />)
            }
            else if (response.data.message == 'Cancelation successfully completed') {
                loadFromServer();
                setNotification(<SuccessPopup message='Cancelation successfully completed' />);
            }
            else {
                setNotification(<ErrorPopup message='Failed to cancel the appointment for unknown reason' />)
            }
        }).catch((error) => {
            console.log('error')
        });
    }

    const loadFromServer = () => {
        Axios.post(Constants.SERVER_IP + "doctorAllAppointments", { doctor: userInfo.username }).then((response) => {
            setAllAppointments(response.data.message);
        }).catch((error) => {
            console.log('error')
        });
    }

    useEffect(() => {
        if (!ignore) { loadFromServer(); }
        ignore = true;
    }, []);

    return (
        <>
            <div style={{ padding: '20px' }}>
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
                                    <th scope="col">Cancel Appointment</th>
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
                                        <td><button className="btn btn-danger" onClick={(e) => cancelAppointment(appointment.appoinementID)}>Cancel</button></td>
                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                        {/* <!-- End Table with stripped rows --> */}

                    </div>
                    {showPopupComponent && notification}
                </div>
            </div>
        </>
    )
}
