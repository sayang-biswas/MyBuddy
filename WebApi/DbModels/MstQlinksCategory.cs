using System;
using System.Collections.Generic;

namespace MyBuddy.DbModels
{
    public partial class MstQlinksCategory
    {
        public MstQlinksCategory()
        {
            MstQlinks = new HashSet<MstQlink>();
        }

        public string Name { get; set; }
        public string Description { get; set; }
        public long Id { get; set; }
        public long? SortOrder { get; set; }

        public virtual ICollection<MstQlink> MstQlinks { get; set; }
    }
}
