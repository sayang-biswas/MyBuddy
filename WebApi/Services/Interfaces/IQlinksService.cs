using MyBuddy.DbModels;
using MyBuddy.Models;

namespace MyBuddy.Services.Interfaces
{
    public interface IQlinksService
    {
        Task<List<QlinksList>> GetQlinksAsync();
        Task AddQlinkAsync(AddQlink item);
        Task<List<MstQlinksCategory>> GetQlinksCategoriesAsync();
    }
}
