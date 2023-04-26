import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import Axios from 'axios';
import { createBrowserHistory } from 'history';
import { Navigate } from 'react-router-dom';
import Constants from '../../Constants';


export default function LoginBackgroundComponents() {

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
               if(response.data === 'Internal server error') {
                    history.push("/");
               }

               else if(response.data === 'Wrong username or password') {
                    console.log("failed to login")
                    setNotificaiton(
                    <div className="col-md-12">
                         <h5>Wrong username or password</h5>
                    </div>
                    )
               }
               
               else if(response.data === 'admin') {
                    // history.push("/adminProfile");
                    setIsLoggedIn(true);
                    setProfile("/adminProfile")

                    // return <Navigate to="/login/adminProfile" />;
                    // window.location.reload();
               }
               else if(response.data === 'doctors') {
                    // history.push("/doctorProfile");
                    // window.location.reload();

                    setIsLoggedIn(true);
                    setProfile("/doctorProfile")
               }
               else{
                    // history.push("/patientProfile");
                    // window.location.reload();
                    setIsLoggedIn(true);
                    setProfile("/patientProfile")
               }
          })
     }

     if (isLoggedIn) {
          return <Navigate to={profile} />;
     }



     return (
     <div class="container">

     <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
               <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                         <div class="card mb-3">
                              <div class="card-body">
                                   <div class="pt-4 pb-2">
                                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p class="text-center small">Enter your username & password to login</p>
                                   </div>

                                   <form class="row g-3 needs-validation" novalidate>
                                        <div className="col-md-12">
                                             <label for="accountType" className="form-label">Account Type</label>
                                             <select className="form-control" id="accountType" name='accountType' onChange={(e) => {setUser(e.target.value);setNotificaiton("")}}>
                                                  <option value=""></option>
                                                  <option value="patients">Patient</option>
                                                  <option value="doctors">Doctor</option>
                                                  <option value="admin">Admin</option>
                                             </select>

                                        </div>

                                        <div class="col-md-12">
                                             <label for="yourUsername" class="form-label">Username</label>
                                             <div class="input-group has-validation">
                                                  <span class="input-group-text" id="inputGroupPrepend">@</span>
                                                  <input type="text" name="username" class="form-control" id="yourUsername" onChange={(e) => {setUsername(e.target.value);setNotificaiton("")}} required/>
                                             </div>
                                        </div>

                                        <div class="col-md-12">
                                             <label for="yourPassword" class="form-label">Password</label>
                                             <input type="password" name="password" class="form-control" id="yourPassword" onChange={(e) => {setPassword(e.target.value);setNotificaiton("")}} required />
                                        </div>

                                        <div class="col-md-12">
                                             <div class="form-check">
                                                  <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                                                       <label class="form-check-label" for="rememberMe">Remember me</label>
                                             </div>
                                        </div>

                                        {notificaiton}

                                        <div class="col-md-12">
                                             <button class="btn btn-primary w-100" type="submit" onClick={login}>Login</button>
                                        </div>
                                        <div class="col-md-12">
                                             <p class="medium mb-0">Don't have account? <Link id ="createAccount" to=""> Create an account</Link></p>
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
