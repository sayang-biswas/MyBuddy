namespace MyBuddy.Models
{
    public class Expense
    {
        public string id { get; set; }
        public string category { get; set; }
        public long categoryId { get; set; }
        public string description { get; set; }
        public long price { get; set; }
        public DateTime createdTime { get; set; }
    }
}
