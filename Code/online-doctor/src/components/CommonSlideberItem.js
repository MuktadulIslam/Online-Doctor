import React from 'react'
import { Link } from 'react-router-dom'

export default function CommonSlideberItem() {
  return (
    <>
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
