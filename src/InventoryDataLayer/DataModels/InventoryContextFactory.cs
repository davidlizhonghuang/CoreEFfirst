using Microsoft.EntityFrameworkCore.Infrastructure;

namespace InventoryDataLayer.DataModels
{
    public class InventoryContextFactory : IDbContextFactory<InventoryContext>
    {
       
        InventoryContext IDbContextFactory<InventoryContext>.Create(DbContextFactoryOptions options)
        {
            return new InventoryContext("Data Source=(localdb)\\mssqllocaldb;Database=EF6MVCCore;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }

}
