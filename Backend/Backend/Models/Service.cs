using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("services")]
    public class Service
    {
        public int Id { get; set; }
        public string? ServiceName { get; set; }
        public int Charges { get; set; }
        public string? Description { get; set; }

        public ICollection<TimeSlot>? TimeSlots { get; set; } // Navigation property
        public ICollection<Booking>? Bookings { get; set; } // Inverse navigation property

    }

}

