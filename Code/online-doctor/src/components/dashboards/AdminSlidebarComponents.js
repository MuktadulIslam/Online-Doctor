import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSlidebarComponents() {
return (
<>
     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-person-circle"></i>
               <span>Profile</span>
          </Link>
     </li>


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-x-diamond"></i>
               <span>Edit Information</span>
          </Link>
     </li>


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-x-square"></i>
               <span>Remove User Account</span>
          </Link>
     </li>


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-box-seam"></i>
               <span>Complain Box</span>
          </Link>
     </li>


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-box-arrow-up"></i>
               <span>Update Disease List</span>
          </Link>
     </li>


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-journal-text"></i>
               <span>All Patient List</span>
          </Link>
     </li>


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-journal-text"></i>
               <span>All Doctors List</span>
          </Link>
     </li>


     <li className="nav-item">
          <Link className="nav-link collapsed" to="">
               <i className="bi bi-arrow-right-square"></i>
               <span>Log Out</span>
          </Link>
     </li>
</>
)
}
