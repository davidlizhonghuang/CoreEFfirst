# Use Asp.net Core to do code first database creation

##create a asp.net core framework project

## add 
"dependencies": {
    "EntityFramework": "6.1.3",
    "Microsoft.EntityFrameworkCore.SqlServer": "1.0.1",
    "Microsoft.EntityFrameworkCore.Tools": "1.0.0-preview2-final",
    in project.json
    
## add
 "ConnectionStrings": {
    "DefaultConnection": "Data Source=(localdb)\\mssqllocaldb;Database=EF6MVCCore;Trusted_Connection=True;MultipleActiveResultSets=true"
  },
  
  in appsettings.json
  
## add

 services.AddScoped<InventoryContext>(_ => new InventoryContext(Configuration.GetConnectionString("DefaultConnection")));

in startup.cs

## create class

InventoryContext: DbContext

## create class

InventoryContextFactory

## inject in homecontroller

  private readonly InventoryContext _context;

        public HomeController(InventoryContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
           // _context.Database.Create();
          //  _context.SaveChanges();
            return View();
        }

## run HomeController.cs to load Index.cshtml
  // _context.Database.Create();
  //  _context.SaveChanges();

##Now we can see the database has been created in SQL server.
