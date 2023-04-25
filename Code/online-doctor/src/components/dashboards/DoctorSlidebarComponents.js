import React from 'react'
import { Link } from 'react-router-dom'
import CommonSlideberItem from '../CommonSlideberItem'

export default function DoctorSlidebarComponents() {
return (
<>
     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-person-circle"></i>
               <span>Profile</span>
          </Link>
     </li>
     {/* <!-- End "Login" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-x-diamond"></i>
               <span>Edit Information</span>
          </Link>
     </li>
     {/* <!-- End "Forget Password" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi-file-earmark-text"></i>
               <span>Appointment List</span>
          </Link>
     </li>
     {/* <!-- End "Restore User Account" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-file-earmark-medical"></i>
               <span>Make Complain</span>
          </Link>
     </li>
     {/* <!-- End "Forget Password" Page Nav --> */}


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-trash"></i>
               <span>Delete Account</span>
          </Link>
     </li>
     {/* <!-- End "Restore User Account" Page Nav --> */}


     <CommonSlideberItem />


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-arrow-right-square"></i>
               <span>Log Out</span>
          </Link>
     </li>
</>
)
}

