using System.ComponentModel.DataAnnotations;

namespace InventoryDataLayer.DataModels
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
