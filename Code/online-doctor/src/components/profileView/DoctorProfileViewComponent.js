import React from 'react';

export default function DoctorProfileViewComponent(props) {
    const userInfo = props.userInfo;
    return (
        <div style={{ padding: '20px' }}>

            <div className="pagetitle">
                <h1>Doctor's Profile</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">AllDoctorList/</a></li>
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
                                <h3>{userInfo.specialization}</h3>
                                <div className="social-links mt-2">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-xl-8">

                        <div className="card">
                            <div className="card-body pt-3">
                                {/* <!-- Bordered Tabs --> */}
                                <div className="nav nav-tabs nav-tabs-bordered">

                                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                        <h5 className="card-title">Profile Details</h5>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 label ">Full Name</div>
                                            <div className="col-lg-9 col-md-4">{userInfo.firstname + ' ' + userInfo.lastname}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 label">User Name</div>
                                            <div className="col-lg-9 col-md-4">{userInfo.username}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 label">Email</div>
                                            <div className="col-lg-9 col-md-4">{userInfo.email}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 label">Phone Number</div>
                                            <div className="col-lg-9 col-md-4">{userInfo.phonenumber}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 label">Gender</div>
                                            <div className="col-lg-9 col-md-4">{userInfo.gender}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 label">Age</div>
                                            <div className="col-lg-9 col-md-4">{userInfo.age}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 label">Doctor Registration Number</div>
                                            <div className="col-lg-9 col-md-4">{userInfo.doctorRegNumber}</div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 label">Specialization</div>
                                            <div className="col-lg-9 col-md-4">{userInfo.specialization}</div>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary">Save Changes</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
