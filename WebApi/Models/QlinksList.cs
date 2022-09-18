namespace MyBuddy.Models
{
    public class QlinksList
    {
        public long CategoryId { get; set; }
        public string CategoryName { get; set; }
        public string CategoryDescription { get; set; }
        public List<Qlink> Qlinks { get; set; }
    }

    public class Qlink
    {
        public string Name { get; set; }
        public string Url { get; set; }
    }
}
