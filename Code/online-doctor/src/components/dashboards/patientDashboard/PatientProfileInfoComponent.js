import React, { useState, useEffect } from 'react'
import PatientProfileOverviewComponent from './PatientProfileOverviewComponent';
import PatientEditInfoComponent from './PatientEditInfoComponent';
import PatientsSettingsComponent from './PatientsSettingsComponent';
import ChangePasswordComponent from '../../userAccount/ChangePasswordComponent';

export default function PatientProfileInfoComponent() {
    const userInfo = JSON.parse(localStorage.getItem('userData'));
    const [profileViewComponent, setProfileViewComponent] = useState(<PatientProfileOverviewComponent/>);
    useEffect(() => {
    }, [profileViewComponent]);

    return (
        <div style={{ padding: '20px' }}>

            <div className="pagetitle">
                <h1>Patient Profile</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Profile</li>
                    </ol>
                </nav>
            </div>
            {/* <!-- End Page Title --> */}

            <section className="section profile">
                <div className="row">
                    <div className="col-xl-4">

                        <div className="card">
                            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                {/* <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" /> */}
                                <img src={`data:image/png;base64, ${userInfo.photo}`} alt="Profile" />
                                <h2>{userInfo.firstname + ' ' + userInfo.lastname}</h2>
                                {/* <h3>Web Designer</h3>
                                <div className="social-links mt-2">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div> */}
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-8">

                        <div className="card">
                            <div className="card-body pt-3">
                                {/* <!-- Bordered Tabs --> */}
                                <ul className="nav nav-tabs nav-tabs-bordered">

                                    <li className="nav-item">
                                        <button className="nav-link active" data-bs-toggle="tab" onClick={() => { setProfileViewComponent(<PatientProfileOverviewComponent/>) }}>Overview</button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" onClick={() => { setProfileViewComponent(<PatientEditInfoComponent/>) }}> Edit Profile</button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" onClick={() => { setProfileViewComponent(<PatientsSettingsComponent/>) }}>Settings</button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" onClick={() => { setProfileViewComponent(<ChangePasswordComponent/>) }}>Change Password</button>
                                    </li>

                                </ul>
                                {profileViewComponent}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
