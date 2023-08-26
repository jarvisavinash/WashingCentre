import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookService = () => {
  const [services, setServices] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  useEffect(() => {
    // Fetch services and time slots
    axios.get('https://localhost:7148/api/services').then(response => setServices(response.data));
    axios.get('https://localhost:7148/api/timeslots').then(response => setTimeSlots(response.data));
  }, []);

  const handleBookingSubmit = async event => {
    event.preventDefault();

    // Create the booking object
    const booking = {
      userId: 1, // Replace with the actual user ID
      serviceId: selectedService,
      timeSlotId: selectedTimeSlot,
    };

    // Send the POST request to create the booking
    try {
      await axios.post('https://localhost:7148/api/bookings', booking);
      alert('Booking successful!');
    } catch (error) {
      alert('Booking failed.');
    }
  };

  return (
    <div>
      <h2>Book a Service</h2>
      <form onSubmit={handleBookingSubmit}>
        <label>Select a Service:</label>
        <select value={selectedService} onChange={e => setSelectedService(e.target.value)}>
          <option value="">Select a service</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.serviceName}
            </option>
          ))}
        </select>

        <label>Select a Time Slot:</label>
        <select value={selectedTimeSlot} onChange={e => setSelectedTimeSlot(e.target.value)}>
          <option value="">Select a time slot</option>
          {timeSlots.map(timeSlot => (
            <option key={timeSlot.id} value={timeSlot.id}>
              {timeSlot.startTime} - {timeSlot.endTime}
            </option>
          ))}
        </select>

        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookService;
