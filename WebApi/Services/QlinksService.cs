
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

        public async Task<List<QlinksList>> GetQlinksAsync()
        {
            var groupedQlinks = await _dbContext.MstQlinksCategories
                .Select(x => new QlinksList
                {
                    CategoryId = x.Id,
                    CategoryName = x.Name,
                    CategoryDescription = x.Description,
                    Qlinks = new List<Qlink>()
                }).ToListAsync();

            foreach (var groupedQlink in groupedQlinks)
            {
                groupedQlink.Qlinks.AddRange(await _dbContext.MstQlinks
                    .Where(x => x.MstQlinksCategoryId == groupedQlink.CategoryId)
                    .Select(y => new Qlink
                    {
                        Name = y.Name,
                        Url = y.Url
                    }).ToListAsync());
            }

            return groupedQlinks;
        }

        public async Task<List<MstQlinksCategory>> GetQlinksCategoriesAsync()
        {
            return await _dbContext.MstQlinksCategories.ToListAsync();
        }
    }
}
