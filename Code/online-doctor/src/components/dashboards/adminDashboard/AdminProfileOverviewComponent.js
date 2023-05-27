import React from 'react'

export default function DoctorProfileOverviewComponent() {
    const userInfo = JSON.parse(localStorage.getItem('userData'))

    return (
        <div className="tab-pane fade show active profile-overview" id="profile-overview">
            <h5 className="card-title">Profile Details</h5>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">User Name</div>
                <div className="col-lg-9 col-md-8">{userInfo.username}</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Email</div>
                <div className="col-lg-9 col-md-8">{userInfo.email}</div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-4 label">Phone Number</div>
                <div className="col-lg-9 col-md-8">{userInfo.phonenumber}</div>
            </div>
        </div>
    )
}
