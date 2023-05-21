import React from 'react'

export default function PatientEditInfoComponent(props) {
    const userInfo = props.userInfo;
    console.log(userInfo);
    return (
        <>
            <div className="tab-pane profile-edit pt-3">
                {/* <h1>Hiiii</h1> */}

                {/* <!-- Profile Edit Form --> */}
                <form>
                    <div className="row mb-3">
                        <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                        <div className="col-md-8 col-lg-9">
                            <img src="assets/img/profile-img.jpg" alt="Profile" />
                            <div className="pt-2">
                                <a href="#" className="btn btn-primary btn-sm" title="Upload new profile image" style={{marginRight: '10px'}}><i className="bi bi-upload"></i></a>
                                <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">First Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="fullName" type="text" className="form-control" value= {userInfo.firstname}/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Last Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="fullName" type="text" className="form-control" value= {userInfo.lastname}/>
                        </div>
                    </div>

                    

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Email</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={userInfo.email}/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Gender</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={userInfo.gender}/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Age</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={userInfo.age}/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Father Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={userInfo.fathername}/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Mother Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={userInfo.mothername}/>
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                </form>
                {/* <!-- End Profile Edit Form --> */}

            </div>
        </>
    )
}
