using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyBuddy.Models;
using MyBuddy.Services.Interfaces;

namespace MyBuddy.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class QlinksController : ControllerBase
    {
        private readonly IQlinksService _qlinksService;

        public QlinksController(IQlinksService qlinksService)
        {
            _qlinksService = qlinksService;
        }

        [HttpGet]
        public async Task<IActionResult> GetQlinks()
        {
            var result = await _qlinksService.GetQlinksAsync();
            return Ok(result);
        }

        [HttpGet]
        public async Task<IActionResult> GetQlinksCategory()
        {
            var result = await _qlinksService.GetQlinksCategoriesAsync();
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> AddQlink(AddQlink item)
        {
            await _qlinksService.AddQlinkAsync(item);
            return Ok();
        }
    }
}
