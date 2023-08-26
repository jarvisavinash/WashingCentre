using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{ 
    [Route("api/[controller]")]
    [ApiController]
    public class TimeSlotsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TimeSlotsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TimeSlot>>> GetTimeSlots()
        {
            return await _context.TimeSlots.ToListAsync();
        }

        // Other actions (POST, PUT, DELETE) for managing time slots
    }
}
