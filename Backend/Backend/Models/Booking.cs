namespace Backend.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ServiceId { get; set; }
        public int TimeSlotId { get; set; }
        public DateTime BookingDate { get; set; }

        public User User { get; set; } // Navigation property
        public Service Service { get; set; } // Navigation property
        public TimeSlot TimeSlot { get; set; } // Navigation property
    }

}
