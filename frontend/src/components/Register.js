import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate


function Register() {
  
  const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        mobileNo:'',
        address:'',
        password: '',
        // Add more fields as needed
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('https://localhost:7148/api/User/Register', user); // Adjust the API endpoint as needed
          if (response.status === 200) {
            console.log('User created successfully');
            navigate("/bookervices"); // Redirect upon successful register
            // Reset the form
            setUser({
              firstName:'',
              lastName:'',
              email:'',
              mobileNo:'',
              address:'',
              password: '',
            });
          }
        } catch (error) {
          console.error('Error creating user', error);
        }
      };
    

    return(
        <div>

            <section className="vh-100" style={{"background-color": "#eee"}}>
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{"border-radius": "25px"}}>
                      <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                
                            <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="text" className="form-control" id="firstName" name="firstName" value={user.firstName} onChange={handleChange} placeholder="First Name"/>
                                </div>
                              </div>

                              
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="text" className="form-control" id="lastName" name="lastName" value={user.lastName} onChange={handleChange} placeholder="Last Name"/>  
                                </div>
                              </div>
                
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} placeholder="Email ID"/>
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <input type="text" className="form-control" id="mobileNo" name="mobileNo" value={user.mobileNo} onChange={handleChange} placeholder="Mobile No" />  
                                </div>
                              </div>

                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                <input type="text" className="form-control" id="address" name="address" value={user.address} onChange={handleChange} placeholder="Address" />  
                                </div>
                              </div>

                
                              <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                  <input type="password" className="form-control"  id="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                                </div>
                              </div>
                
                
                              <div className="form-check d-flex justify-content-center mb-5">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                <label className="form-check-label" for="form2Example3">
                                  I agree all statements in <a href="#!">Terms of service</a>
                                </label>
                              </div>
                
                              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                              </div>

                              <p class="text-center text-muted mt-5 mb-0">Have already an account?  
                              <a><Link to="/login" className="link-success" style={{ color: "green", textDecoration: 'none' }}> Login </Link></a></p>
                
                            </form>
                
                          </div>
                          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                              className="img-fluid" alt="Sample image"/>
            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        </div>
    );
}

export default Register;