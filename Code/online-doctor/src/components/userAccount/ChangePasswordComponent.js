import React, { useState } from 'react'
import Axios from 'axios';
import Constants from '../../Constants';
import ErrorPopup from '../../popView/ErrorPopup';
import SuccessPopup from '../../popView/SuccessPopup'

export default function ChangePasswordComponent() {
    const userInfo = JSON.parse(localStorage.getItem('userData'));

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [notification, setNotification] = useState(false);
    const [showPopupComponent, setShowPopupComponent] = useState(true);

    const changePassword = (event) => {
        event.preventDefault();
        setShowPopupComponent(true);

        if (newPassword !== confirmPassword) {
            setNotification(<ErrorPopup message="Password and Confirm Password Doesn't match!" />)
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
            setNewPassword('');
            setConfirmPassword('');
            return;
        }

        const formData = new FormData();
        formData.append('username', userInfo.username);
        formData.append('newPassword', newPassword);
        formData.append('oldPassword', oldPassword);
        formData.append('user', userInfo.user);

        const username = formData.get('newPassword');
        console.log(username);

        Axios.post(Constants.SERVER_IP + "updateProfile", formData).then((response) => {
            console.log(response.data.message);
            if (response.data == 'Old password does not match') {
                setNotification(<ErrorPopup message='Old password does not match' />);
            }
            else if (response.data == 'Successfully Updated') {
                setNotification(<SuccessPopup message='Your passwor has been successfully Updated' />);
            }
            else {
                // console.log(response.data);
                setNotification(<ErrorPopup message='Failed to Update Your Password' />)
            }
        }).catch((error) => {
            if (error.message.startsWith(Constants.NETWORK_ERROR)) {
                setNotification(<ErrorPopup message='Failed to connect with Backend Database Server' />)
            }
            else {
                setNotification(<ErrorPopup message='Failed to connect with Backend Database Server for Unknown reason' />)
            }
        });
    }

    return (
        <div className="tab-pane pt-3" id="profile-change-password">
            {/* For popup */}
            {showPopupComponent && notification}
            <form>
                <div className="row mb-3">
                    <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                    <div className="col-md-8 col-lg-9">
                        <input required type="password" className="form-control" id="currentPassword" onChange={(e) => { setOldPassword(e.target.value); setNotification(''); }} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                    <div className="col-md-8 col-lg-9">
                        <input required type="password" className="form-control" id="newPassword" onChange={(e) => { setNewPassword(e.target.value); setNotification(''); }} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="confirmPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                    <div className="col-md-8 col-lg-9">
                        <input required type="password" className="form-control" id="confirmPassword" onChange={(e) => { setConfirmPassword(e.target.value); setNotification(''); }} />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary" onClick={changePassword}>Change Password</button>
                </div>
            </form>

        </div>
    )
}
