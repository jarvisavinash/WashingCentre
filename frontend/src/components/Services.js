import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('https://localhost:7148/api/Service'); // Adjust the API route based on your setup
            console.log(response.data); // Log the data to see the response
            setServices(response.data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Services</h2> <br/>
            <div className="row">
                {services.map(service => (
                    <div className="col-md-4 mb-4" key={service.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{service.serviceName}</h5>
                                <p class="card-text">{service.description}</p>
                                <a href="#" class="btn btn-primary">₹ {service.charges}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;