using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TeaJournalInventory.DataModels;
using System.Net.Http;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TeaJournalInventory.Controllers
{
    public class LabelController : Controller
    {

        private readonly InventoryContext _context;

        public LabelController(InventoryContext context)
        {
            _context = context;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {

            return View();
        }


        [HttpGet]
        public JsonResult GetLabels(HttpRequestMessage request)
        {
            List<LabelData> result = new List<LabelData>();

            if (ModelState.IsValid)
            {
              var rtn = from s in _context.Slots
                                                    join c in _context.TeaCategorys on s.SlotNo equals c.SlotNo
                                                    join p in _context.TeaItems on c.Id equals p.CategoryId into ps
                                                    from p in ps.DefaultIfEmpty()
                                                    select new LabelData
                                                    {
                                                        Slot = s.SlotName,
                                                        Category = c.CategoryName,
                                                        ItemName = p == null ? "(No products)" : p.ItemName,
                                                        ItemPrice = p == null ? 0 : p.ItemPrice
                                                    };

                result = rtn.ToList();
               
            }
            return Json(result);
        }


    }

    public class LabelData
    {
       public string Slot { get; set; }
        public string Category { get; set; }
        public string ItemName { get; set; }
        public double ItemPrice { get; set; }
    };

}

