import React from 'react';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Services from './Services';
import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import Home from './Home';
import BookService from './BookService';

const Routing = () => {
  return (
    <div>
    
    <BrowserRouter>

    < NavbarComponent />

      <Routes>
      <Route path="/" element={ <Home /> } />
        <Route path="/nav" element={ < NavbarComponent /> } />
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={< Register />} />
        <Route path="/services" element={< Services/>} />
        <Route path="/bookervices" element={< BookService/>} />
        {/* Add more routes if needed */}
      </Routes>

      < Footer />

    </BrowserRouter>
    </div>
  );
};

export default Routing;
