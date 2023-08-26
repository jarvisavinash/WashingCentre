using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("users")] // Specify the actual table name in the database
    public class User
    {
        [Required]
        [Column("id")] // Specify the actual field name in the database
        public int Id { get; set; }

        [Required]
        [Column("firstname")] // Specify the actual field name in the database
        public string? FirstName { get; set; }

        [Required]
        [Column("lastname")] // Specify the actual field name in the database
        public string? LastName { get; set; }

        [Required]
        [Column("email")] // Specify the actual field name in the database
        public string? Email { get; set; }

        [Required]
        [Column("mobileno")] // Specify the actual field name in the database
        public string? MobileNo { get; set; }

        [Required]
        [Column("password")] // Specify the actual field name in the database
        public string? Password { get; set; }

        public ICollection<Booking>? Bookings { get; set; }
    }


}
