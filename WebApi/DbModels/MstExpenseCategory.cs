using System;
using System.Collections.Generic;

namespace MyBuddy.DbModels
{
    public partial class MstExpenseCategory
    {
        public MstExpenseCategory()
        {
            TranExpensesLists = new HashSet<TranExpensesList>();
        }

        public long Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<TranExpensesList> TranExpensesLists { get; set; }
    }
}
