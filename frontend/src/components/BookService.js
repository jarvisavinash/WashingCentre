import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useAuth } from './AuthContext';

const BookService = () => {
  const [services, setServices] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const { userId } = useAuth(); // Get the userId from the AuthContext

  useEffect(() => {
    // Fetch services
    axios.get('https://localhost:7148/api/services')
      .then(response => setServices(response.data.$values))
      .catch(error => console.error('Error fetching services:', error));
  
    // Fetch time slots
    axios.get('https://localhost:7148/api/timeslots')
      .then(response => setTimeSlots(response.data.$values))
      .catch(error => console.error('Error fetching time slots:', error));
  }, []);

  const handleBookingSubmit = async event => {
    event.preventDefault();

    // Create the booking object
    const booking = {
      userId: userId, // Replace with the actual user ID
      serviceId: parseInt(selectedService), // Parse to integer
      timeSlotId: parseInt(selectedTimeSlot), // Parse to integer
    };

    console.log(booking);

    // Send the POST request to create the booking
    try {
      const response = await axios.post('https://localhost:7148/api/bookings', booking);
      if (response.status === 200) {
        alert('Booking successful!');
        console.log(response.data); // Log the created booking details
      } else {
        alert('Booking successful!');
      }
    } catch (error) {
      alert('Booking failed...');
      console.error('Booking error:', error);
    }
  };

  return (
    <div className="container mt-5"> {/* Apply Bootstrap container class */}
      <h2>Book a Service</h2> <br/>
      <form onSubmit={handleBookingSubmit}>
        <div className="form-group">
          <label>Select a Service:</label>
          <select className="form-control" value={selectedService} onChange={e => setSelectedService(e.target.value)}>
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service.Id} value={service.Id}>
                {service.ServiceName}
              </option>
            ))}
          </select>
        </div>

        <br/><br/>

        <div className="form-group">
          <label>Select a Time Slot:</label>
          <select className="form-control" value={selectedTimeSlot} onChange={e => setSelectedTimeSlot(e.target.value)}>
            <option value="">Select a time slot</option>
            {timeSlots
              .filter(timeSlot => timeSlot.Availability) // Filter only available time slots
              .map(timeSlot => (
                <option key={timeSlot.Id} value={timeSlot.Id}>
                  {timeSlot.StartTime} - {timeSlot.EndTime}
                </option>
              ))}
          </select>
        </div>     

        <button type="submit" className="btn btn-primary">Book</button>
      </form>
    </div>
  );
};

export default BookService;
