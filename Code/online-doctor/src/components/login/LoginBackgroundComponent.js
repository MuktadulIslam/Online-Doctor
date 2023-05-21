import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { createBrowserHistory } from 'history';
import { Navigate } from 'react-router-dom';
import Constants from '../../Constants';
import UserInfoService from './UserInfoService';


export default function LoginBackgroundComponent() {

     const [user, setUser] = useState("");
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [notificaiton, setNotificaiton] = useState("");
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [profile, setProfile] = useState("");

     const history = createBrowserHistory();


     const login = (e) => {
          e.preventDefault();
          Axios.post(Constants.SERVER_IP + "login", {
               user: user,
               username: username,
               password: password,
          }).then((response) => {
               if (response.data === 'Internal server error') {
                    history.push("/");
               }

               else if (response.data === 'Wrong username or password') {
                    console.log("failed to login")
                    setNotificaiton(
                         <div className="col-md-12">
                              <h5 style={{ color: 'red' }}>Wrong username or password</h5>
                         </div>
                    )
               }

               else if (response.data == Constants.PROFILE_ARCHIVED) {
                    setNotificaiton(
                         <div className="col-md-12">
                              <h5 style={{ color: 'red' }}>Account is Archived <br/>Please Make Request to Restore User Account</h5>
                         </div>
                    )
               }

               else if (user == 'admin') {
                    // history.push("/adminProfile");
                    setIsLoggedIn(true);
                    setProfile("/adminProfile")
                    UserInfoService.userInfo = response.data;

                    // return <Navigate to="/login/adminProfile" />;
                    // window.location.reload();
               }
               else if (user == 'doctors') {
                    // history.push("/doctorProfile");
                    // window.location.reload();

                    setIsLoggedIn(true);
                    setProfile("/doctorProfile");
                    UserInfoService.userInfo = response.data;
               }
               else if(user == 'patients'){
                    // history.push("/patientProfile");
                    // window.location.reload();
                    setIsLoggedIn(true);
                    setProfile("/patientProfile");
                    UserInfoService.userInfo = response.data;
               }
               else {
                    console.log("Developer's Error");
               }
          })
     }

     if (isLoggedIn) {
          return <Navigate to={profile} />;
     }



     return (
          <div className="container">

               <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                         <div className="row justify-content-center">
                              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                   <div className="card mb-3">
                                        <div className="card-body">
                                             <div className="pt-4 pb-2">
                                                  <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                                  <p className="text-center small">Enter your username & password to login</p>
                                             </div>

                                             <form className="row g-3 needs-validation">
                                                  <div className="col-md-12">
                                                       <label htmlFor="accountType" className="form-label">Account Type</label>
                                                       <select className="form-control" id="accountType" name='accountType' onChange={(e) => { setUser(e.target.value); setNotificaiton("") }}>
                                                            <option value=""></option>
                                                            <option value="patients">Patient</option>
                                                            <option value="doctors">Doctor</option>
                                                            <option value="admin">Admin</option>
                                                       </select>

                                                  </div>

                                                  <div className="col-md-12">
                                                       <label htmlFor="yourUsername" className="form-label">Username</label>
                                                       <div className="input-group has-validation">
                                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                            <input type="text" name="username" className="form-control" id="yourUsername" onChange={(e) => { setUsername(e.target.value); setNotificaiton("") }} required />
                                                       </div>
                                                  </div>

                                                  <div className="col-md-12">
                                                       <label htmlFor="yourPassword" className="form-label">Password</label>
                                                       <input type="password" name="password" className="form-control" id="yourPassword" onChange={(e) => { setPassword(e.target.value); setNotificaiton("") }} required />
                                                  </div>

                                                  <div className="col-md-12">
                                                       <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
                                                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                       </div>
                                                  </div>

                                                  {notificaiton}

                                                  <div className="col-md-12">
                                                       <button className="btn btn-primary w-100" type="submit" onClick={login}>Login</button>
                                                  </div>
                                                  <div className="col-md-12">
                                                       <p className="medium mb-0">Don't have account? <Link id="createAccount" to=""> Create an account</Link></p>
                                                  </div>
                                             </form>

                                        </div>
                                   </div>


                              </div>
                         </div>
                    </div>

               </section>

          </div>

     )
}
