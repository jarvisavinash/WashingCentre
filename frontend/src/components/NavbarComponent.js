import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
    
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link"><Link to="/" style={{ color: "black", textDecoration: 'none' }} > Home </Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/login" style={{ color: "black", textDecoration: 'none' }} > Login </Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/register" style={{ color: "black", textDecoration: 'none' }} > Register </Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/services" style={{ color: "black", textDecoration: 'none' }} > Services </Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><Link to="/bookservices" style={{ color: "black", textDecoration: 'none' }} > BookService </Link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

