namespace UclBackend.Models
{
    public class LeaderboardEntry
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public int Points { get; set; }
    }
}
