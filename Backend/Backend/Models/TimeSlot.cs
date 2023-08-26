namespace Backend.Models
{
    public class TimeSlot
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public Service Service { get; set; } // Navigation property
        public ICollection<Booking> Bookings { get; set; }
    }

}
