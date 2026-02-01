using Microsoft.EntityFrameworkCore;
using UclBackend.Models;

namespace UclBackend.Data
{
    public class UclDbContext : DbContext
    {
        public UclDbContext(DbContextOptions<UclDbContext> options) : base(options) { }

        public DbSet<ClubDetails> Clubs { get; set; }
        public DbSet<PlayerDetails> Players { get; set; }
        public DbSet<LeaderboardEntry> Leaderboard { get; set; }
        public DbSet<FantasyTeam> FantasyTeams { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // Seed initial data if necessary, or do it in a separate Seeder
        }
    }
}
