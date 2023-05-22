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
    const [gender, setGender] = useState(userInfo.gender);
    const [age, setAge] = useState(userInfo.age);
    const [fathername, setFathername] = useState(userInfo.fathername);
    const [mothername, setMothername] = useState(userInfo.mothername);
    const [photo, setPhoto] = useState(null);

    const [notification, setNotification] = useState(false);
    const [showPopupComponent, setShowPopupComponent] = useState(true);

    const uploadNewImage = () => {
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
        setImageSrc(null);
        setPhoto(null);
    }



    const updatePatientProfile = (event) => {
        event.preventDefault();
        // setShowPopupComponent(true);
   
        const formData = new FormData();
        formData.append('username', userInfo.username);
        // Adding changed data in formdata to store update in Database
        if(userInfo.firstname !=firstname) {
            formData.append('firstName', firstname);
        }
        if(userInfo.lastname != lastname) {
            formData.append('lastName', lastname);
        }
        if(userInfo.age != age) {
            formData.append('age', age);
        }
        if(userInfo.gender != gender) {
            formData.append('gender', gender);
        }
        if(userInfo.email != email) {
            formData.append('email', email);
        }
        if(userInfo.fathername != fathername) {
            formData.append('fatherName', fathername);
        }
        if(userInfo.mothername != mothername){
            formData.append('motherName', mothername);
        }
        if(photo != null){
            formData.append('photo', photo);
            formData.append('oldPhoto', userInfo.photopath);
        }

        Axios.post(Constants.SERVER_IP + "updatePatientProfile", formData).then((response) => {
             if(response.data.message){
                  console.log(response.data.message);
                  if(response.data.message.startsWith(Constants.DUPLICATE_ERROR)) {
                       setNotification(<ErrorPopup message='Username must be Unique'/>)
                  }
                  else {
                       setNotification(<ErrorPopup message='Failed to Create an Account'/>)
                  }
             
             }else{
                  setNotification(<SuccessPopup message='Your account has been successfully  created. Now you login in your profile '/>);
             }
        }).catch((error) => {
             if(error.message.startsWith(Constants.NETWORK_ERROR)) {
                  setNotification(<ErrorPopup message='Failed to connect with Backend Database Server'/>)
             }
             else {
                  setNotification(<ErrorPopup message='Failed to connect with Backend Database Server for Unknown reason'/>)
             }
        });

        // setFirstName('');
        // setLastName('');
        // setAge(0);
        // setGender('');
        // setEmail('');
        // setPhoneNumber('');
        // setFatherName('');
        // setMotherName('');
        // setPhoto('');
        // setUsername('');
        // setPassword('');
        // setConfirmPassword('');
        // document.getElementById("regForm").reset();
   }

    // useEffect(() => {
    //     // if(photo){
    //         console.log(photo)
    //         // console.log('hello');
    //     // }
    // },[imageSrc]);

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
                            <input name="fullName" type="text" className="form-control" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Last Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="fullName" type="text" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                    </div>



                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Email</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Gender</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Age</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Father Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={fathername} onChange={(e) => setFathername(e.target.value)} />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="company" className="col-md-4 col-lg-3 col-form-label">Mother Name</label>
                        <div className="col-md-8 col-lg-9">
                            <input name="company" type="text" className="form-control" value={mothername} onChange={(e) => setMothername(e.target.value)} />
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