using System;
using System.Collections.Generic;

namespace MyBuddy.DbModels
{
    public partial class TranExpensesList
    {
        public string Id { get; set; }
        public long Category { get; set; }
        public string Description { get; set; }
        public DateTime? CreatedTime { get; set; }
        public string CreatedBy { get; set; }
        public long Price { get; set; }

        public virtual MstExpenseCategory CategoryNavigation { get; set; }
    }
}
