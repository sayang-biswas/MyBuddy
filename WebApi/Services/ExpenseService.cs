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
        }

        public async Task<List<TranExpensesList>> GetExpensesAsync()
        {
            return await _dbContext.TranExpensesLists
                .ToListAsync();
        }
    }
}
