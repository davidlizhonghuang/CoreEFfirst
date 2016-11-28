using System.ComponentModel.DataAnnotations;

namespace EFDataAccess.DataModels
{
    public class TeaCategory
    {
        [Key]
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public int SubSlot { get; set; }
        public int SlotNo { get; set; }
    }

}
