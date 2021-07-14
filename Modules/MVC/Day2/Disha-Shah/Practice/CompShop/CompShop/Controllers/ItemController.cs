using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CompShop.Controllers
{
    public class ItemController : Controller
    {
        // GET: Item
        public ActionResult Index()
        {
            ViewBag.ItemList = "Computer Shop Item List Page";
            ViewData["FirstValue"] = "Hello World";
            return View();
        }

        //public ViewResult Index()
        //{
        //    ViewBag.ItemList = "Computer Shop Item List Page";
        //    return View();
        //}

        //public EmptyResult Index()
        //{
        //    ViewBag.ItemList = "Computer Shop Item List Page";
        //    return new EmptyResult();
        //}

        //public RedirectResult Index()
        //{
        //    return Redirect("Home/Contact");
        //}

        //public JsonResult Index()
        //{
        //    Employee emp = new Employee()
        //    {
        //        ID = "Emp23",
        //        Name = "Steven Clark",
        //        Mobile = "825415426"
        //    };
        //    return Json(emp, JsonRequestBehavior.AllowGet);
        //}
        //public class Employee
        //{
        //    public string ID { get; set; }
        //    public string Name { get; set; }
        //    public string Mobile { get; set; }
        //}

        //public ContentResult Index()
        //{
        //    return Content("Hello ASP.NET MVC 5", "text/plain", System.Text.Encoding.UTF8);
        //}
    }
}