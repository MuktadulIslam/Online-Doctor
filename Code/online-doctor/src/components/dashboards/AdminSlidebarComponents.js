import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSlidebarComponents() {
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
               <span>Remove Account</span>
          </Link>
     </li>
     {/* <!-- End "Restore User Account" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-question-octagon"></i>
               <span>Complain Box</span>
          </Link>
     </li>
     {/* <!-- End "Forget Password" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-person-plus"></i>
               <span>Update Disease</span>
          </Link>
     </li>
     {/* <!-- End "Restore User Account" Page Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-person-plus"></i>
               <span>All Patient List</span>
          </Link>
     </li>
     {/* <!-- End "Restore User Account" Page Nav --> */}



     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-journal-text"></i>
               <span>All Doctors List</span>
          </Link>
     </li>
     {/* <!-- End "See All Doctor" List Nav --> */}

     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-person-plus"></i>
               <span>Log Out</span>
          </Link>
     </li>
</>
)
}
