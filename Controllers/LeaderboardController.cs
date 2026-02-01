using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UclBackend.Data;
using UclBackend.Models;

namespace UclBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LeaderboardController : ControllerBase
    {
        private readonly UclDbContext _context;

        public LeaderboardController(UclDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LeaderboardEntry>>> GetLeaderboard()
        {
            return await _context.Leaderboard.OrderByDescending(l => l.Points).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<LeaderboardEntry>> PostScore(LeaderboardEntry entry)
        {
            _context.Leaderboard.Add(entry);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetLeaderboard), new { id = entry.Id }, entry);
        }
    }
}
