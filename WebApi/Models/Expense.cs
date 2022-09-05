namespace MyBuddy.Models
{
    public class Expense
    {
        public string category { get; set; }
        public string description { get; set; }
        public long price { get; set; }
        public DateTime createdTime { get; set; }
    }
}
