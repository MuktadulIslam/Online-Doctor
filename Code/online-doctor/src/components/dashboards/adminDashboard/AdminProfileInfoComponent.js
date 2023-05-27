import React, { useState, useEffect } from 'react'
import AdminProfileOverviewComponent from './AdminProfileOverviewComponent';
import  AdminEditInfoComponent from './AdminEditInfoComponent';
import AccountSettingsComponent from '../../userAccount/AccountSettingComponent';
import ChangePasswordComponent from '../../userAccount/ChangePasswordComponent';

export default function AdminProfileInfoComponent() {
    const userInfo = JSON.parse(localStorage.getItem('userData'));
    const [profileViewComponent, setProfileViewComponent] = useState(<AdminProfileOverviewComponent/>);

    return (
        <div style={{ padding: '20px' }}>

            <div className="pagetitle">
                <h1>Admin Profile</h1>
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
                                <img src={`data:image/png;base64, ${userInfo.photo}`} alt="Profile" />
                                <h2>Admin</h2>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-8">

                        <div className="card">
                            <div className="card-body pt-3">
                                {/* <!-- Bordered Tabs --> */}
                                <ul className="nav nav-tabs nav-tabs-bordered">

                                    <li className="nav-item">
                                        <button className="nav-link active" data-bs-toggle="tab" onClick={() => { setProfileViewComponent(<AdminProfileOverviewComponent/>) }}>Overview</button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" onClick={() => { setProfileViewComponent(< AdminEditInfoComponent/>) }}> Edit Profile</button>
                                    </li>

                                    <li className="nav-item">
                                        <button className="nav-link" data-bs-toggle="tab" onClick={() => { setProfileViewComponent(<AccountSettingsComponent/>) }}>Settings</button>
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
