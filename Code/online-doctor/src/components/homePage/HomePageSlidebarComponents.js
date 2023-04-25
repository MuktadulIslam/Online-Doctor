import React from 'react'
import { Link } from 'react-router-dom'
import CommonSlideberItem from '../CommonSlideberItem'
export default function HomePageSlidebarComponents() {
	return (
	<>
		<li className="nav-item">
			<Link className="nav-link collapsed" to="/doctorRegister">
				<i className="bi bi-person-plus"></i>
				<span>Register As a Doctor</span>
			</Link>
		</li>

		<li className="nav-item">
			<Link className="nav-link collapsed" to="/patientRegister">
				<i className="bi bi-person-plus"></i>
				<span>Register As a Patient</span>
			</Link>
		</li>
		
		<li className="nav-item">
			<Link className="nav-link collapsed" to="/login">
				<i className="bi bi-box-arrow-in-right"></i>
				<span>Login</span>
			</Link>
		</li>

		<li className="nav-item">
			<Link className="nav-link collapsed" to="/forgetPassword">
				<i className="bi bi-question-octagon"></i>
				<span>Forget Password</span>
			</Link>
		</li>

		<li className="nav-item">
			<Link className="nav-link collapsed" to="/restoreUserAccount">
				<i className="bi bi-arrow-counterclockwise"></i>
				<span>Restore User Account</span>
			</Link>
		</li>

		<CommonSlideberItem/>
	</>
	)
}
