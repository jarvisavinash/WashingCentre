using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(User user)
        {
            if (ModelState.IsValid)
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser(Login login)
        {
            if (ModelState.IsValid)
            {
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == login.Email && u.Password == login.Password);

                if (user != null)
                {
                    return Ok();
                }
                else
                {
                    return NotFound(); // User not found or invalid credentials
                }
            }
            return BadRequest();
        }

        [HttpPost("register")] // Endpoint for user registration
        public async Task<IActionResult> RegisterUser(User user)
        {
            if (ModelState.IsValid)
            {
                // Check if the email is already registered
                if (await _context.Users.AnyAsync(u => u.Email == user.Email))
                {
                    return Conflict("Email already registered");
                }

                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return Ok();
            }
            return BadRequest();
        }
    }
}
