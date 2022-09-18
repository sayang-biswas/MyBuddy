using Microsoft.EntityFrameworkCore;
using MyBuddy.DbModels;
using MyBuddy.Models;
using MyBuddy.Services.Interfaces;

namespace MyBuddy.Services
{
    public class ExpenseService : IExpenseService
    {
        private readonly MyBuddyDBContext _dbContext;

        public ExpenseService(MyBuddyDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task AddExpenseAsync(AddExpense expense)
        {
            await _dbContext.AddAsync(new TranExpensesList()
            {
                Id = Guid.NewGuid().ToString(),
                Description = expense.Description,
                Category = expense.category,
                Price = expense.Price,
                CreatedTime = DateTime.Now,
                CreatedBy = "Sayangdeep Biswas"
            });
            await _dbContext.SaveChangesAsync();
        }

        public async Task<List<MstExpenseCategory>> GetExpenseCategoryAsync()
        {
            return await _dbContext.MstExpenseCategories.ToListAsync();
        }

        public async Task<List<Expense>> GetExpensesAsync()
        {
            return await (from tel in _dbContext.TranExpensesLists
                          join mec in _dbContext.MstExpenseCategories on tel.Category equals mec.Id
                          select new Expense
                          {
                              category = mec.Name,
                              description = tel.Description,
                              price = tel.Price,
                              createdTime = tel.CreatedTime ?? default
                          })
                         .ToListAsync();
        }
    }
}
