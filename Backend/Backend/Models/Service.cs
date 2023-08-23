using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    [Table("services")]
    public class Service
    {
        [Key]
        public int? Id { get; set; }

        [Required]
        [Column("serviceName")]
        public string? ServiceName { get; set; }

        [Required]
        [Column("charges")]
        public int Charges { get; set; }

        [Required]
        [Column("description")]
        public string? Description { get; set; }
    }
}
