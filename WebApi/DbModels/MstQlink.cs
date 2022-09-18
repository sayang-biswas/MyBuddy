using System;
using System.Collections.Generic;

namespace MyBuddy.DbModels
{
    public partial class MstQlink
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public long MstQlinksCategoryId { get; set; }

        public virtual MstQlinksCategory MstQlinksCategory { get; set; }
    }
}
