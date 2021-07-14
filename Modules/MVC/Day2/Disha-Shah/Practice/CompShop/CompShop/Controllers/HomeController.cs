using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CompShop.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            TempData["FirstValue"] = "Hello World";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            if (TempData["FirstValue"] != null)
            {
                TempData.Keep();
                return RedirectToAction("Contact");
            }
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public JavaScriptResult WarningMessage()
        {
            var msg = "alert('Are you sure want to Continue?');";
            return new JavaScriptResult() { Script = msg };
        }

        [HttpGet]
        public FileResult Download()
        {
            byte[] fileBytes = System.IO.File.ReadAllBytes(@"D:\Radixweb-Daily Entry\MVC\practicalforpartialview.txt");
            string filename = "myfile.txt";
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, filename);
        }

        [HttpGet]
        public PartialViewResult messagepage()
        {
            return PartialView("message");
        }

        public ActionResult DarkLayoutPage()
        {
            return View();
        }
    }
}