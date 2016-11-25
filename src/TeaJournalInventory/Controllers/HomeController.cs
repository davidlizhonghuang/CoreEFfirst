using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using TeaJournalInventory.DataModels;
using System.Collections.Generic;
using System.Linq;

//http://www.mithunvp.com/aspnet-core-web-api-entity-framework-core/

namespace TeaJournalInventory.Controllers
{
    public class HomeController : Controller  //I can change this as api controller
    {
        private readonly InventoryContext _context;

        public HomeController(InventoryContext context)
        {
            _context = context;
        }

        public void init() {

            _context.Database.Create();

            _context.SaveChanges();

        }

        public IActionResult Index()
        {
            //init(); cod first , run only once, after db is created, disable it
            return View();
        }
        
        //slot 
        [HttpPost]
        public IActionResult Create([FromBodyAttribute] Slot slot)
        {
            if (ModelState.IsValid)
            {
                _context.Slots.Add(slot);

                _context.SaveChanges();
            }

            return RedirectToAction("Index", "Home"); //redisplay result in home page. edit box is empty

        }
        [HttpGet]
        public JsonResult GetSlot(HttpRequestMessage request)
        {

            List<Slot> result = new List<Slot>();

            if (ModelState.IsValid)
            {
                IQueryable<Slot> rtn = from temp in _context.Slots select temp;

                result = rtn.ToList();
            }

            return Json(result);
        }
        [HttpGet]
        public JsonResult GetnewId()
        {

            int id = 0;

            if (ModelState.IsValid)
            {
                if (_context.Slots != null)
                {
                    if (_context.Slots.Count() > 0)
                    {

                        IQueryable<Slot> rtn = from temp in _context.Slots select temp;

                        id = rtn.ToList().Max(x => x.SlotNo) + 1;

                    }
                    else
                    {
                        id = 1;
                    }
                }
                else
                {
                    id = 1;
                }

            }
            return Json(id);
        }
        [HttpGet]
        public JsonResult EachSlot(int id)
        {

            Slot result = new Slot();

            if (ModelState.IsValid)
            {

                result = _context.Slots.FirstOrDefault(c=>c.SlotNo==id);
              
            }

            return Json(result);
        }
        [HttpPost]
        public IActionResult UpdateSlot([FromBodyAttribute] Slot jslot, HttpRequestMessage request)
        {

            HttpResponseMessage response;

            var updateSlot= _context.Slots.FirstOrDefault(c=>c.SlotNo== jslot.SlotNo);

            if (ModelState.IsValid)
            {

                updateSlot.SlotNo = jslot.SlotNo;

                updateSlot.SlotName = jslot.SlotName;

                updateSlot.Description = jslot.Description;

                _context.Slots.Attach(updateSlot);

                _context.Entry(updateSlot).State = System.Data.Entity.EntityState.Modified;

                _context.SaveChanges();

            }

           return RedirectToAction("Index","Home"); //redisplay result in home page. edit box is empty
        }
        [HttpPost]
        public IActionResult DeleteSlot(int id)
        {

            if (ModelState.IsValid)
            {

                 var updateSlot = _context.Slots.FirstOrDefault(x => x.SlotNo == id);

                _context.Entry(updateSlot).State = System.Data.Entity.EntityState.Deleted;

                _context.SaveChanges();

            }

            return RedirectToAction("Index", "Home"); //redisplay result in home page. edit box is empty
        }

        public IActionResult SlotCRUD()
        {
            return View();
        }

        public IActionResult CategoryCRUD()
        {
            return View();
        }

        //  TeaCategorys
        [HttpPost]
        public IActionResult CategoryCreate([FromBodyAttribute] TeaCategory teaCategory)
        {
            if (ModelState.IsValid)
            {
                _context.TeaCategorys.Add(teaCategory);

                _context.SaveChanges();
            }

            return RedirectToAction("Index", "Home"); //redisplay result in home page. edit box is empty

        }
        [HttpGet]
        public JsonResult GetCategory(HttpRequestMessage request)
        {

            List<TeaCategory> result = new List<TeaCategory>();

            if (ModelState.IsValid)
            {
                IQueryable<TeaCategory> rtn = from temp in _context.TeaCategorys select temp;

                result = rtn.ToList();
            }

            return Json(result);
        }
        [HttpGet]
        public JsonResult GetnewCategoryId()
        {

            int id = 0;

            if (ModelState.IsValid)
            {
                if (_context.TeaCategorys != null)
                {
                    if (_context.TeaCategorys.Count() > 0)
                    {

                        IQueryable<TeaCategory> rtn = from temp in _context.TeaCategorys select temp;

                        id = rtn.ToList().Max(x => x.id) + 1;

                    }
                    else
                    {
                        id = 1;
                    }
                }
                else
                {
                    id = 1;
                }

            }
            return Json(id);
        }
        [HttpGet]
        public JsonResult EachCategory(int id)
        {

            TeaCategory result = new TeaCategory();

            if (ModelState.IsValid)
            {

                result = _context.TeaCategorys.FirstOrDefault(c => c.id == id);

            }

            return Json(result);
        }
        [HttpPost]
        public IActionResult UpdateCategory([FromBodyAttribute] TeaCategory jslot)
        {
            var updateSlot = _context.TeaCategorys.FirstOrDefault(c => c.id == jslot.id);
            if (ModelState.IsValid)
            {
                updateSlot.id = jslot.id;
                updateSlot.CategoryName = jslot.CategoryName;
                updateSlot.parentId = jslot.parentId;
                updateSlot.SlotNo = jslot.SlotNo;
                _context.TeaCategorys.Attach(updateSlot);
                _context.Entry(updateSlot).State = System.Data.Entity.EntityState.Modified;
                _context.SaveChanges();
            }
            return RedirectToAction("Index", "Home"); //redisplay result in home page. edit box is empty
        }
        [HttpPost]
        public IActionResult DeleteCategory(int id)
        {

            if (ModelState.IsValid)
            {

                var updateSlot = _context.TeaCategorys.FirstOrDefault(x => x.id == id);

                _context.Entry(updateSlot).State = System.Data.Entity.EntityState.Deleted;

                _context.SaveChanges();

            }

            return RedirectToAction("Index", "Home"); //redisplay result in home page. edit box is empty
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
