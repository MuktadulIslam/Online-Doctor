import React from 'react'
import { Link } from 'react-router-dom';

export default function FooterComponent() {
  return (
    <footer id="footer">
                    <hr />
                    <div className="copyright">
                        &copy;Copyright <strong><span>Group-12</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by
                        <Link to="https://www.facebook.com/muktadul.islam.1690?mibextid=ZbWKwL"> Muktadul Islam</Link> &
                        <Link to="https://www.facebook.com/profile.php?id=100036399733733&mibextid=ZbWKwL"> Abir Ahmed</Link>
                    </div>
                </footer>
  )
}
