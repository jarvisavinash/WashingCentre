import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('https://localhost:7148/api/services'); // Make sure the API route is correct
            console.log(response.data); // Log the data to see the response
            setServices(response.data.$values); // Adjust this based on the API response structure
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Services</h2> <br/>
            <div className="row">
                {services.map(service => (
                    <div className="col-md-4 mb-4" key={service.Id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{service.ServiceName}</h5>
                                <p className="card-text">{service.Description}</p>
                                <p className="btn btn-success">₹ {service.Charges}</p>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="btn btn-primary" onClick={() => navigate("/bookservices")}>Book</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
