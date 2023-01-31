using MyBuddy.DbModels;
using MyBuddy.Models;

namespace MyBuddy.Services.Interfaces
{
    public interface IExpenseService
    {
        Task<List<Expense>> GetExpensesAsync();
        Task AddExpenseAsync(AddExpense expense);
        Task<List<MstExpenseCategory>> GetExpenseCategoryAsync();
        Task DeleteExpenseAsync(string expenseId);
        Task<List<ExpenseStatistics>> GetExpenseStatisticsAsync();
    }
}
