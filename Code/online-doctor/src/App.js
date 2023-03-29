import './App.css';
import Navber from './components/Navber';
import HomePageSlidebarComponents from './components/homePage/HomePageSlidebarComponents';
import HomePageBackgroundComponents from './components/homePage/HomePageBackgroundComponents';
import ContactUsBackgroundComponents from './components/contactUs/ContactUsBackgroundComponents';
import LoginBackgroundComponents from './components/login/LoginBackgroundComponents';
import DoctorRegistration from './components/registration/DoctorRegistration';
import PatientRegistration from './components/registration/PatientRegistration';
import ForgetPasswordBackgroundComponents from './components/forgetPassword/ForgetPasswordBackgroundComponents';

import {
	BrowserRouter as Router,
	Routes,
	Route
   } from "react-router-dom";

import DoctorSlidebarComponents from './components/dashboards/DoctorSlidebarComponents';
import DoctorBackgroundComponents from './components/dashboards/DoctorBackgroundComponents';
import AdminSlidebarComponents from './components/dashboards/AdminSlidebarComponents';
import AdminBackgroundComponents from './components/dashboards/AdminBackgroundComponents';
import PatientSlidebarComponents from './components/dashboards/PatientSlidebarComponents';
import PatientBackgroundComponents from './components/dashboards/PatientBackgroundComponents';



import BookAppointment from './components/appointment/BookAppointment';


function App() {
	return (
		<div>
    	<Router>
		<Routes>
			<Route path="/" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={<HomePageBackgroundComponents/>}/>} />

			<Route path="/contactUs" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={<ContactUsBackgroundComponents/>}/>} />

			<Route path="/login" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={<LoginBackgroundComponents/>}/>} />

			<Route path="/doctorRegister" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={<DoctorRegistration/>}/>} />

			<Route path="/patientRegister" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={<PatientRegistration/>}/>} />

			<Route path="/diseasePrediction" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={null}/>} />
			
			<Route path="/allDoctorsList" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={null}/>} />

			<Route path="/login" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={null}/>} />

			<Route path="/forgetPassword" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={<ForgetPasswordBackgroundComponents/>}/>} />

			<Route path="/restoreUserAccount" element={<Navber slideberContents = {<HomePageSlidebarComponents/>} backgroundContents={null}/>} />



			{/* --------------DashBoards------------ */}
			<Route path="/adminProfile" element={<Navber slideberContents = {<AdminSlidebarComponents/>} backgroundContents={<AdminBackgroundComponents/>}/>} />

			<Route path="/doctorProfile" element={<Navber slideberContents = {<DoctorSlidebarComponents/>} backgroundContents={<DoctorBackgroundComponents/>}/>} />

			<Route path="/patientProfile" element={<Navber slideberContents = {<PatientSlidebarComponents/>} backgroundContents={<PatientBackgroundComponents/>}/>} />


		{/* <Route path="/adminProfile" element={<Protected navberComponent = {AdminSlidebarComponents} backgroundComponent= {null} />}/>

		<Route path="/doctorProfile" element={<Navber slideberContents = {<DoctorSlidebarComponents/>} backgroundContents={null}/>} />

		<Route path="/patientProfile" element={<Navber slideberContents = {<PatientSlidebarComponents/>} backgroundContentsents={null}/>} /> */}


			{/* -------------------Appointment------------------- */}
			<Route path="/bookAppointment" element={<Navber slideberContents = {<PatientSlidebarComponents/>} backgroundContents={<BookAppointment/>}/>} />

        </Routes>
  </Router>
  </div>
  );
}

export default App;