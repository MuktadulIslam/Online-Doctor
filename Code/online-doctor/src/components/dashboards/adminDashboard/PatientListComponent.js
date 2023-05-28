import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Constants from '../../../Constants';

export default function PatientListComponent(props) {
    const [allPatientList, setAllPatientList] = useState([]);

    let ignore = false;


    const viewDoctorProfile = (patientUsername) => {
        Axios.post(Constants.SERVER_IP + "getAccountInfo", {
            user: 'patients',
            username: patientUsername,
        }).then((response) => {
            if (response.data != 'Internal server error') {
                console.log(response.data);
            }
        })

    }

    const loadFromServer = () => {
        Axios.post(Constants.SERVER_IP + "allPatientList", {
        }).then((response) => {
            console.log(response.data.message)
            setAllPatientList(response.data.message);
        }).catch((error) => {
            console.log('error')
        });
    }

    useEffect(() => {
        if (!ignore) { loadFromServer(); }
        ignore = true;
    }, []);

    return (
        <>
            <div style={{ padding: '20px' }}>

                {/* <button onClick={getPatientList}>Click</button> */}
                <div className="pagetitle">
                    <h1>Data Table</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">AdminProfile</li>
                            <li className="breadcrumb-item active">AllRegisteredPatientList</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}


                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Doctors Datatable</h5>

                        {/* <!-- Table with stripped rows --> */}
                        <table className="table datatable">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Photo</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">FatherName</th>
                                    <th scope="col">MotherName</th>
                                    <th scope="col">Profile</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allPatientList.map((patientInfo, index) => (
                                    <tr key={index}>
                                        <th>{index + 1} </th>
                                        <td><img src={`data:image/png;base64, ${patientInfo.photo}`} alt="Doctor's Photo" style={{ width: '50px', height: 'auto' }} /></td>
                                        <td>{patientInfo.firstname + ' ' + patientInfo.lastname} </td>
                                        <td>{patientInfo.gender} </td>
                                        <td>{patientInfo.age} </td>
                                        <td>{patientInfo.email} </td>
                                        <td>{patientInfo.fathername} </td>
                                        <td>{patientInfo.mothername} </td>
                                        <td><button className='btn' style={{ color: 'blue' }} onClick={(e) => { viewDoctorProfile(patientInfo.username) }}>{patientInfo.username}</button></td>
                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                        {/* <!-- End Table with stripped rows --> */}

                    </div>
                </div>
            </div>
        </>
    )
}
