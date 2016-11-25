using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryDataLayer.DataModels
{
    public class Slot
    {
        [Key]
        public int SlotNo { get; set; }
        public string SlotName { get; set; }
        public string Description { get; set; }
    }
}
