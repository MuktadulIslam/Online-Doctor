import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import DeleteAccountComponent from '../../userAccount/DeleteAccountComponent';
import MakeComplain from '../../complain_feedback/MakeComplainComponent';
import BookAppointmentComponent from '../../appointment/BookAppointmentComponent';
import PatientProfileInfoComponent from '../patientDashboard/PatientProfileInfoComponent';
import PatientAppointmentHistoryComponent from '../patientDashboard/PatientAppointmentHistoryComponent';
import DoctorListComponent from '../../allDoctorList/DoctorListComponent';
import ContactUsBackgroundComponent from '../../contactUs/ContactUsBackgroundComponent';
import FooterComponent from '../../FooterComponent';
import PredictionComponent from '../../prediction/PredictionComponent';

export default function PatientProfile(props) {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [mainBackground, setMainBackground] = useState(<PatientProfileInfoComponent/>);

    const sidebarToggler = () => {
        setSidebarVisible(!sidebarVisible);
    };

    useEffect(() => {
        // console.log('hello')
    }, [mainBackground]);

    return (
        <nav className={sidebarVisible ? 'toggle-sidebar' : ''}>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="" className="logo d-flex align-items-center">
                        <img src="assets/img/logo.png" alt="" />
                        <span >Online Doctor</span>
                    </a>
                    <i className="bi bi-list toggle-sidebar-btn" onClick={sidebarToggler}></i>
                </div>
            </header>
            {/* <!-- End Header --> */}



            {/* <!-- ======= Sidebar ======= --> */}
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<PatientProfileInfoComponent/>)}>
                            <i className="bi bi-person-circle"></i>
                            <span>Profile</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<PredictionComponent/>)}>
                            <i className="bi bi-clipboard-plus"></i>
                            <span>Predict Disease</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<PatientAppointmentHistoryComponent/>)}>
                            <i className="bi bi-file-earmark-text"></i>
                            <span>History</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<DoctorListComponent pageName='PatientProfile'/>)}>
                            <i className="bi bi-journal-text"></i>
                            <span>All Doctors List</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<BookAppointmentComponent/>)}>
                            <i className="bi bi-bookmark-plus"></i>
                            <span>Book Appointment</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<MakeComplain />)}>
                            <i className="bi bi-file-earmark-medical"></i>
                            <span>Make Complain</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<DeleteAccountComponent/>)}>
                            <i className="bi bi-trash"></i>
                            <span>Delete Account</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<ContactUsBackgroundComponent />)}>
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