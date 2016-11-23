using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TeaJournalInventory.DataModels
{
    public class TeaCategory
    {
        [Key]
        public int id { get; set; }
        public string CategoryName { get; set; }
        public int parentId { get; set; }
        public int SlotNo { get; set; }
    }

}
