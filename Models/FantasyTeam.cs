using System.ComponentModel.DataAnnotations;

namespace UclBackend.Models
{
    public class FantasyTeam
    {
        public int Id { get; set; }
        [Required]
        public string Username { get; set; } = string.Empty;
        public string PlayerIds { get; set; } = string.Empty; // Comma separated IDs
        public int TotalPoints { get; set; }
    }
}
