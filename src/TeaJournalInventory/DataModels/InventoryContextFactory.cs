using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Threading.Tasks;

namespace TeaJournalInventory.DataModels
{
    public class InventoryContextFactory : IDbContextFactory<InventoryContext>
    {
        public InventoryContext Create()
        {
            return new InventoryContext("Data Source=(localdb)\\mssqllocaldb;Database=EF6MVCCore;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }

}
