using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using EFDataAccess.DataModels;
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

        [HttpGet]
        public JsonResult GetEachLabel(HttpRequestMessage request)
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

        [HttpPost]
        public JsonResult SearchLabel([FromBody] SearchPara para)
        {
            List<LabelData> result = new List<LabelData>();

            if (ModelState.IsValid)
            {
                var rtn = from s in _context.Slots
                          join c in _context.TeaCategorys on s.SlotNo equals c.SlotNo
                          join p in _context.TeaItems on c.Id equals p.CategoryId
                          into ps
                          from p in ps.DefaultIfEmpty()
                          where (s.SlotName == para.SlotName || c.CategoryName == para.CategoryName || p.ItemName == para.ItemName)
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


        public IActionResult PrintLabel()
        {
            return View();
        }


    }

    public class LabelData
    {
       public string Slot { get; set; }
        public string Category { get; set; }
        public string ItemName { get; set; }
        public double ItemPrice { get; set; }
    }

    public class SearchPara
    {
        public string ItemName { get; set; }
        public string SlotName { get; set; }
        public string CategoryName { get; set; }
    }

}

