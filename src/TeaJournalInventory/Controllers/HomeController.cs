using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TeaJournalInventory.DataModels;

//http://www.mithunvp.com/aspnet-core-web-api-entity-framework-core/

namespace TeaJournalInventory.Controllers
{
    public class HomeController : Controller
    {
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

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
