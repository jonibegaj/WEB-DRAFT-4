using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UclBackend.Data;
using UclBackend.Models;

namespace UclBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClubsController : ControllerBase
    {
        private readonly UclDbContext _context;

        public ClubsController(UclDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClubDetails>>> GetClubs()
        {
            return await _context.Clubs.ToListAsync();
        }

        [HttpGet("{clubId}")]
        public async Task<ActionResult<ClubDetails>> GetClub(string clubId)
        {
            var club = await _context.Clubs.FirstOrDefaultAsync(c => c.ClubId == clubId);
            if (club == null) return NotFound();
            return club;
        }
    }
}
