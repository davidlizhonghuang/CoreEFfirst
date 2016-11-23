using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TeaJournalInventory.DataModels
{
    public class TeaItem
    {
        [Key]
        public int id { get; set; }
        public string ItemName { get; set; }
        public int CategoryId { get; set; }
        public double ItemPrice { get; set; }
        public int ItemUnit { get; set; }
        public int UnitNumber { get; set; }
    }
}
