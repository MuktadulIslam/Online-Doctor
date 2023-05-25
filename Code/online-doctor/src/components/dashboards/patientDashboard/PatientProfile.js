import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Constants from '../../../Constants';
import Axios from 'axios';

import DeleteAccountComponent from '../../userAccount/DeleteAccountComponent';
import MakeComplain from '../../complain_feedback/MakeComplainComponent';
import BookAppointmentComponent from '../../appointment/BookAppointmentComponent';
import PatientProfileInfoComponent from '../patientDashboard/PatientProfileInfoComponent';
import PatientAppointmentHistoryComponent from '../patientDashboard/PatientAppointmentHistoryComponent';
import DoctorListComponent from '../../allDoctorList/DoctorListComponent';
import ContactUsBackgroundComponent from '../../contactUs/ContactUsBackgroundComponent';
import FooterComponent from '../../FooterComponent';
import PredictionComponent from '../../prediction/PredictionComponent';

export default function PatientProfile() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [mainBackground, setMainBackground] = useState('');
    let ignore = false;

    const loadFromServer = () => {
        const userInfo = JSON.parse(localStorage.getItem('userData'));
        Axios.post(Constants.SERVER_IP + "getAccountInfo", {
            user: userInfo.user,
            username: userInfo.username,
            password: userInfo.password,
        }).then((response) => {
            if (response.data != 'Internal server error') {
                localStorage.setItem('userData', JSON.stringify(response.data));
                console.log(response.data);
                setMainBackground(<PatientProfileInfoComponent/>);
            }
        })
    }

    useEffect(() => {
        if (!ignore) {loadFromServer();}
        ignore = true;
    }, []);

    return (
        <nav className={sidebarVisible ? 'toggle-sidebar' : ''}>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span >Online Doctor</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={()=> setSidebarVisible(!sidebarVisible)}></i>
                </div>
            </header>
            {/* <!-- End Header --> */}



            {/* <!-- ======= Sidebar ======= --> */}
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<PatientProfileInfoComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-person-circle"></i>
                            <span>Profile</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<PredictionComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-clipboard-plus"></i>
                            <span>Predict Disease</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<PatientAppointmentHistoryComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-file-earmark-text"></i>
                            <span>History</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<DoctorListComponent pageName='PatientProfile'/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-journal-text"></i>
                            <span>All Doctors List</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<BookAppointmentComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-bookmark-plus"></i>
                            <span>Book Appointment</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<MakeComplain />); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-file-earmark-medical"></i>
                            <span>Make Complain</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<DeleteAccountComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-trash"></i>
                            <span>Delete Account</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<ContactUsBackgroundComponent />); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-envelope"></i>
                            <span>Contact Us</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/">
                            <i className="bi bi-arrow-right-square"></i>
                            <span>Log Out</span>
                        </Link>
                    </li>

                </ul>

                <FooterComponent/>
            </aside>
            {/* <!-- End Sidebar--> */}




            {/* <!-- ======= Main ======= --> */}
            <main id="main" className="main">
                {mainBackground}
            </main>
            {/* <!-- End #main --> */}

        </nav>
    )
}