using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MyBuddy.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class QlinksController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetQlinks()
        {
            return Ok("Test");
        }
    }
}
