using MyBuddy.DbModels;
using MyBuddy.Models;

namespace MyBuddy.Services.Interfaces
{
    public interface IExpenseService
    {
        Task<List<TranExpensesList>> GetExpensesAsync();
        Task AddExpenseAsync(AddExpense expense);
        Task<List<MstExpenseCategory>> GetExpenseCategoryAsync();
    }
}
