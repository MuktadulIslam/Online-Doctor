import React, { useEffect, useState } from 'react'
import Constants from '../../../Constants';
import SuccessPopup from '../../../popView/SuccessPopup';
import ErrorPopup from '../../../popView/ErrorPopup';
import Axios from 'axios';

export default function AdminEditInfoComponent(props) {
    const userInfo = JSON.parse(localStorage.getItem('userData'));

    const [email, setEmail] = useState(userInfo.email);
    const [phoneNumber, setPhoneNumber] = useState(userInfo.phonenumber);
    const [password, setPassword] = useState(null);

    const [notification, setNotification] = useState(false);
    const [showPopupComponent, setShowPopupComponent] = useState(true);



    const updatePatientProfile = (event) => {
        event.preventDefault();
        setShowPopupComponent(true);

        let changed = false;

        const formData = new FormData();
        formData.append('username', userInfo.username);
        formData.append('user', userInfo.user);
        formData.append('oldPassword', password);
        // Adding changed data in formdata to store update in Database
        if (userInfo.email != email) {
            formData.append('email', email);
            changed = true;
        }
        if (userInfo.phonenumber != phoneNumber) {
            formData.append('phonenumber', phoneNumber);
            changed = true;
        }

        if (!changed) {
            setNotification(<ErrorPopup message='First you need to change some of your information' />);
            return;
        }

        Axios.post(Constants.SERVER_IP + "updateProfile", formData).then((response) => {
            if (response.data == 'Successfully Updated') {
                setNotification(<SuccessPopup message='Your account has been successfully Updated' />);
            }
            else if (response.data == 'Old password does not match') {
                setNotification(<ErrorPopup message='Password does not match' />)
            }
            else {
                setNotification(<ErrorPopup message='Failed to Update Your Account' />)
            }
        }).catch((error) => {
            if (error.message.startsWith(Constants.NETWORK_ERROR)) {
                setNotification(<ErrorPopup message='Failed to connect with Backend Database Server' />)
            }
            else {
                setNotification(<ErrorPopup message='Failed to connect with Backend Database Server for Unknown reason' />)
            }
        });

        document.getElementById('password').value = '';
        setPassword('');
    }


    return (
        <>
            {showPopupComponent && notification}

            <div className="tab-pane profile-edit pt-3">
                <form onSubmit={updatePatientProfile}>
                    <div className="row mb-3">
                        <label htmlFor="email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="email" type="text" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value); setShowPopupComponent(false); setNotification(''); }} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="phonenumber" className="col-md-4 col-lg-3 col-form-label">Phone Number</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="phonenumber" type="text" className="form-control" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value); setShowPopupComponent(false); setNotification(''); }} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="password" className="col-md-4 col-lg-3 col-form-label">Password</label>
                        <div className="col-md-8 col-lg-9">
                            <input required type="password" name="password" id='password' className="form-control" onChange={(e) => { setPassword(e.target.value); setShowPopupComponent(false); setNotification(''); }} />
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </div>
                </form>

            </div>
        </>
    )
} 