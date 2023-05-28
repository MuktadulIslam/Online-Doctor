import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Constants from '../../Constants';

export default function DoctorListComponent(props) {
    const [allDoctorList, setAllDoctorList] = useState([]);

    let ignore = false;


    const viewDoctorProfile = (DoctorUsername) => {
        Axios.post(Constants.SERVER_IP + "getAccountInfo", {
            user: 'doctors',
            username: DoctorUsername,
        }).then((response) => {
            if (response.data != 'Internal server error') {
                console.log(response.data);
            }
        })

    }

    const loadFromServer = () => {
        Axios.post(Constants.SERVER_IP + "allDoctorList", {
        }).then((response) => {
            setAllDoctorList(response.data.message);
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

                {/* <button onClick={getDoctorList}>Click</button> */}
                <div className="pagetitle">
                    <h1>Data Table</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">{props.pageName}</li>
                            <li className="breadcrumb-item active">AllRegisteredDoctorList</li>
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
                                    <th scope="col">Specialization</th>
                                    <th scope="col">Profile</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allDoctorList.map((doctorInfo, index) => (
                                    <tr key={index}>
                                        <th>{index + 1} </th>
                                        <td><img src={`data:image/png;base64, ${doctorInfo.photo}`} alt="Doctor's Photo" style={{ width: '50px', height: 'auto' }} /></td>
                                        <td>{doctorInfo.firstname + ' ' + doctorInfo.lastname} </td>
                                        <td>{doctorInfo.gender} </td>
                                        <td>{doctorInfo.age} </td>
                                        <td>{doctorInfo.specialization} </td>
                                        <td><button className='btn' style={{ color: 'blue' }} onClick={(e) => { viewDoctorProfile(doctorInfo.username) }}>{doctorInfo.username}</button></td>
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
