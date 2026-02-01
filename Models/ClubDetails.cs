namespace UclBackend.Models
{
    public class ClubDetails
    {
        public int Id { get; set; }
        public string ClubId { get; set; } = string.Empty; // e.g., "ac-milan"
        public string Name { get; set; } = string.Empty;
        public int FoundedYear { get; set; }
        public int UclSeasons { get; set; }
        public int UclFinalsPlayed { get; set; }
        public int UclFinalsWon { get; set; }
    }
}
