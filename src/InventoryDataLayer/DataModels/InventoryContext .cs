using Microsoft.EntityFrameworkCore;

namespace InventoryDataLayer.DataModels
{
    public class InventoryContext: DbContext
    {
       
        public InventoryContext(string connString = "Data Source=(localdb)\\mssqllocaldb;Database=EF6MVCCore;Trusted_Connection=True;MultipleActiveResultSets=true") 
        {

        }
        public DbSet<TeaItem> TeaItems { get; set; }
        public DbSet<Slot> Slots { get; set; }
        public DbSet<TeaCategory> TeaCategorys { get; set; }
     
    }
}
