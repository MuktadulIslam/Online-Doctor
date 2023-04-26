import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Constants from '../../Constants';

export default function DoctorListComponent() {
    const [allDoctorList, setAllDoctorList] = useState([]);

    useEffect(() => {
        Axios.post(Constants.SERVER_IP + "allDoctorList", {
        }).then((response) => {
            console.log('success');
            console.log(response.data);
            setAllDoctorList(response.data);
        }).catch((error) => {
            console.log('error')
        });
    }, []);

    return (
        <>
            {/* <button onClick={getDoctorList}>Click</button> */}
            <div className="pagetitle">
                <h1>Data Tables</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active">All Registered Doctor List</li>
                    </ol>
                </nav>
            </div>
            {/* <!-- End Page Title --> */}


            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Doctors Datatables</h5>

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
                                    <td><img src={doctorInfo.photo} alt='Doctor Photo' style={{ width: '50px', height: 'auto' }} /></td>
                                    <td>{doctorInfo.firstname + ' ' + doctorInfo.lastname} </td>
                                    <td>{doctorInfo.gender} </td>
                                    <td>{doctorInfo.age} </td>
                                    <td>{doctorInfo.specialization} </td>
                                    <td>{doctorInfo.username}</td>
                                </tr>
                            ))
                            }

                        </tbody>
                    </table>
                    {/* <!-- End Table with stripped rows --> */}

                </div>
            </div>
        </>
    )
}
