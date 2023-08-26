using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookingsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Booking>>> GetBookings()
        {
            return await _context.Bookings.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Booking>> CreateBooking(Booking booking)
        {
            var timeSlot = await _context.TimeSlots.FindAsync(booking.TimeSlotId);

            if (timeSlot == null)
            {
                return NotFound("Time slot not found.");
            }

            if ((bool)!timeSlot.Availability) // Check if Availability is false
            {
                return BadRequest("Selected time slot is not available.");
            }

            booking.BookingDate = DateTime.Now; // Set BookingDate to current datetime

            // Update the availability status of the time slot
            timeSlot.Availability = false;

            // Save changes to the database context
            await _context.SaveChangesAsync();

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return Ok();    // CreatedAtAction("GetBookings", new { id = booking.Id }, booking);

        }
    }
}
