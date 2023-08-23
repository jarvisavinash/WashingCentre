import React from 'react';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Services from './Services';
import { Navbar } from 'react-bootstrap';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/nav' element={ < Navbar /> } />
        <Route path="/login" element={< Login />} />
        <Route path="/register" element={< Register />} />
        <Route path="/services" element={< Services/>} />
        {/* Add more routes if needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
