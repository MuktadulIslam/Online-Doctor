import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './components/homePage/HomePage'
import PatientProfile from './components/dashboards/patientDashboard/PatientProfile';
import DoctorProfile from './components/dashboards/doctorDashboard/DoctorProfile';
import AdminProfile from './components/dashboards/adminDashboard/AdminProfile';



function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/patientProfile" element={<PatientProfile />} />
                    <Route path="/doctorProfile" element={<DoctorProfile />} />
                    <Route path="/adminProfile" element={<AdminProfile />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;