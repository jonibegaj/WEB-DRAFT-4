using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UclBackend.Data;
using UclBackend.Models;

namespace UclBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlayersController : ControllerBase
    {
        private readonly UclDbContext _context;

        public PlayersController(UclDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<PlayerDetails>>> GetPlayers()
        {
            return await _context.Players.ToListAsync();
        }

        [HttpGet("{playerId}")]
        public async Task<ActionResult<PlayerDetails>> GetPlayer(string playerId)
        {
            var player = await _context.Players.FirstOrDefaultAsync(p => p.PlayerId == playerId);
            if (player == null) return NotFound();
            return player;
        }
    }
}
