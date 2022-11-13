namespace MyBuddy.Models
{
    public class AddExpense
    {
        public string Description { get; set; }
        public long category { get; set; }
        public long Price { get; set; }
        public DateTime expenseDate { get; set; }
    }
}
