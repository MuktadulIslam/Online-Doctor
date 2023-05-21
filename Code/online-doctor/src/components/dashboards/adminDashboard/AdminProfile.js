import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import AdminProfileInfoComponent from './AdminProfileInfoComponent';
import AdminEditInfoComponent from './AdminEditInfoComponent';
import RemoveUserAccountComponent from './RemoveUserAccountComponent';
import ComplainBoxComponent from './ComplainBoxComponent';
import UpdateDiseaseListComponent from './UpdateDiseaseListComponent';
import PatientListComponent from './PatientListComponent';
import DoctorListComponent from '../../allDoctorList/DoctorListComponent';
import FooterComponent from '../../FooterComponent';

export default function PatientProfile(props) {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [mainBackground, setMainBackground] = useState(<AdminProfileInfoComponent />);

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
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<AdminProfileInfoComponent />)}>
                            <i className="bi bi-person-circle"></i>
                            <span>Profile</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<RemoveUserAccountComponent/>)}>
                            <i className="bi bi-x-square"></i>
                            <span>Remove User Account</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<ComplainBoxComponent/>)}>
                            <i className="bi bi-box-seam"></i>
                            <span>Complain Box</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<UpdateDiseaseListComponent/>)}>
                            <i className="bi bi-box-arrow-up"></i>
                            <span>Update Disease List</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<PatientListComponent/>)}>
                            <i className="bi bi-journal-text"></i>
                            <span>All Patient List</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link collapsed" onClick={() => setMainBackground(<DoctorListComponent pageName='AdminProfile'/>)}>
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