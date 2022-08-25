using MyBuddy.DbModels;
using MyBuddy.Models;

namespace MyBuddy.Services.Interfaces
{
    public interface IQlinksService
    {
        Task<List<MstQlink>> GetQlinksAsync();
        Task AddQlinkAsync(AddQlink item);
    }
}
