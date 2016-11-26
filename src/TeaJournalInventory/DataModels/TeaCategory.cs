using System.ComponentModel.DataAnnotations;

namespace TeaJournalInventory.DataModels
{
    public class TeaCategory
    {
        [Key]
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public int ParentId { get; set; }
        public int SlotNo { get; set; }
    }

}
