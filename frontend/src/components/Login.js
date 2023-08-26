import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the AuthContext

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from the AuthContext

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://localhost:7148/api/User/login', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        console.log('Login successful');
        const userId = response.data.UserId;

        login(userId); // Call the login function from context
        navigate("/bookservices"); // Redirect upon successful login
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  

  return (
<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>

          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" />
          </div>

          <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button onClick={handleLogin} type="button" className="btn btn-primary btn-lg"
              style={{"padding-left": "2.5rem", "padding-right": "2.5rem"}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
            <a><Link to="/register" className="link-danger" style={{ color: "red", textDecoration: 'none' }}> Register </Link></a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
  );
};

export default Login;


