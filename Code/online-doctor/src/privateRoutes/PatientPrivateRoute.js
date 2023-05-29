import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';

export default function PatientPrivateRoute() {
    const userInfo = JSON.parse(localStorage.getItem('userData'));
    let auth = userInfo.user == 'patients' ? true:false;
  return (
    auth ? <Outlet/> : <Navigate  to="/"/>
  )
}
