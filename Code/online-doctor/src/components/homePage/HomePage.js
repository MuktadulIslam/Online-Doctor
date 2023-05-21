import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import HomePageBackgroundComponent from './HomePageBackgroundComponent';
import DoctorRegistrationComponent from '../registration/DoctorRegistrationComponent';
import PatientRegistrationComponent from '../registration/PatientRegistrationComponent';
import LoginBackgroundComponent from '../login/LoginBackgroundComponent';
import ForgetPasswordBackgroundComponent from '../forgetPassword/ForgetPasswordBackgroundComponent';
import FooterComponent from '../FooterComponent';
import PredictionComponent from '../prediction/PredictionComponent';
import DoctorListComponent from '../allDoctorList/DoctorListComponent';
import RestoreUserAccountComponent from '../userAccount/RestoreUserAccountComponent';
import ContactUsBackgroundComponent from '../contactUs/ContactUsBackgroundComponent';

export default function HomePage() {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [mainBackground, setMainBackground] = useState(<HomePageBackgroundComponent />);

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
                {/* <!-- End Logo --> */}

            </header>
            {/* <!-- End Header --> */}



            {/* <!-- ======= Sidebar ======= --> */}
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<DoctorRegistrationComponent/>)}>
                            <i className="bi bi-person-plus"></i>
                            <span>Register As a Doctor</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<PatientRegistrationComponent/>)}>
                            <i className="bi bi-person-plus"></i>
                            <span>Register As a Patient</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<LoginBackgroundComponent/>)}>
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span>Login</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<ForgetPasswordBackgroundComponent/>)}>
                            <i className="bi bi-question-octagon"></i>
                            <span>Forget Password</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<PredictionComponent/>)}>
                            <i className="bi bi-clipboard-plus"></i>
                            <span>Predict Disease</span>
                        </Link>
                    </li>
                    {/* <!-- End "Predict Disease" Nav --> */}


                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<DoctorListComponent pageName='Home'/>)}>
                            <i className="bi bi-journal-text"></i>
                            <span>All Doctors List</span>
                        </Link>
                    </li>
                    {/* <!-- End "See All Doctor" List Nav --> */}

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<RestoreUserAccountComponent/>)}>
                            <i className="bi bi-arrow-counterclockwise"></i>
                            <span>Restore User Account</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<ContactUsBackgroundComponent/>)}>
                            <i className="bi bi-envelope"></i>
                            <span>Contact Us</span>
                        </Link>
                    </li>

                </ul>

                <FooterComponent />
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
