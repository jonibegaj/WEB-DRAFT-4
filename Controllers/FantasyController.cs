using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UclBackend.Data;
using UclBackend.Models;

namespace UclBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FantasyController : ControllerBase
    {
        private readonly UclDbContext _context;

        public FantasyController(UclDbContext context)
        {
            _context = context;
        }

        [HttpGet("players")]
        public async Task<ActionResult<IEnumerable<PlayerDetails>>> GetFantasyPlayers()
        {
            // Return only current players (those with a Position set)
            return await _context.Players
                .Where(p => !string.IsNullOrEmpty(p.Position))
                .ToListAsync();
        }

        [HttpPost("team")]
        public async Task<ActionResult<FantasyTeam>> PostTeam(FantasyTeam team)
        {
            _context.FantasyTeams.Add(team);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFantasyPlayers), new { id = team.Id }, team);
        }

        [HttpGet("leaderboard")]
        public async Task<ActionResult<IEnumerable<FantasyTeam>>> GetFantasyLeaderboard()
        {
            return await _context.FantasyTeams.OrderByDescending(t => t.TotalPoints).ToListAsync();
        }
    }
}
