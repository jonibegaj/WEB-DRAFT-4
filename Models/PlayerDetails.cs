namespace UclBackend.Models
{
    public class PlayerDetails
    {
        public int Id { get; set; }
        public string PlayerId { get; set; } = string.Empty; // e.g., "cristiano-ronaldo"
        public string Name { get; set; } = string.Empty;
        public string Birthday { get; set; } = string.Empty;
        public int CareerGoals { get; set; }
        public int CareerAssists { get; set; }
        public string MarketValue { get; set; } = string.Empty;
        public string Biography { get; set; } = string.Empty;
        public string Position { get; set; } = string.Empty; // GK, DEF, MID, ATK
        public string Team { get; set; } = string.Empty;
    }
}
