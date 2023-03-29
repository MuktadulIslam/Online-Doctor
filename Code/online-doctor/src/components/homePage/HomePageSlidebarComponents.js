import React from 'react'
import { Link } from 'react-router-dom'
export default function HomePage() {
	return (
	<>
		<li className="nav-item">
			<a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
				<i className="bi bi-menu-button-wide"></i><span>Register</span><i className="bi bi-chevron-down ms-auto"></i>
			</a>
			<ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
				<li>
					<Link to="/doctorRegister">
						<i className="bi bi-circle"></i><span>As a Doctor</span>
					</Link>
				</li>
				<li>
					<Link to="/patientRegister">
						<i className="bi bi-circle"></i><span>As a Patient</span>
					</Link>
				</li>
			</ul>
		</li>




		<li className="nav-item">
			<Link className="nav-link collapsed" to="/login">
				<i className="bi bi-box-arrow-in-right"></i>
				<span>Login</span>
			</Link>
		</li>
		{/* <!-- End "Login" Page Nav --> */}

		<li className="nav-item">
			<Link className="nav-link collapsed" to="/forgetPassword">
				<i className="bi bi-question-octagon"></i>
				<span>Forget Password</span>
			</Link>
		</li>
		{/* <!-- End "Forget Password" Page Nav --> */}

		<li className="nav-item">
			<Link className="nav-link collapsed" to="/restoreUserAccount">
				<i className="bi bi-person-plus"></i>
				<span>Restore User Account</span>
			</Link>
		</li>
		{/* <!-- End "Restore User Account" Page Nav --> */}

		<li className="nav-item">
					<Link className="nav-link collapsed" to="/diseasePrediction">
						<i className="bi bi-clipboard-plus"></i>
						<span>Predict Disease</span>
					</Link>
				</li>
				{/* <!-- End "Predict Disease" Nav --> */}


				<li className="nav-item">
					<Link className="nav-link collapsed" to="/allDoctorsList">
						<i className="bi bi-journal-text"></i>
						<span>All Doctors List</span>
					</Link>
				</li>
				{/* <!-- End "See All Doctor" List Nav --> */}

				<li className="nav-item">
					<Link className="nav-link collapsed" to="/contactUs">
						<i className="bi bi-envelope"></i>
						<span>Contact Us</span>
					</Link>
				</li>
				{/* <!-- End "Contact" Page Nav --> */}
	</>
	)
}
