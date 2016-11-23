using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace TeaJournalInventory.DataModels
{
    public class InventoryContext: DbContext
    {
       
        public InventoryContext( string connString = "Data Source=(localdb)\\mssqllocaldb;Database=EF6MVCCore;Trusted_Connection=True;MultipleActiveResultSets=true") 
            : base(connString)
        {

        }
        public DbSet<TeaItem> TeaItems { get; set; }
        public DbSet<Slot> Slots { get; set; }
        public DbSet<TeaCategory> TeaCategorys { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            //base.OnModelCreating(modelBuilder);
        }
    }
}
