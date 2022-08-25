
using Microsoft.EntityFrameworkCore;
using MyBuddy.DbModels;
using MyBuddy.Models;
using MyBuddy.Services.Interfaces;

namespace MyBuddy.Services
{
    public class QlinksService : IQlinksService
    {
        private readonly MyBuddyDBContext _dbContext;

        public QlinksService(MyBuddyDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddQlinkAsync(AddQlink item)
        {
            var rand = new Random();
            await _dbContext.AddAsync(new MstQlink
            {
                Id = rand.NextInt64(),
                Name = item.Name,
                Url = item.Url,
                MstQlinksCategoryId = item.Category
            });

            await _dbContext.SaveChangesAsync();
        }

        public async Task<List<MstQlink>> GetQlinksAsync()
        {
            return await _dbContext.MstQlinks.ToListAsync();
        }
    }
}
