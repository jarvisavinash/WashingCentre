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

        // Other actions (POST, PUT, DELETE) for managing bookings

        [HttpPost]
        public async Task<ActionResult<Booking>> CreateBooking(Booking booking)
        {
            bool isTimeSlotAvailable = await IsTimeSlotAvailable(booking.TimeSlotId);

            if (!isTimeSlotAvailable)
            {
                return BadRequest("Selected time slot is not available.");
            }

            _context.Bookings.Add(booking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookings", new { id = booking.Id }, booking);
        }

        private async Task<bool> IsTimeSlotAvailable(int timeSlotId)
        {
            var timeSlot = await _context.TimeSlots.FindAsync(timeSlotId);

            if (timeSlot == null)
            {
                return false; // Time slot not found
            }

            bool isBooked = await _context.Bookings.AnyAsync(b => b.TimeSlotId == timeSlotId);

            return !isBooked; // Time slot is available if not booked
        }
    }
}
