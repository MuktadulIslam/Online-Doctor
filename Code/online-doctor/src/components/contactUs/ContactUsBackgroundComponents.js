import React from 'react'

export default function ContactUsBackgroundComponents() {
     return (
          <>

               <div className="section contact">

                    <div className="row gy-4">

                         <div className="col-xl-6">

                              <div className="row">
                                   <div className="col-lg-6">
                                        <div className="info-box card">
                                             <i className="bi bi-geo-alt"></i>
                                             <h3>Address</h3>
                                             <p>University of Dhaka, Suhrawardi Udyan Rd<br />Dhaka 1200</p>
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="info-box card">
                                             <i className="bi bi-telephone"></i>
                                             <h3>Call Us</h3>
                                             <p>+08801405-678059<br />+08801913-104777</p>
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="info-box card">
                                             <i className="bi bi-envelope"></i>
                                             <h3>Email Us</h3>
                                             <p>bsse1215@iit.du.ac.bd<br />bsse1215@iit.du.ac.bd</p>
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="info-box card">
                                             <i className="bi bi-clock"></i>
                                             <h3>Open Hours</h3>
                                             <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                                        </div>
                                   </div>
                              </div>

                         </div>

                         <div className="col-xl-6">
                              <div className="card p-4">
                                   <form action="forms/contact.php" method="post" className="php-email-form">
                                        <div className="row gy-4">

                                             <div className="col-md-6">
                                                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                             </div>

                                             <div className="col-md-6 ">
                                                  <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                             </div>

                                             <div className="col-md-12">
                                                  <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                             </div>

                                             <div className="col-md-12">
                                                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                             </div>

                                             <div className="col-md-12 text-center">
                                                  <div className="loading">Loading</div>
                                                  <div className="error-message"></div>
                                                  <div className="sent-message">Your message has been sent. Thank you!</div>

                                                  <button type="submit">Send Message</button>
                                             </div>

                                        </div>
                                   </form>
                              </div>

                         </div>

                    </div>

               </div>
          </>
     )
}
