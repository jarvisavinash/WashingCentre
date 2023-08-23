import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
    
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
          </ul>
    
          <div class="d-flex align-items-center">
            <button type="button" class="btn btn-link px-3 me-2">
              Login
            </button>
            <button type="button" class="btn btn-primary me-3">
              Sign up for free
            </button>
            <a
              class="btn btn-dark px-3"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              role="button"
              ><i class="fab fa-github"></i
            ></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
