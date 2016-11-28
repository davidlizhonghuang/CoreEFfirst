using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using EFDataAccess.DataModels;
using System.Collections.Generic;
using System.Linq;


//http://www.mithunvp.com/aspnet-core-web-api-entity-framework-core/

namespace TeaJournalInventory.Controllers
{

    public class HomeController : Controller 
    {
        private readonly EFDataAccess.DataModels.InventoryContext _context;   //init context object contains data, do not need to add to startup

        public HomeController(EFDataAccess.DataModels.InventoryContext context)
        {
            _context = context;
        }

        public void init()
        {
            _context.Database.Create();
            _context.SaveChanges();
        }


        public IActionResult Index()
        {
            // init();// cod first , run only once, after db is created, disable it
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

            return Json("done");
           // return RedirectToAction("slotCRUD", "Home"); //redisplay result in home page. edit box is empty

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

                result = _context.Slots.FirstOrDefault(c => c.SlotNo == id);

            }

            return Json(result);
        }
        [HttpPost]
        public IActionResult UpdateSlot([FromBodyAttribute] Slot jslot)
        {

            var updateSlot = _context.Slots.FirstOrDefault(c => c.SlotNo == jslot.SlotNo);

            if (ModelState.IsValid)
            {

                updateSlot.SlotNo = jslot.SlotNo;

                updateSlot.SlotName = jslot.SlotName;

                updateSlot.Description = jslot.Description;

                _context.Slots.Attach(updateSlot);

                _context.Entry(updateSlot).State = System.Data.Entity.EntityState.Modified;

                _context.SaveChanges();

            }

            return Json("done");
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

            return Json("done");
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

            return Json("done");
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

                        id = rtn.ToList().Max(x => x.Id) + 1;

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

                result = _context.TeaCategorys.FirstOrDefault(c => c.Id == id);

            }

            return Json(result);
        }
        [HttpPost]
        public IActionResult UpdateCategory([FromBodyAttribute] TeaCategory jslot)
        {
            var updateSlot = _context.TeaCategorys.FirstOrDefault(c => c.Id == jslot.Id);
            if (ModelState.IsValid)
            {
                updateSlot.Id = jslot.Id;
                updateSlot.CategoryName = jslot.CategoryName;
                updateSlot.SubSlot = jslot.SubSlot;
                updateSlot.SlotNo = jslot.SlotNo;




                _context.TeaCategorys.Attach(updateSlot);
                _context.Entry(updateSlot).State = System.Data.Entity.EntityState.Modified;
                _context.SaveChanges();
            }
            return Json("done");
        }
        [HttpPost]
        public IActionResult DeleteCategory(int id)
        {

            if (ModelState.IsValid)
            {

                var updateSlot = _context.TeaCategorys.FirstOrDefault(x => x.Id == id);

                _context.Entry(updateSlot).State = System.Data.Entity.EntityState.Deleted;

                _context.SaveChanges();

            }

            return Json("done");
        }


        //tea item
        public IActionResult TeaItemCRUD()
        {
            return View();
        }

        [HttpPost]
        public IActionResult TeaItemCreate([FromBodyAttribute] TeaItem teaItem)
        {
            if (ModelState.IsValid)
            {
                _context.TeaItems.Add(teaItem);

                _context.SaveChanges();
            }

            return Json("done");
        }
        [HttpGet]
        public JsonResult GetTeaItem(HttpRequestMessage request)
        {

            List<TeaItem> result = new List<TeaItem>();

            if (ModelState.IsValid)
            {
                IQueryable<TeaItem> rtn = from temp in _context.TeaItems select temp;

                result = rtn.ToList();
            }

            return Json(result);
        }
        [HttpGet]
        public JsonResult GetnewTeaItemId()
        {

            int id = 0;

            if (ModelState.IsValid)
            {
                if (_context.TeaItems != null)
                {
                    if (_context.TeaItems.Count() > 0)
                    {

                        IQueryable<TeaItem> rtn = from temp in _context.TeaItems select temp;

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
        public JsonResult EachTeaItem(int id)
        {

            TeaItem result = new TeaItem();

            if (ModelState.IsValid)
            {

                result = _context.TeaItems.FirstOrDefault(c => c.id == id);

            }

            return Json(result);
        }
        [HttpPost]
        public IActionResult UpdateTeaItem([FromBodyAttribute] TeaItem jslot)
        {
            var updateSlot = _context.TeaItems.FirstOrDefault(c => c.id == jslot.id);
            if (ModelState.IsValid)
            {
                updateSlot.id = jslot.id;
                updateSlot.ItemName = jslot.ItemName;
                updateSlot.CategoryId = jslot.CategoryId;
                updateSlot.ItemPrice = jslot.ItemPrice;
                updateSlot.ItemUnit = jslot.ItemUnit;
                updateSlot.UnitNumber = jslot.UnitNumber;
                updateSlot.MeasureUnit = jslot.MeasureUnit;
                updateSlot.Sizes = jslot.Sizes;
                updateSlot.ItemType = jslot.ItemType;
                updateSlot.ProductDate = jslot.ProductDate;
                updateSlot.StorageDate = jslot.StorageDate;
                updateSlot.ItemTaken = jslot.ItemTaken;
                updateSlot.Imagepath = jslot.Imagepath;

                _context.TeaItems.Attach(updateSlot);

                _context.Entry(updateSlot).State = System.Data.Entity.EntityState.Modified;

                _context.SaveChanges();
            }
            return Json("done");
        }
        [HttpPost]
        public IActionResult DeleteTeaItem(int id)
        {

            if (ModelState.IsValid)
            {

                var updateSlot = _context.TeaItems.FirstOrDefault(x => x.id == id);

                _context.Entry(updateSlot).State = System.Data.Entity.EntityState.Deleted;

                _context.SaveChanges();

            }

            return Json("done");
        }


        public IActionResult ErrorFor500()
        {
            return View();
        }

        public IActionResult ErrorFor404()
        {
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



