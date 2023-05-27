import React, { useEffect, useState } from 'react'
import Constants from '../../../Constants';
import SuccessPopup from '../../../popView/SuccessPopup';
import ErrorPopup from '../../../popView/ErrorPopup';
import Axios from 'axios';

export default function PatientEditInfoComponent(props) {
    const userInfo = JSON.parse(localStorage.getItem('userData'));

    const [imageSrc, setImageSrc] = useState(`data:image/png;base64, ${userInfo.photo}`);
    const [firstname, setFirstname] = useState(userInfo.firstname);
    const [lastname, setLastname] = useState(userInfo.lastname);
    const [email, setEmail] = useState(userInfo.email);
    const [phoneNumber, setPhoneNumber] = useState(userInfo.phonenumber);
    const [gender, setGender] = useState(userInfo.gender);
    const [age, setAge] = useState(userInfo.age);
    const [fathername, setFathername] = useState(userInfo.fathername);
    const [mothername, setMothername] = useState(userInfo.mothername);
    const [photo, setPhoto] = useState(null);
    const [password, setPassword] = useState(null);

    const [notification, setNotification] = useState(false);
    const [showPopupComponent, setShowPopupComponent] = useState(true);

    
    const uploadNewImage = () => {
        setShowPopupComponent(false); setNotification('');

        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (event) => {
            const file = event.target.files[0];
            setPhoto(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImageSrc(reader.result);
            };

            reader.readAsDataURL(file);
        };
        input.click();
    };

    const removeImage = () => {
        if(userInfo.photopath === "defaultProfilePic.png") {
            setShowPopupComponent(true);
            setNotification(<ErrorPopup message='There is no profile photo to remove' />);
            return;
        }
        setShowPopupComponent(false); setNotification('');
        setImageSrc(null);
        setPhoto('Remove Photo');
    }



    const updatePatientProfile = (event) => {
        event.preventDefault();
        setShowPopupComponent(true);

        let changed = false;

        const formData = new FormData();
        formData.append('username', userInfo.username);
        formData.append('user', userInfo.user);
        formData.append('oldPassword', password);
        // Adding changed data in formdata to store update in Database
        if (userInfo.firstname != firstname) {
            formData.append('firstName', firstname);
            changed = true;
        }
        if (userInfo.lastname != lastname) {
            formData.append('lastName', lastname);
            changed = true;
        }
        if (userInfo.age != age) {
            formData.append('age', age);
            changed = true;
        }
        if (userInfo.gender != gender) {
            formData.append('gender', gender);
            changed = true;
        }
        if (userInfo.email != email) {
            formData.append('email', email);
            changed = true;
        }
        if (userInfo.phonenumber != phoneNumber) {
            formData.append('phonenumber', phoneNumber);
            changed = true;
        }
        if (userInfo.fathername != fathername) {
            formData.append('fatherName', fathername);
            changed = true;
        }
        if (userInfo.mothername != mothername) {
            formData.append('motherName', mothername);
            changed = true;
        }
    
        if(photo == 'Remove Photo'){
            formData.append('removePhoto', true);
            formData.append('oldPhoto', userInfo.photopath);
            changed = true;
        }
        else if (photo != null) {
            formData.append('photo', photo);
            formData.append('oldPhoto', userInfo.photopath);
            changed = true;
        }

        if(!changed) {
            setNotification(<ErrorPopup message='First you need to change some of your information' />);
            return;
        }

        Axios.post(Constants.SERVER_IP + "updateProfile", formData).then((response) => {
            if (response.data == 'Successfully Updated') {
                setNotification(<SuccessPopup message='Your account has been successfully Updated' />);
            }
            else if(response.data == 'Old password does not match'){
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

        document.getElementById('password').value='';
        setPassword('');
    }


    return (
        <>
            {showPopupComponent && notification}

            <div className="tab-pane profile-edit pt-3">
                <form onSubmit={updatePatientProfile}>
                    <div className="row mb-3">
                        <label htmlFor="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                        <div className="col-md-8 col-lg-9">
                            <img src={imageSrc} alt="Profile" />
                            <div className="pt-2">
                                <div className="btn btn-primary btn-sm" title="Upload new profile image" style={{ marginRight: '10px' }} onClick={uploadNewImage}><i className="bi bi-upload"></i></div>
                                <div className="btn btn-danger btn-sm" title="Remove my profile image" onClick={removeImage}><i className="bi bi-trash"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">First Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="fullName" type="text" className="form-control" value={firstname} onChange={(e) => { setFirstname(e.target.value); setShowPopupComponent(false); setNotification(''); }} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Last Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="fullName" type="text" className="form-control" value={lastname} onChange={(e) => { setLastname(e.target.value); setShowPopupComponent(false); setNotification(''); }} />
                        </div>
                    </div>



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
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Gender</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={gender} onChange={(e) => { setGender(e.target.value); setShowPopupComponent(false); setNotification(''); }} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Age</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={age} onChange={(e) => { setAge(e.target.value); setShowPopupComponent(false); setNotification(''); }} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Father Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={fathername} onChange={(e) => { setFathername(e.target.value); setShowPopupComponent(false); setNotification(''); }} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Mother Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={mothername} onChange={(e) => { setMothername(e.target.value); setShowPopupComponent(false); setNotification(''); }} />
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