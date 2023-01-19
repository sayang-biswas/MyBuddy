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
                CreatedTime = expense.expenseDate.ToLocalTime(),
                CreatedBy = "Sayangdeep Biswas"
            });
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteExpenseAsync(string expenseId)
        {
            var item = await _dbContext.TranExpensesLists.FirstOrDefaultAsync(x => x.Id == expenseId);
#pragma warning disable CS8604 // Possible null reference argument.
            _dbContext.TranExpensesLists.RemoveRange(item);
#pragma warning restore CS8604 // Possible null reference argument.
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
                              id = tel.Id,
                              category = mec.Name,
                              categoryId = mec.Id,
                              description = tel.Description,
                              price = tel.Price,
                              createdTime = tel.CreatedTime ?? default
                          })
                         .ToListAsync();
        }

        public async Task GetExpenseStatisticsAsync()
        {
            var expense = await GetExpensesAsync();
            var groupedExpense = expense
                .GroupBy(grp => grp.categoryId);
        }
    }
}
