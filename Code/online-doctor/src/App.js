import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './components/homePage/HomePage'
import PatientProfile from './components/dashboards/patientDashboard/PatientProfile';
import DoctorProfile from './components/dashboards/doctorDashboard/DoctorProfile';
import AdminProfile from './components/dashboards/adminDashboard/AdminProfile';
import PatientPrivateRoute from './privateRoutes/PatientPrivateRoute';
import DoctorPrivateRoute from './privateRoutes/DoctorPrivateRoute';
import AdminPrivateRoute from './privateRoutes/AdminPrivateRoute';



function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route element={<PatientPrivateRoute />}>
                        <Route path="/patientProfile" element={<PatientProfile />} exact />
                    </Route>
                    <Route element={<DoctorPrivateRoute />}>
                        <Route path="/doctorProfile" element={<DoctorProfile />} />
                    </Route>
                    <Route element={<AdminPrivateRoute/>}>
                    <Route path="/adminProfile" element={<AdminProfile />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;