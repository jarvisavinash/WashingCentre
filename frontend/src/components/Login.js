import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://localhost:7148/api/User/login', {
        email: email,
        password: password
      });

      if (response.status === 200) {
        console.log('Login successful');
        // You can redirect the user or perform other actions upon successful login
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" />
          </div>

          <div class="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button onClick={handleLogin} type="button" class="btn btn-primary btn-lg"
              style={{"padding-left": "2.5rem", "padding-right": "2.5rem"}}>Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
  );
};

export default Login;


