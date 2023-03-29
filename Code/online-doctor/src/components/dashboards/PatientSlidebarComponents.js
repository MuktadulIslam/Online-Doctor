import React from 'react'
import { Link } from 'react-router-dom'

export default function PatientSlidebarComponents() {
return (
<>
     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-box-arrow-in-right"></i>
               <span>Profile</span>
          </Link>
     </li>
     {/* <!-- End "Login" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-question-octagon"></i>
               <span>Edit Information</span>
          </Link>
     </li>
     {/* <!-- End "Forget Password" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-person-plus"></i>
               <span>History</span>
          </Link>
     </li>
     {/* <!-- End "Restore User Account" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="/bookAppointment">
               <i className="bi bi-question-octagon"></i>
               <span>Book Appointment</span>
          </Link>
     </li>
     {/* <!-- End "Forget Password" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-person-plus"></i>
               <span>Make Complain</span>
          </Link>
     </li>
     {/* <!-- End "Restore User Account" Page Nav --> */}



     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-clipboard-plus"></i>
               <span>Predict Disease</span>
          </Link>
     </li>
     {/* <!-- End "Predict Disease" Nav --> */}


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-journal-text"></i>
               <span>All Doctors List</span>
          </Link>
     </li>
     {/* <!-- End "See All Doctor" List Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-envelope"></i>
               <span>Contact Us</span>
          </Link>
     </li>
     {/* <!-- End "Contact" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-person-plus"></i>
               <span>Log Out</span>
          </Link>
     </li>
</>
)
}