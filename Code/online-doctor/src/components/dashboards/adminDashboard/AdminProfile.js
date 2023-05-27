import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Constants from '../../../Constants';
import Axios from 'axios';

import AdminProfileInfoComponent from './AdminProfileInfoComponent';
import RemoveUserAccountComponent from './RemoveUserAccountComponent';
import ComplainBoxComponent from './ComplainBoxComponent';
import UpdateDiseaseListComponent from './UpdateDiseaseListComponent';
import PatientListComponent from './PatientListComponent';
import DoctorListComponent from '../../allDoctorList/DoctorListComponent';
import FooterComponent from '../../FooterComponent';

export default function PatientProfile(props) {

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
                setMainBackground(<AdminProfileInfoComponent/>);
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
                {/* <!-- End Logo --> */}

            </header>
            {/* <!-- End Header --> */}



            {/* <!-- ======= Sidebar ======= --> */}
            <aside id="sidebar" className="sidebar">

                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link collapsed"  onClick={() => {setMainBackground(<AdminProfileInfoComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-person-circle"></i>
                            <span>Profile</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<RemoveUserAccountComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-x-square"></i>
                            <span>Remove User Account</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<ComplainBoxComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-box-seam"></i>
                            <span>Complain Box</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<UpdateDiseaseListComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-box-arrow-up"></i>
                            <span>Update Disease List</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<PatientListComponent/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-journal-text"></i>
                            <span>All Patient List</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => {setMainBackground(<DoctorListComponent pageName='AdminProfile'/>); setSidebarVisible(!sidebarVisible);}}>
                            <i className="bi bi-journal-text"></i>
                            <span>All Doctors List</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" to='/'>
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