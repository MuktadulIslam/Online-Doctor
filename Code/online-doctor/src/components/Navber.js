import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Navber(props) {

	const [sidebarVisible, setSidebarVisible] = useState(false);

	const sidebarToggler = () => {
		setSidebarVisible(!sidebarVisible);
	};

  	return (
     	<nav className={sidebarVisible ? 'toggle-sidebar' : ''}>
		{/* <!-- ======= Header ======= --> */}
		<header id="header" className="header fixed-top d-flex align-items-center">
			<div className="d-flex align-items-center justify-content-between">
				<Link to="/" className="logo d-flex align-items-center">
					<img src="assets/img/logo.png" alt=""/>
					<span >Online Doctor</span>
				</Link>
				<i className="bi bi-list toggle-sidebar-btn" onClick={sidebarToggler}></i>
			</div>
			{/* <!-- End Logo --> */}

		</header>
		{/* <!-- End Header --> */}



		{/* <!-- ======= Sidebar ======= --> */}
		<aside id="sidebar" className="sidebar">

			<ul className="sidebar-nav" id="sidebar-nav"> 
				{props.slideberContents}
			</ul>

			{/* <-- ======= Footer ======= --> */}
			<footer id="footer">
				<hr/>
				<div className="copyright">
					&copy;Copyright <strong><span>Group-12</span></strong>. All Rights Reserved
				</div>
				<div className="credits">
					Designed by 
					<Link to="https://www.facebook.com/muktadul.islam.1690?mibextid=ZbWKwL"> Muktadul Islam</Link> &
					<Link to="https://www.facebook.com/profile.php?id=100036399733733&mibextid=ZbWKwL"> Abir Ahmed</Link>
				</div>
  			</footer>
  			{/* <!-- End Footer --> */}


		</aside>
		{/* <!-- End Sidebar--> */}




		{/* <!-- ======= Main ======= --> */}
		<main id="main" className="main">
			{props.backgroundContents}
		</main>
		{/* <!-- End #main --> */}

	</nav>
  	)

}
